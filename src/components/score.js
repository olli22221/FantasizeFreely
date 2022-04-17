import React, { useRef, useEffect} from 'react'
import VexFlow, { BoundingBox } from 'vexflow'
import { useRecoilState, useRecoilValue } from 'recoil'
import { musicNotes as musicNotesAtom, noteCount as noteCountAtom, notePointer as notePointerAtom } from '../redux/store'

const VF = VexFlow.Flow
const { Formatter, Renderer, Stave, StaveNote ,Beam} = VF

const clefWidth = 30;
const timeWidth = 30;



const Score = (props,ref) => {

  const [musicNotes, setMusicNotes] = useRecoilState(musicNotesAtom);
  const [notePointer, setNotePointer] = useRecoilState(notePointerAtom);
  const [noteCount, setNoteCounter] = useRecoilState(noteCountAtom);
  const container = useRef()
  const rendererRef = useRef()

  useEffect(() => {
    
    
      let count = musicNotes.length
      console.log(musicNotes.length)
      setNoteCounter(count)
      console.log(noteCount)
      
  

    let pointer = noteCount-1
    setNotePointer(pointer)
      
  

    console.log(notePointer)
    console.log(musicNotes)
    console.log(noteCount)
    if (rendererRef.current == null) {
      rendererRef.current = new Renderer(
        container.current,
        Renderer.Backends.SVG
      )
    }

    if(global.context === undefined){
      const renderer = rendererRef.current
      renderer.resize(1800, 200)
      global.context = renderer.getContext()
      const context = global.context
      global.group = context.openGroup();
    }
    else{
      global.context.closeGroup();
      global.context.svg.removeChild(global.group)
      console.log(global.context)
      
      const context = global.context
      global.group = context.openGroup();
      

    }
    const context = global.context
    const group = global.group
    context.setFont('Arial', 10, '').setBackgroundFillStyle('#eed')
    const staveFirstMeasure = new Stave(25, 50, 400);
    staveFirstMeasure.addClef("treble").addTimeSignature("4/4").setContext(context).draw();
    
    const staveSecondMeasure = new Stave(staveFirstMeasure.width+staveFirstMeasure.x,50,400);
    staveSecondMeasure.setContext(context).draw();


    const staveThirdMeasure = new Stave(staveSecondMeasure.width+staveSecondMeasure.x,50,400);
    staveThirdMeasure.setContext(context).draw();
    const staveFourthMeasure = new Stave(staveThirdMeasure.width+staveThirdMeasure.x,50,400);
    staveFourthMeasure.setContext(context).draw();
    // Add a clef and time signature.
    
     //context.closeGroup();
     //context.SVG.removeChild(group);
    
    

    // Connect it to the rendering context and draw!
    const measureNotes1 = []
    const measureNotes2 = []
    let holdEightnotes = []
    let durationThreshold = 0
    let tempnoteCount = 0
    if (noteCount != musicNotes.length) {
      tempnoteCount = musicNotes.length
    }
    else{
      tempnoteCount = noteCount
    }
    
    for (let index = 0; index < tempnoteCount; index++) {
      const element = musicNotes[index];
      console.log(noteCount)
      console.log(element)

      if ( durationThreshold < 4) {
        switch (element.duration) {
          case "w":
            measureNotes1.push(new StaveNote(element))
            durationThreshold=durationThreshold+4
            break;
          case "h":
            measureNotes1.push(new StaveNote(element))
            durationThreshold=durationThreshold+2
            break;
          case "q":
            measureNotes1.push(new StaveNote(element))
            durationThreshold=durationThreshold+1
            break;

          case "qr":
            measureNotes1.push(new StaveNote(element))
            durationThreshold=durationThreshold+1
            break;
          case "8d":
            measureNotes1.push(new StaveNote(element))
            durationThreshold=durationThreshold+0.5
            break;
          case "16d":
            measureNotes1.push(new StaveNote(element))
            durationThreshold=durationThreshold+0.5
            break;
        
          default:
            break;
        }
        
     }
      else{

        switch (element.duration) {
          case "w":
            measureNotes2.push(new StaveNote(element))
            durationThreshold=durationThreshold+4
            break;
          case "h":
            measureNotes2.push(new StaveNote(element))
            durationThreshold=durationThreshold+2
            break;
          case "q":
            measureNotes2.push(new StaveNote(element))
            durationThreshold=durationThreshold+1
            break;

          case "qr":
            measureNotes2.push(new StaveNote(element))
            durationThreshold=durationThreshold+1
            break;
          case "8d":
            measureNotes2.push(new StaveNote(element))
            durationThreshold=durationThreshold+0.5
            break;
          case "16d":
            measureNotes2.push(new StaveNote(element))
            durationThreshold=durationThreshold+0.5
            break;
        
          default:
            break;
        }

        

      }
      
    }

    if (measureNotes1.length > 0) {
      Formatter.FormatAndDraw(context, staveFirstMeasure, measureNotes1);
    }
    if (measureNotes2.length > 0) {
    Formatter.FormatAndDraw(context, staveSecondMeasure, measureNotes2);

    }

    if (group.childNodes.length > 4) {

      const pointerNodeIndex = notePointer + 4
      console.log(pointerNodeIndex)

      let pointerNodeNote = group.childNodes[pointerNodeIndex].childNodes[0]
      console.log(pointerNodeNote)
      context.setFillStyle("blue");
      context.setLineWidth(10.0)
      console.log(pointerNodeNote.getBBox())
      let bBox = pointerNodeNote.getBBox()
      context.rect(bBox.x,bBox.y+50,bBox.width,bBox.height,{ 'stroke-width': 20, fill: "blue" })
      context.setFillStyle("black");
      context.setLineWidth(1.0)
        
    }

    

    //possible solution might be svgcontext.ts line 406 to 426



/*const firstMeasureNotes = [
        new StaveNote({ keys: ["c/4"], duration: "q" }),
        new StaveNote({ keys: ["d/4"], duration: "q" }),
        new StaveNote({ keys: ["b/4"], duration: "qr" }),
        new StaveNote({ keys: ["b/4"], duration: "qr" }),

    ];

    const secondMeasureNotes1 = [
      new StaveNote({ keys: ["b/4"], duration: "8d" }),
      new StaveNote({ keys: ["b/4"], duration: "8d" }),
      new StaveNote({ keys: ["c/5"], duration: "8d" }),
      new StaveNote({ keys: ["d/4"], duration: "8d" }),
    ];

    const secondMeasureNotes2 = [
      new StaveNote({ keys: ["c/4"], duration: "q" }),
      new StaveNote({ keys: ["d/4"], duration: "q" }),
    ];
    const beams1 = new Beam(secondMeasureNotes1);
    //console.log(beams1)
    Formatter.FormatAndDraw(context, staveFirstMeasure, secondMeasureNotes1.concat(secondMeasureNotes2));

    beams1.setContext(context).draw();*/

  }

    
    // Add a clef and time signature.
    
     //context.closeGroup();
     //context.SVG.removeChild(group);
    // group.childNodes[5].remove()
    // group.childNodes[10].remove()
    // console.log(group.childNodes)
    


    

    // Helper function to justify and draw a 4/4 voice.
    //Formatter.FormatAndDraw(context, stave, notes);

,[musicNotes]);

  React.useImperativeHandle(ref[1], () => ({
    updateScore(){
      
    const note = JSON.parse(localStorage.getItem("note-List"))
    console.log(note)
    global.context.closeGroup();
     global.context.svg.removeChild(global.group)
     console.log(global.context)
     
     const context_ = global.context
     const group = context_.openGroup();
     global.group = group
     const staveFirstMeasure = new Stave(25, 50, 400);
     staveFirstMeasure.addClef("treble").addTimeSignature("4/4").setContext(context_).draw();
     const staveSecondMeasure = new Stave(staveFirstMeasure.width+staveFirstMeasure.x,50,400);
    staveSecondMeasure.setContext(context_).draw();


    const staveThirdMeasure = new Stave(staveSecondMeasure.width+staveSecondMeasure.x,50,400);
    staveThirdMeasure.setContext(context_).draw();
    const staveFourthMeasure = new Stave(staveThirdMeasure.width+staveThirdMeasure.x,50,400);
    staveFourthMeasure.setContext(context_).draw();
    // Add a clef and time signature.
    
     //context.closeGroup();
     //context.SVG.removeChild(group);
    
    

    // Connect it to the rendering context and draw!
    const measureNotes1 = []
    const measureNotes2 = []
    let holdEightnotes = []
    let durationThreshold = 0
    console.log(note)
    for (let index = 0; index < note.length; index++) {
      const element = note[index];

      if ( durationThreshold < 4) {
        switch (element.duration) {
          case "w":
            measureNotes1.push(new StaveNote(element))
            durationThreshold=durationThreshold+4
            break;
          case "h":
            measureNotes1.push(new StaveNote(element))
            durationThreshold=durationThreshold+2
            break;
          case "q":
            measureNotes1.push(new StaveNote(element))
            durationThreshold=durationThreshold+1
            break;

          case "qr":
            measureNotes1.push(new StaveNote(element))
            durationThreshold=durationThreshold+1
            break;
          case "8d":
            measureNotes1.push(new StaveNote(element))
            durationThreshold=durationThreshold+0.5
            break;
        
          default:
            break;
        }
        
     }
      else{

        switch (element.duration) {

          case "w":
            measureNotes1.push(new StaveNote(element))
            durationThreshold=durationThreshold+4
            break;
          case "h":
            measureNotes2.push(new StaveNote(element))
            durationThreshold=durationThreshold+2
            break;
          case "q":
            measureNotes2.push(new StaveNote(element))
            durationThreshold=durationThreshold+1
            break;

          case "qr":
            measureNotes2.push(new StaveNote(element))
            durationThreshold=durationThreshold+1
            break;
          case "8d":
            measureNotes2.push(new StaveNote(element))
            durationThreshold=durationThreshold+0.5
            break;
        
          default:
            break;
        }

        

      }
      
    }
    if (measureNotes1.length > 0) {
      Formatter.FormatAndDraw(context_, staveFirstMeasure, measureNotes1);
    }
    if (measureNotes2.length > 0) {
    Formatter.FormatAndDraw(context_, staveSecondMeasure, measureNotes2);

    }


    },
  }));

  React.useImperativeHandle(ref[0], () => ({
    deleteScore(){
      
     global.context.closeGroup();
     global.context.svg.removeChild(global.group)
     console.log(global.context)
     const context_ = global.context
     const staveFirstMeasure = new Stave(25, 50, 400);
     staveFirstMeasure.addClef("treble").addTimeSignature("4/4").setContext(context_).draw();
    },
  }));

  

    

    return <div ref={container} />



}

export default Score;