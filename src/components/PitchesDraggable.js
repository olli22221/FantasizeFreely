import React ,{useEffect, useRef} from 'react';
import {useDrag,} from 'react-dnd'
import {dragging as dragAtom} from '../redux/store'
import { useRecoilState } from 'recoil';


function PitchesDraggable({item ,url,index, moveItem, target,addPitch}) {
    const ref = useRef(null)
    const [dragging, setDragging] = useRecoilState(dragAtom);

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
        console.log(dragging)

    }, [isDragging])

    const add = (item) => {
        addPitch(item)
    } 



    return(
                   
        <img 
            className="flex-pitch"
            height="128px" 
            width="35px" 
            src={url.src} 
            style={{border: isDragging ? "5px solid darkblue": "0px"}} 
            onClick={()=>add(item)}
            
        />
    )

    }

    export default PitchesDraggable;