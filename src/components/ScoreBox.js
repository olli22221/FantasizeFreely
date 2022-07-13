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
    renderer.resize(450, 130);
    const context = renderer.getContext();
    //const staveWidth = (width - clefAndTimeWidth) / staves.length;
    context.setFont('Arial', 10, '').setBackgroundFillStyle('#eed')
    const staveMeasure = new Stave(35, 15, 400);
    if(violin == true){
        staveMeasure.addClef("treble").addTimeSignature(timeSign).setContext(context).draw();
    }
    else{
        staveMeasure.setContext(context).draw();
    }
    

    const measureNotes1 = []
    const notes_ =  notes.filter(piece => piece.show == true)

   /* if(notes_ != undefined){
    for (let index = 0; index < notes.length; index++) {
        if(notes_[index] != undefined){
        measureNotes1.push(new StaveNote({ keys: notes_[index].type, duration: notes_[index].duration }))
        }
    }
}*/
    
    
   /* measureNotes1.push(new StaveNote({ keys:["g/3"], duration:"w"}).addModifier(new Accidental("#")))
    measureNotes1.push(new StaveNote({ keys:["a/3"], duration:"w"}).addModifier(new Accidental("#")))
    measureNotes1.push(new StaveNote({ keys:["b/3"], duration:"w"}).addModifier(new Accidental("#")))
    measureNotes1.push(new StaveNote({ keys:["c/4"], duration:"w"}).addModifier(new Accidental("#")))
    measureNotes1.push(new StaveNote({ keys:["d/4"], duration:"w"}).addModifier(new Accidental("#")))
    measureNotes1.push(new StaveNote({ keys:["e/4"], duration:"w"}).addModifier(new Accidental("#")))
    measureNotes1.push(new StaveNote({ keys:["f/4"], duration:"w"}).addModifier(new Accidental("#")))
    measureNotes1.push(new StaveNote({ keys:["g/4"], duration:"w"}).addModifier(new Accidental("#")))
    measureNotes1.push(new StaveNote({ keys:["a/4"], duration:"w"}).addModifier(new Accidental("#")))
   */ measureNotes1.push(new StaveNote({ keys:["b/4"], duration:"w"}).addModifier(new Accidental("#")))
    measureNotes1.push(new StaveNote({ keys:["c/5"], duration:"w"}).addModifier(new Accidental("#")))
    measureNotes1.push(new StaveNote({ keys:["d/5"], duration:"w"}).addModifier(new Accidental("#")))
    measureNotes1.push(new StaveNote({ keys:["e/5"], duration:"w"}).addModifier(new Accidental("#")))
    measureNotes1.push(new StaveNote({ keys:["f/5"], duration:"w"}).addModifier(new Accidental("#")))
    measureNotes1.push(new StaveNote({ keys:["g/5"], duration:"w"}).addModifier(new Accidental("#")))
    measureNotes1.push(new StaveNote({ keys:["a/5"], duration:"w"}).addModifier(new Accidental("#")))
    measureNotes1.push(new StaveNote({ keys:["b/5"], duration:"w"}).addModifier(new Accidental("#")))
    measureNotes1.push(new StaveNote({ keys:["c/6"], duration:"w"}).addModifier(new Accidental("#")))
    
    
    if(measureNotes1.length>0){
    
    Formatter.FormatAndDraw(context, staveMeasure, measureNotes1);
    }

    

    

},[notes])

    return <div ref={container}  />

}


export default ScoreBox;