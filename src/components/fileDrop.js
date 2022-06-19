import React, { useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import {midiFiles as midiFilesAtom} from '../redux/store'
import { useRecoilState, useRecoilValue } from 'recoil'



const fileTypes = ["MID"];

function DragDrop() {
  const [midiFiles, setmidiFiles] = useRecoilState(midiFilesAtom);
  const handleChange = (file) => {
    setmidiFiles(file)
    
  };

  useEffect(() => {

    /*const reader = new FileReader()
    if(midiFiles){
      reader.readAsText(midiFiles)
    }
    

    reader.onload = function(e) {
        var content = reader.result
        alert(content)
    }*/


    
   

},[])

  return (
    <FileUploader  label="" classes='test' handleChange={handleChange} name="file" types={fileTypes} />
  );
}

export default DragDrop;