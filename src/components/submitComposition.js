import React, { useEffect, useState } from "react";
import {midiFiles as midiFilesAtom, jwtToken as jwtTokenAtom, 
  subjectId as subjectIdAtom, counter as counterAtom, 
  musicatResponse as musicatResponseAtom} from '../redux/store'
import { useRecoilState, useRecoilValue } from 'recoil'
import axios from "axios";
import { calculateSteps } from './util';



function SubmitComposition({composition,meter}) {

const jwtToken = useRecoilValue(jwtTokenAtom)
const midiFiles = useRecoilValue(midiFilesAtom);
let id = useRecoilValue(subjectIdAtom);
const [counter, setCounter] = useRecoilState(counterAtom);
const [musicatResponse, setmusicatResponse] = useRecoilState(musicatResponseAtom);

const checkComposition = (composition_,meter_) => {
  console.log(composition_)
  console.log(meter_)

  for (let index = 0; index < composition_.length; index++) {
    const measure = composition_[index].filter(element => element.locked == false && element.occupied==true)
    let meterInformation = meter_[index].numberofPlaces - 1
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
      result.push(meter_[index].numberofPlaces)
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
      console.log("Composition is not complete")
      return
    }
    let cnt = counter
    
    const finalComposition = prepareComposition(composition)
    const finalMeter = prepareMeter(meter)

    let payload = {
        data: finalComposition,
        meter: finalMeter
    }
    
    

    axios.post("http://192.168.178.46:5000/runMusicat", JSON.stringify(payload), {
        headers: {
            "Content-Type": "application/json"
            
        }
    }).then((response) => {
        console.log(response.data)
        setmusicatResponse(response.data)

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
    <div className='file-upload-submit'>
        <button onClick={handleSubmit} > Submit Composition</button>
      </div>
  );
}

export default SubmitComposition;