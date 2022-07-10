import React, { useRef, useEffect} from 'react'
import VexFlow from 'vexflow'
import { Score } from "react-vexflow";
import { useRecoilState, useRecoilValue } from 'recoil'
import Vex from "vexflow";


const VF = VexFlow.Flow;
const { Formatter, Renderer, Stave, StaveNote } = VF;

const clefAndTimeWidth = 60;



 const ScoreBox = ({notes, timeSign, violin}) => {


    const container = useRef();
    const rendererRef = useRef();

    useEffect(() => {
    if (rendererRef.current == null) {
    rendererRef.current = new Renderer(
    container.current,
    Renderer.Backends.SVG
    );
    }


    const renderer = rendererRef.current;
    renderer.resize(450, 100);
    const context = renderer.getContext();
    //const staveWidth = (width - clefAndTimeWidth) / staves.length;
    context.setFont('Arial', 10, '').setBackgroundFillStyle('#eed')
    const staveMeasure = new Stave(35, -10, 400);
    if(violin == true){
        staveMeasure.addClef("treble").addTimeSignature(timeSign).setContext(context).draw();
    }
    else{
        staveMeasure.setContext(context).draw();
    }

    const measureNotes1 = []
    const notes_ =  notes.filter(piece => piece.show == true)

    if(notes_ != undefined){
    for (let index = 0; index < notes.length; index++) {
        if(notes_[index] != undefined){
        measureNotes1.push(new StaveNote({ keys: notes_[index].type, duration: notes_[index].duration }))
        }
    }
}
    
    //measureNotes1.push(new StaveNote({ keys:["c/4"], duration:"h"}))
    
    if(measureNotes1.length>0){
    
    Formatter.FormatAndDraw(context, staveMeasure, measureNotes1);
    }

    

    

},[notes])

    return <div ref={container}  />

}


export default ScoreBox;