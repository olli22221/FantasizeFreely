import React ,{useEffect, useRef} from 'react';
import {useDrag,} from 'react-dnd'
import {dragging as dragAtom, replaceActivated as replaceActivatedAtom} from '../redux/store'
import { useRecoilState, useRecoilValue } from 'recoil';


function PitchesDraggable({item ,url,index, moveItem, target,addPitch,replacePitch}) {
    const ref = useRef(null)
    const [dragging, setDragging] = useRecoilState(dragAtom);
    const replaceActivated = useRecoilValue(replaceActivatedAtom)

    const [{isDragging}, drag] = useDrag( {
        type: "Pitches", 
        item: {...item , index:index},
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),

        }),
    });

    drag(ref)

    useEffect(() => {

        setDragging(isDragging)

    }, [isDragging])

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