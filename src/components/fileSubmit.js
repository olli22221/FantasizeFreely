import React, { useEffect, useState } from "react";
import {midiFiles as midiFilesAtom, jwtToken as jwtTokenAtom, subjectId as subjectIdAtom, counter as counterAtom} from '../redux/store'
import { useRecoilState, useRecoilValue } from 'recoil'
import axios from "axios";


function SubmitFile() {

const jwtToken = useRecoilValue(jwtTokenAtom)
const midiFiles = useRecoilValue(midiFilesAtom);
let id = useRecoilValue(subjectIdAtom);
const [counter, setCounter] = useRecoilState(counterAtom);

  const handleSubmit = () => {
    let cnt = counter
    const data = new FormData();
    
    data.append("count", counter)
    data.append("file", midiFiles)
    data.append("jwtToken", jwtToken)
    axios.post("http://192.168.178.46:5000/upload", data,{
        headers: {
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Origin": "true",
        }
    })
    .then((response) => {
        console.log(response)
    }).catch((error) => {
      console.log(error)
    });
    cnt++;
    setCounter(cnt)
    console.log(counter)


    
  };

  useEffect(() => {

    
   

},[])

  return (
    <div className='file-upload-submit'>
        <button onClick={handleSubmit} > Submit File</button>
      </div>
  );
}

export default SubmitFile;