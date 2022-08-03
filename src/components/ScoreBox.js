import React, { useRef, useEffect} from 'react'
import VexFlow, { Accidental } from 'vexflow'
import { Score } from "react-vexflow";
import { useRecoilState, useRecoilValue } from 'recoil'
import Vex from "vexflow";
import { context as contextAtom } from '../redux/store';


const VF = VexFlow.Flow;
const { Formatter, Renderer, Stave, StaveNote ,Dot} = VF;

const clefAndTimeWidth = 60;



 const ScoreBox = ({notes, timeSign, violin}) => {
    function dotted(staveNote) {
        Dot.buildAndAttach([staveNote]);
        return staveNote;
    }


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
    renderer.resize(950, 230);
    const context = renderer.getContext();
    //const staveWidth = (width - clefAndTimeWidth) / staves.length;
    context.setFont('Arial', 10, '').setBackgroundFillStyle('red')
    const staveMeasure = new Stave(35, 100, 400);
    const staveMeasure1 = new Stave(500, 100, 400);
    if(violin == true){
        staveMeasure.setContext(context).draw();
        staveMeasure1.setContext(context).draw();
    }
    else{
        staveMeasure.setContext(context).draw();
        staveMeasure1.setContext(context).draw();
    }
    

    const measureNotes1 = []
    const measureNotes2 = []
    const notes_ =  notes.filter(piece => piece.show == true && piece.locked == false)
    
    if(notes_ != undefined){
    for (let index = 0; index < notes_.length; index++) {
        if(notes_[index] != undefined){
        measureNotes1.push(new StaveNote({ keys: notes_[index].type, duration: notes_[index].duration }))
        }
    }
}

/*
    
    
    measureNotes1.push(new StaveNote({ keys:["g/3"], duration:"16"}))
    measureNotes1.push(new StaveNote({ keys:["a/3"], duration:"16"}))
    measureNotes1.push(new StaveNote({ keys:["b/3"], duration:"16"}))
    measureNotes1.push(new StaveNote({ keys:["c/4"], duration:"16"}))
    measureNotes1.push(new StaveNote({ keys:["d/4"], duration:"16"}))
    measureNotes1.push(new StaveNote({ keys:["e/4"], duration:"16"}))
    measureNotes1.push(new StaveNote({ keys:["f/4"], duration:"16"}))
    measureNotes1.push(new StaveNote({ keys:["g/4"], duration:"16"}))
    measureNotes1.push(new StaveNote({ keys:["a/4"], duration:"16"}))
    measureNotes2.push(new StaveNote({ keys:["b/4"], duration:"16"}))
    measureNotes2.push(new StaveNote({ keys:["c/5"], duration:"16"}))
    measureNotes2.push(new StaveNote({ keys:["d/5"], duration:"16"}))
    measureNotes2.push(new StaveNote({ keys:["e/5"], duration:"16"}))
    measureNotes2.push(new StaveNote({ keys:["f/5"], duration:"16"}))
    measureNotes2.push(new StaveNote({ keys:["g/5"], duration:"16"}))
    measureNotes2.push(new StaveNote({ keys:["a/5"], duration:"16"}))
    measureNotes2.push(new StaveNote({ keys:["b/5"], duration:"16"}))
    measureNotes2.push(new StaveNote({ keys:["c/6"], duration:"16"}))
     
    */
    
    if(measureNotes1.length>0){
    
    Formatter.FormatAndDraw(context, staveMeasure, measureNotes1);
    
   // Formatter.FormatAndDraw(context, staveMeasure1, measureNotes2);
    }

    

    

},[notes])

    return <div ref={container}  />

}


export default ScoreBox;