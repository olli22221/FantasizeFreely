import React ,{useEffect, useRef} from 'react';

import {dragging as dragAtom, replaceActivated as replaceActivatedAtom} from '../redux/store'
import { useRecoilState, useRecoilValue } from 'recoil';


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
                   
        <img 
            className="flex-pitch"
            height="70px" 
            width="55px" 
            src={url.src} 
            style={{border:"2px solid darkgreen"}} 
            onClick={()=>{if(!replaceActivated){add(item)}else{replace(item)}}}
            
        />
    )

    }

    export default PitchesDraggable;