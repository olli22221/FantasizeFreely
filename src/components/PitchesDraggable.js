import React ,{useEffect, useRef, useState} from 'react';

import {dragging as dragAtom, replaceActivated as replaceActivatedAtom} from '../redux/store'
import { useRecoilState, useRecoilValue } from 'recoil';
import { margin } from '@mui/system';


function PitchesDraggable({item ,url,index, moveItem, target,addPitch,replacePitch}) {
    const ref = useRef(null)
    const [dragging, setDragging] = useRecoilState(dragAtom);
    const replaceActivated = useRecoilValue(replaceActivatedAtom)
    const [buttonActivated,setButtonActivated] = useState(false)
    const [panelsrc,setPanelsrc] = useState(false)


    
    const add = (item) => {
        addPitch(item)
    } 

    const replace = (item) => {
        replacePitch(item)
    }

    useEffect(() => {
        console.log(panelsrc)
        console.log(url)

       

    }, [panelsrc,url])




    return(
        
           <div style={{ border: buttonActivated?
         '4px solid darkblue': '4px solid #b0b0b0'}}  className='column6'
            onClick={()=>{if(!replaceActivated){add(item)}else{replace(item)}}} onMouseDown={()=>{
                setButtonActivated(true); setPanelsrc(true)
            }} onMouseUp={()=>{setButtonActivated(false);setPanelsrc(false)}}> 
           <div className='h5'>A </div>
                   <div style={{marginLeft:"30px"}}>
                    
        <img 
            className="flex-pitch"
            height="135px" 
            width="39px" 
            src= {url.panelsrc} 
           
            
            
        />

                    
        </div>
        </div>
        
                       
       
    )

    }

    export default PitchesDraggable;