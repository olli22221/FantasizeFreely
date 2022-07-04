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
      renderer.resize(800, 400)
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
    const staveFirstMeasure = new Stave(25, 50, 200);
    staveFirstMeasure.addClef("treble").addTimeSignature("4/4").setContext(context).draw();
    
    const staveSecondMeasure = new Stave(staveFirstMeasure.width+staveFirstMeasure.x,50,200);
    staveSecondMeasure.setContext(context).draw();


    const staveThirdMeasure = new Stave(staveSecondMeasure.width+staveSecondMeasure.x,50,200);
    staveThirdMeasure.setContext(context).draw();
    const staveFourthMeasure = new Stave(staveThirdMeasure.width+staveThirdMeasure.x,50,200);
    staveFourthMeasure.setContext(context).draw();

    const staveFifthMeasure = new Stave(25,150,200);
    staveFifthMeasure.setContext(context).draw();

    const staveSixthMeasure = new Stave(staveFifthMeasure.width+staveFifthMeasure.x,150,200);
    staveSixthMeasure.setContext(context).draw();
    const staveSeventhMeasure = new Stave(staveSixthMeasure.width+staveSixthMeasure.x,150,200);
    staveSeventhMeasure.setContext(context).draw();

    const staveEighthMeasure = new Stave(staveSeventhMeasure.width+staveSeventhMeasure.x,150,200);
    staveEighthMeasure.setContext(context).draw();
    // Add a clef and time signature.
    
     //context.closeGroup();
     //context.SVG.removeChild(group);
    
    

    // Connect it to the rendering context and draw!
    const measureNotes1 = []
    const measureNotes2 = []
    const measureNotes3 = []
    const measureNotes4 = []
    const measureNotes5 = []
    const measureNotes6 = []
    const measureNotes7 = []
    const measureNotes8 = []
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
      else if (durationThreshold < 8) 
      {

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
      else if (durationThreshold < 12) 
      {

        switch (element.duration) {
          case "w":
            measureNotes3.push(new StaveNote(element))
            durationThreshold=durationThreshold+4
            break;
          case "h":
            measureNotes3.push(new StaveNote(element))
            durationThreshold=durationThreshold+2
            break;
          case "q":
            measureNotes3.push(new StaveNote(element))
            durationThreshold=durationThreshold+1
            break;

          case "qr":
            measureNotes3.push(new StaveNote(element))
            durationThreshold=durationThreshold+1
            break;
          case "8d":
            measureNotes3.push(new StaveNote(element))
            durationThreshold=durationThreshold+0.5
            break;
          case "16d":
            measureNotes3.push(new StaveNote(element))
            durationThreshold=durationThreshold+0.5
            break;
        
          default:
            break;
        }

        

      }

      else if (durationThreshold < 16) 
      {

        switch (element.duration) {
          case "w":
            measureNotes4.push(new StaveNote(element))
            durationThreshold=durationThreshold+4
            break;
          case "h":
            measureNotes4.push(new StaveNote(element))
            durationThreshold=durationThreshold+2
            break;
          case "q":
            measureNotes4.push(new StaveNote(element))
            durationThreshold=durationThreshold+1
            break;

          case "qr":
            measureNotes4.push(new StaveNote(element))
            durationThreshold=durationThreshold+1
            break;
          case "8d":
            measureNotes4.push(new StaveNote(element))
            durationThreshold=durationThreshold+0.5
            break;
          case "16d":
            measureNotes4.push(new StaveNote(element))
            durationThreshold=durationThreshold+0.5
            break;
        
          default:
            break;
        }

        

      }

      else if (durationThreshold < 20) 
      {

        switch (element.duration) {
          case "w":
            measureNotes5.push(new StaveNote(element))
            durationThreshold=durationThreshold+4
            break;
          case "h":
            measureNotes5.push(new StaveNote(element))
            durationThreshold=durationThreshold+2
            break;
          case "q":
            measureNotes5.push(new StaveNote(element))
            durationThreshold=durationThreshold+1
            break;

          case "qr":
            measureNotes5.push(new StaveNote(element))
            durationThreshold=durationThreshold+1
            break;
          case "8d":
            measureNotes5.push(new StaveNote(element))
            durationThreshold=durationThreshold+0.5
            break;
          case "16d":
            measureNotes5.push(new StaveNote(element))
            durationThreshold=durationThreshold+0.5
            break;
        
          default:
            break;
        }

        

      }

      else if (durationThreshold < 24) 
      {

        switch (element.duration) {
          case "w":
            measureNotes6.push(new StaveNote(element))
            durationThreshold=durationThreshold+4
            break;
          case "h":
            measureNotes6.push(new StaveNote(element))
            durationThreshold=durationThreshold+2
            break;
          case "q":
            measureNotes6.push(new StaveNote(element))
            durationThreshold=durationThreshold+1
            break;

          case "qr":
            measureNotes6.push(new StaveNote(element))
            durationThreshold=durationThreshold+1
            break;
          case "8d":
            measureNotes6.push(new StaveNote(element))
            durationThreshold=durationThreshold+0.5
            break;
          case "16d":
            measureNotes6.push(new StaveNote(element))
            durationThreshold=durationThreshold+0.5
            break;
        
          default:
            break;
        }

        

      }

      else if (durationThreshold < 28) 
      {

        switch (element.duration) {
          case "w":
            measureNotes7.push(new StaveNote(element))
            durationThreshold=durationThreshold+4
            break;
          case "h":
            measureNotes7.push(new StaveNote(element))
            durationThreshold=durationThreshold+2
            break;
          case "q":
            measureNotes7.push(new StaveNote(element))
            durationThreshold=durationThreshold+1
            break;

          case "qr":
            measureNotes7.push(new StaveNote(element))
            durationThreshold=durationThreshold+1
            break;
          case "8d":
            measureNotes7.push(new StaveNote(element))
            durationThreshold=durationThreshold+0.5
            break;
          case "16d":
            measureNotes7.push(new StaveNote(element))
            durationThreshold=durationThreshold+0.5
            break;
        
          default:
            break;
        }

        

      }

      else if (durationThreshold < 32) 
      {

        switch (element.duration) {
          case "w":
            measureNotes8.push(new StaveNote(element))
            durationThreshold=durationThreshold+4
            break;
          case "h":
            measureNotes8.push(new StaveNote(element))
            durationThreshold=durationThreshold+2
            break;
          case "q":
            measureNotes8.push(new StaveNote(element))
            durationThreshold=durationThreshold+1
            break;

          case "qr":
            measureNotes8.push(new StaveNote(element))
            durationThreshold=durationThreshold+1
            break;
          case "8d":
            measureNotes8.push(new StaveNote(element))
            durationThreshold=durationThreshold+0.5
            break;
          case "16d":
            measureNotes8.push(new StaveNote(element))
            durationThreshold=durationThreshold+0.5
            break;
        
          default:
            break;
        }

        

      }
      
    }

    console.log(measureNotes4)
    console.log(measureNotes5)
    if (measureNotes1.length > 0) {
      Formatter.FormatAndDraw(context, staveFirstMeasure, measureNotes1);
    }
    if (measureNotes2.length > 0) {
    Formatter.FormatAndDraw(context, staveSecondMeasure, measureNotes2);

    }

    if (measureNotes3.length > 0) {
      Formatter.FormatAndDraw(context, staveThirdMeasure, measureNotes3);
  
      }

    if (measureNotes4.length > 0) {
      Formatter.FormatAndDraw(context, staveFourthMeasure, measureNotes4);
    
      }

    if (measureNotes5.length > 0) {
        Formatter.FormatAndDraw(context, staveFifthMeasure, measureNotes5);
      
        }
    if (measureNotes6.length > 0) {
        Formatter.FormatAndDraw(context, staveSixthMeasure, measureNotes6);
        
        }
    if (measureNotes7.length > 0) {
          Formatter.FormatAndDraw(context, staveSeventhMeasure, measureNotes7);
          
        }
    if (measureNotes8.length > 0) {
         Formatter.FormatAndDraw(context, staveEighthMeasure, measureNotes8);
            
         }

    if (group.childNodes.length > 4) {

      const pointerNodeIndex = notePointer + 8
      console.log(pointerNodeIndex)

      let pointerNodeNote = group.childNodes[pointerNodeIndex].childNodes[0]
      /*console.log(pointerNodeNote)
      context.setFillStyle("blue");
      context.setLineWidth(10.0)
      console.log(pointerNodeNote.getBBox())
      let bBox = pointerNodeNote.getBBox()
      if (bBox.y < 150 ) {
        context.rect(bBox.x,145.915756,12,42,{ 'stroke-width': 20, fill: "blue" })
      }

      if (bBox.y >= 150 ) {
        context.rect(bBox.x,245.915756,12,42,{ 'stroke-width': 20, fill: "blue" })
      }
      context.setFillStyle("black");
      context.setLineWidth(1.0) */

      /* 
        drawing an arc

        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.arc(...);
        ctx.lineWidth = lineWidth;
        ctx.stroke();
      */

        
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

,[musicNotes, notePointer]);

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

  

    

    return <div ref={container}  className='score'/>



}

export default Score;