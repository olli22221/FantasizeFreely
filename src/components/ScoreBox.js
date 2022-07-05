import React, { useRef, useEffect} from 'react'
import VexFlow from 'vexflow'
import { Score } from "react-vexflow";
import { useRecoilState, useRecoilValue } from 'recoil'
import Vex from "vexflow";


const VF = VexFlow.Flow;
const { Formatter, Renderer, Stave, StaveNote } = VF;

const clefAndTimeWidth = 60;



 const ScoreBox = () => {


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
    const staveFirstMeasure = new Stave(35, -10, 400);
    staveFirstMeasure.addClef("treble").addTimeSignature("4/4").setContext(context).draw();
    
    const measureNotes1 = [new StaveNote({ keys: ["c/4"], duration: "8d" }),
    new StaveNote({ keys: ["d/4"], duration: "16d" }),
    new StaveNote({ keys: ["d/4"], duration: "16d" }),
    new StaveNote({ keys: ["d/4"], duration: "16d" }),
    new StaveNote({ keys: ["d/4"], duration: "16d" }),
    new StaveNote({ keys: ["d/4"], duration: "8d" }), 
    new StaveNote({ keys: ["c/4"], duration: "8d" }),
    new StaveNote({ keys: ["d/4"], duration: "8d" }),
    new StaveNote({ keys: ["d/4"], duration: "8d" }),
    new StaveNote({ keys: ["d/4"], duration: "8d" }),   ]
    

    
    Formatter.FormatAndDraw(context, staveFirstMeasure, measureNotes1);


})

    return <div ref={container}  />

}


export default ScoreBox;