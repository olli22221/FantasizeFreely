import React, { useEffect, useState } from "react";
import {midiFiles as midiFilesAtom, jwtToken as jwtTokenAtom, subjectId as subjectIdAtom, counter as counterAtom} from '../redux/store'
import { useRecoilState, useRecoilValue } from 'recoil'
import axios from "axios";


function SubmitComposition({composition,meter}) {

const jwtToken = useRecoilValue(jwtTokenAtom)
const midiFiles = useRecoilValue(midiFilesAtom);
let id = useRecoilValue(subjectIdAtom);
const [counter, setCounter] = useRecoilState(counterAtom);

const checkComposition = (composition) => {

    console.log(composition)


}
  const handleSubmit = () => {

    checkComposition(composition,meter)
    let cnt = counter
    let payload = {
        data: composition,
        meter: meter
    }
    console.log(payload)
    
    

    axios.post("http://192.168.178.46:5000/runMusicat", JSON.stringify(payload), {
        headers: {
            "Content-Type": "application/json"
            
        }
    }).then((response) => {
        console.log(response.data)
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
        <button onClick={handleSubmit} > Submit File</button>
      </div>
  );
}

export default SubmitComposition;