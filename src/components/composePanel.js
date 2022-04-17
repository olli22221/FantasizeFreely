
import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil'
import { musicNotes as musicNotesAtom, notePointer as notePointerAtom, 
    durationOption as durationOptionAtom, noteCount as noteCountAtom,
  pitchOption as pitchOptionAtom, composePanelState as panelStateAtom } from '../redux/store'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Pitch from './pitch';
import Duration from './duration';


const Composer = () =>{
    const [musicNotes, setMusicNotes] = useRecoilState(musicNotesAtom);
    const [notePointer, setNotePointer] = useRecoilState(notePointerAtom);
    const [noteCount, setNoteCounter] = useRecoilState(noteCountAtom);
    const [durationOption, setDurationOption] = useRecoilState(durationOptionAtom);
    const [pitchOption, setPitchOption] = useRecoilState(pitchOptionAtom);
    const [composePanelState, setComposePanelState] = useRecoilState(panelStateAtom);

    const resetNotesState = useResetRecoilState(musicNotesAtom)
    const resetPointerState = useResetRecoilState(notePointerAtom)
    const resetNoteCountState = useResetRecoilState(noteCountAtom)

    const pitchOptions = [
        'c/4', 'd/4', 'e/4', 'f/4', 'g/4', 'a/4', 'b/4', 'c/5', 'd/5',
         'e/5', 'f/5', 'g/5', 'a/5', 'b/5'
      ];

    const durationOptions = [
        'w', 'h', 'q', 'qr', '8d', '16d'
      ];
    
    
    const selectedOption = useState(null);

    const resetNotes = () =>{
        console.log("Flushing Recoil States")
        let composePanelStateTmp = 0
        setComposePanelState(composePanelStateTmp)
       return( 
        
            resetNoteCountState(),
            resetNotesState(),
            resetPointerState()

       )
    }


    useEffect(() => {

        if (durationOption > 5 || durationOption < 0) {
            let tempDurationOption = 0
            setDurationOption(tempDurationOption)
        }

        
       

    },[durationOption])

    const switchPanel = () => {

        let composePanelStateTmp = 1
        setComposePanelState(composePanelStateTmp)
        console.log(composePanelState)


    }

    const goBack = () => {

      let composePanelStateTmp = 0
      setComposePanelState(composePanelStateTmp)
      console.log(composePanelState)


  }

    
    const addNote = () => {
        let note = { keys: [pitchOptions[pitchOption]], duration: durationOptions[durationOption] }
        let tmpNotes = [...musicNotes, note]
        let tmpNotePointer = notePointer + 1
        let tmpNoteCount = noteCount + 1
        setMusicNotes(tmpNotes)
        setNoteCounter(tmpNoteCount)
        setNotePointer(tmpNotePointer)
        console.log(notePointer)
        console.log(musicNotes)
        console.log(noteCount)
        let composePanelStateTmp = 0
        setComposePanelState(composePanelStateTmp)
    }

    const switchPitchRight = () => {

      if (composePanelState == 0) {
        let tempPitchOption = pitchOption + 1
        setPitchOption(tempPitchOption)
        console.log(pitchOption)
      }
        
     else if(composePanelState == 1){
        let tempDurationOption = durationOption + 1
        setDurationOption(tempDurationOption)
        console.log(durationOption)
    }
  }

    const switchPitchLeft = () => {
        
      if(composePanelState == 0) {
        let tempPitchOption = pitchOption - 1
        setPitchOption(tempPitchOption)
        console.log(pitchOption)
      }
        
     else if(composePanelState == 1){
        let tempDurationOption = durationOption - 1
        setDurationOption(tempDurationOption)
        console.log(durationOption)
    }
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
            let composePanelStateTmp = 0
        setComposePanelState(composePanelStateTmp)
            
        }
        
        
       
        console.log(notePointer)
        console.log(musicNotes)
        console.log(noteCount)

    }
    
    const divStyle = {
        display: 'inline-block',
        width: '80px',
        height: '80px',

      };
      const divStyleNOte = {
        display: 'inline-block',
        width: '100px',
        height: '100px',

      };
      const divStyleNotePanel = {
        display:'flex',
        justifyContent: 'center',
        marginTop: '150px'
        
      };

      const divStyleButtonPanel = {
        display:'flex',
        justifyContent: 'center',
        marginTop: '50px'
        
      };

      let RenderPanel;
      if(composePanelState == 0){
        RenderPanel = <div style={divStyleNOte} onAuxClick onClick={switchPanel}>
        <Pitch type={pitchOptions[pitchOption]}/> 
    </div>
      }else if(composePanelState == 1){
        RenderPanel = <div style={divStyleNOte} onClick={addNote}>
        <Duration type={durationOptions[durationOption]}/> 
    </div>
      }


    return(
        <div>
            <div style={divStyleButtonPanel}>
        <button onClick={goBack}> Back to choose another Pitch </button>
        </div>
        <div style={divStyleButtonPanel}>
        <div style={divStyle} onClick={switchPitchLeft}>
        <img height="80px" width="80px" src={require("../media/lArrow.png")} />
        </div>
        {RenderPanel}
        <div style={divStyle} onClick={switchPitchRight}>
        <img height="80px" width="80px" src={require("../media/rArrow.png")} />
        </div>
        </div>
        
          <div style={divStyleButtonPanel}>
            <button onClick={deleteNote}> DeleteNote </button>
            <button onClick={resetNotes}> ClearScore </button>
        </div>
        

                
      


        

        </div>


    );
}



export default Composer;