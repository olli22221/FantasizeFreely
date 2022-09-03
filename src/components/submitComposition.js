import React, { useEffect, useState } from "react";
import {midiFiles as midiFilesAtom, jwtToken as jwtTokenAtom, 
  subjectId as subjectIdAtom, counter as counterAtom, 
  musicatResponse as musicatResponseAtom, originalityScore as originalityScoreAtom,
  fluencyScore as fluencyScoreAtom,flexabilityScore as flexabilityScoreAtom,
submissions as submissionsAtom, inspirationFlag as inspirationFlagAtom } from '../redux/store'
import { useRecoilState, useRecoilValue } from 'recoil'
import axios from "axios";
import { calculateSteps } from './util';
import { useNavigate } from "react-router-dom";
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import { useAlert } from 'react-alert'

function SubmitComposition({composition,meter}) {
  let nav = useNavigate();
  const alert = useAlert()

const jwtToken = useRecoilValue(jwtTokenAtom)
const midiFiles = useRecoilValue(midiFilesAtom);
const inspirationFlag = useRecoilValue(inspirationFlagAtom);
let id = useRecoilValue(subjectIdAtom);
const [counter, setCounter] = useRecoilState(counterAtom);
const [submissions, setSubmissions] = useRecoilState(submissionsAtom);
const [musicatResponse, setmusicatResponse] = useRecoilState(musicatResponseAtom);
const [originalityScore, setOriginalityScore] = useRecoilState(originalityScoreAtom);
const [flexabilityScore, setFlexabilityScore] = useRecoilState(flexabilityScoreAtom);
const [fluencyScore, setFluencyScore] = useRecoilState(fluencyScoreAtom);

const checkComposition = (composition_,meter_) => {
  console.log(composition_)
  console.log(meter_)

  for (let index = 0; index < composition_.length; index++) {
    const measure = composition_[index].filter(element => element.locked == false && element.occupied==true)
    let meterInformation = meter_ - 1
    for (let idx = 0; idx < measure.length; idx++) {
        const dur = calculateSteps(measure[idx].duration)
        meterInformation = meterInformation - dur
      
    }
    if (meterInformation > 0) {
      return false
    }


  }
  return true
    

}

const prepareMeter = (meter_) => {
  let result = []
  for (let index = 0; index < meter_.length; index++) {
      result.push(meter_.numberofPlaces)
  }
  console.log(result)
  return result


}

const prepareComposition = (composition_) => {
  let result = []
  
  for (let index = 0; index < composition_.length; index++) {

    const measure = composition_[index].filter(element => element.locked == false && element.occupied==true)
    
    let tmpMeasure = []
    for (let idx = 0; idx < measure.length; idx++) {
      let tmpNote = {
        type: measure[idx].type,
        duration: measure[idx].duration,
        accented: measure[idx].accented
      }
      tmpMeasure.push(tmpNote)

    }
    result.push(tmpMeasure)
  }
  
  return result


}

  const handleSubmit = () => {

    const check = checkComposition(composition,meter)
    if(!check){
      alert.show('Composition is not complete. You need to compose at least 2 phrases');
      return
    }
    let cnt = counter
    
    const finalComposition = prepareComposition(composition)

    let payload = {
        data: finalComposition,
        jwtToken: jwtToken
    }
    
    

    axios.post("https://fantasifreely.de/submitComposition", JSON.stringify(payload), {
        headers: {
            "Content-Type": "application/json"
            
        }
    }).then((response) => {
        console.log(response)
        setFlexabilityScore(response.data['flexability'])
        setFluencyScore(response.data['fluency'])
        setOriginalityScore(response.data['originality'])
        setmusicatResponse(response.data['musicatPNG'])
        const submissionCount = submissions + 1
        setSubmissions(submissionCount)
        
        
        nav("/Result")

    }).catch((error) => {
      console.log(error)
    });
    
   /* data.append("count", counter)
    data.append("file", midiFiles)
    data.append("jwtToken", jwtToken)
    axios.post("http://192.168.178.46:5000/upload", data,{
        headers: {
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Origin": "true",
        }
    })
    .then((response) => {
        console.log(response.data)
    }).catch((error) => {
      console.log(error)
    });
    cnt++;
    setCounter(cnt)
    console.log(counter)*/


    
  };

  useEffect(() => {

    
   

},[])

  return (
    <div >
       <Button onClick={handleSubmit} style={{"fontWeight": "bold","borderRadius":"5px","color":"white","height":"50px","backgroundColor":"#403c3b","border":"#403c3b 2px solid"}} variant="contained" endIcon={<SendIcon />}>
        Submit Composition
      </Button>
      </div>
  );
}

export default SubmitComposition;