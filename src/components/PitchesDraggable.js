import React ,{useEffect, useRef} from 'react';

import {dragging as dragAtom, replaceActivated as replaceActivatedAtom} from '../redux/store'
import { useRecoilState, useRecoilValue } from 'recoil';
import { margin } from '@mui/system';


function PitchesDraggable({item ,url,index, moveItem, target,addPitch,replacePitch}) {
    const ref = useRef(null)
    const [dragging, setDragging] = useRecoilState(dragAtom);
    const replaceActivated = useRecoilValue(replaceActivatedAtom)

    
    const add = (item) => {
        addPitch(item)
    } 

    const replace = (item) => {
        replacePitch(item)
    }



    return(
        
           <div className='column6'> 
           <div className='h5'>A </div>
                   <div style={{marginLeft:"25px",marginTop:"5px"}}>
        <img 
            className="flex-pitch"
            height="120px" 
            width="29px" 
            src={url.panelsrc} 
           
            onClick={()=>{if(!replaceActivated){add(item)}else{replace(item)}}}
            
        />
        </div>
        </div>
        
                       
       
    )

    }

    export default PitchesDraggable;