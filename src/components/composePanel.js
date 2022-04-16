
import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil'
import { musicNotes as musicNotesAtom, notePointer as notePointerAtom, 
    durationOption as durationOptionAtom, noteCount as noteCountAtom } from '../redux/store'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Pitch from './pitch';


const Composer = () =>{
    const [musicNotes, setMusicNotes] = useRecoilState(musicNotesAtom);
    const [notePointer, setNotePointer] = useRecoilState(notePointerAtom);
    const [noteCount, setNoteCounter] = useRecoilState(noteCountAtom);
    const [durationOption, setDurationOption] = useRecoilState(durationOptionAtom);

    const resetNotesState = useResetRecoilState(musicNotesAtom)
    const resetPointerState = useResetRecoilState(notePointerAtom)
    const resetNoteCountState = useResetRecoilState(noteCountAtom)

    const pitchOptions = [
        'c/4', 'd/4', 'e/4', 'f/4', 'g/4', 'a/4', 'b/4'
      ];
    const pitchOption = 0
    const durationOptions = [
        'w', 'h', 'q', 'qr', '8d', '16', '32'
      ];
    
    const defaultpitchOption = pitchOptions[0];
    const defaultdurationOption = durationOptions[2];

    const selectedOption = useState(null);

    const resetNotes = () =>{
        console.log("Flushing Recoil States")
       return( 
        
            resetNoteCountState(),
            resetNotesState(),
            resetPointerState()

       )
    }


    useEffect(() => {

        if (durationOption > 6) {
            let tempDurationOption = 0
            setDurationOption(tempDurationOption)
        }
        

    },[durationOption])

    
    const addNote = () => {
        let note = { keys: ["c/4"], duration: "q" }
        let tmpNotes = [...musicNotes, note]
        let tmpNotePointer = notePointer + 1
        let tmpNoteCount = noteCount + 1
        setMusicNotes(tmpNotes)
        setNoteCounter(tmpNoteCount)
        setNotePointer(tmpNotePointer)
        console.log(notePointer)
        console.log(musicNotes)
        console.log(noteCount)

    }

    const switchPitchRight = () => {
        
        let tempDurationOption = durationOption + 1
        setDurationOption(tempDurationOption)
        console.log(durationOption)
    }

    const switchPitchLeft = () => {
        
        let tempDurationOption = durationOption - 1
        setDurationOption(tempDurationOption)
        console.log(durationOption)
    }

    const deleteNote = () => {
        console.log(musicNotes)
        let tmpNoteCount = noteCount
        if (tmpNoteCount > 0) {
            let tmpNotes = [...musicNotes]
            let tmpNotePointer = notePointer
            tmpNotes.splice(tmpNotePointer,1)
            setMusicNotes(tmpNotes)
            tmpNoteCount--
            setNoteCounter(tmpNoteCount)
            tmpNotePointer--
            setNotePointer(tmpNotePointer)
            
        }
        
        
       
        console.log(notePointer)
        console.log(musicNotes)
        console.log(noteCount)

    }
    
    const divStyle = {
        display: 'inline-block',
        width: '150px',
        height: '150px',

      };




    return(
        <div>
            <div>
            
                            
        </div>
        <div>
        <div style={divStyle} onClick={switchPitchLeft}>
        <img height="150px" width="150px" src={require("../media/lArrow.png")} />
        </div>
        <div style={divStyle} onClick={addNote}>
            <Pitch type={durationOptions[durationOption]}/> 
            </div>

        <div style={divStyle} onClick={switchPitchRight}>
        <img height="150px" width="150px" src={require("../media/rArrow.png")} />
          </div>
            <button onClick={deleteNote}> DeleteNote </button>
            <button onClick={resetNotes}> ClearScore </button>
        </div>
        
      


        

        </div>


    );
}



export default Composer;