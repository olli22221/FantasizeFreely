import logo from './logo.svg';
import './App.css';
import Score from './components/score';
import ScoreClass from './components/scoreClass';
import React, { useRef, useEffect, useState, Component } from 'react'


function App() {
  

  
  const childRef = useRef();
  const childRef2 = useRef();
  const [notes, setNotes] = useState([])
  
  
  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem("note-List"))
    if (notes) {
      setNotes(notes)
      console.log(notes)
    }
    
  }, [])

  useEffect(() => {

    localStorage.setItem("note-List",JSON.stringify(notes))
  },[notes])

  const goLeft = () => {
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
        console.log(notes)*/
        notes.splice(currentNotePointer,1)
        localStorage.setItem("note-List",JSON.stringify(notes))
        
        

        childRef2.current.updateScore()
        amountOfNotes--
        if (currentNotePointer > 0) {
          currentNotePointer--
        }
        
      }


      
  }

  

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
  let amountOfNotes = notes.length
  let currentNotePointer = amountOfNotes - 1

  
  return (
   <div> 
    <Score  ref={[childRef,childRef2]} note={notes}/>
     <div>
       <button onClick={deleteNote}> Delete </button>
       <button onClick={addNote}> AddNote </button>
     </div>
        <div>
        <button onClick={goLeft}>
          left
        </button>
          <button onClick={goRight}>right</button>
      
      </div>
    </div>

   
  );

  

  
}

export default App;
