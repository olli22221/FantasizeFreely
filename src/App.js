import logo from './logo.svg';
import './App.css';
import Score from './components/score';
import React, { useRef, useEffect, useState, Component } from 'react'
import Composer from './components/composePanel';
import { useBeforeunload } from 'react-beforeunload';
import { useRecoilState, useRecoilValue,useResetRecoilState } from 'recoil'

import { musicNotes as musicNotesAtom, notePointer as notePointerAtom, noteCount as noteCountAtom } from './redux/store'


function App() {
 
  const [musicNotes, setMusicNotes] = useRecoilState(musicNotesAtom);
  const [notePointer, setNotePointer] = useRecoilState(notePointerAtom);
  const [noteCount, setNoteCounter] = useRecoilState(noteCountAtom);


  
  
  

  /*const goLeft = () => {
    if (currentNotePointer >= 1) {
      currentNotePointer--
      console.log(currentNotePointer)
    }
   
    //childRef.current.deleteScore()
  }

  const goRight = () => {
    if (currentNotePointer <= amountOfNotes - 2) {
      currentNotePointer++
      console.log(currentNotePointer)
    }
    //childRef.current.deleteScore()
  }


  const addNote = () => {
    let note = { keys: ["c/4"], duration: "q" }
    
    const notes = JSON.parse(localStorage.getItem("note-List"))
    notes.push(note)
    localStorage.setItem("note-List",JSON.stringify(notes))
    
    childRef2.current.updateScore()
    currentNotePointer++
    amountOfNotes++
    
    
    
}

  const deleteNote = () => {
      if (amountOfNotes > 0) {
        let notes = JSON.parse(localStorage.getItem("note-List"))
        
        /*console.log(notes)
        
        notes = notes.splice(currentNotePointer,1)
        console.log(notes)
        notes.splice(currentNotePointer,1)
        localStorage.setItem("note-List",JSON.stringify(notes))
        
        

        childRef2.current.updateScore()
        amountOfNotes--
        if (currentNotePointer > 0) {
          currentNotePointer--
        }
        
      }


      
  }
*/
  

  /*let notes = [{ keys: ["c/4"], duration: "q" },
          { keys: ["d/4"], duration: "q" },
          { keys: ["b/4"], duration: "qr" },
          { keys: ["b/4"], duration: "qr" },
          { keys: ["g/4"], duration: "8d" },
          { keys: ["a/4"], duration: "8d" },
          { keys: ["b/4"], duration: "8d" },
          { keys: ["c/5"], duration: "8d" },

          { keys: ["c/4"], duration: "q" },
          { keys: ["d/4"], duration: "q" },
        ]
*/
const divStyleNotePanel = {
  display:'flex',
  justifyContent: 'center',
  
};
   
  return (
   <div> 
     
     <div style={divStyleNotePanel}>
    <Score />
          
      </div>

      <div>
    <Composer />
          
      </div>
      


    </div>

   
  );

  

  
  }
export default App;
