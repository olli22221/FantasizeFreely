import { musicNotes as musicNotesAtom, notePointer as notePointerAtom, noteCount as noteCountAtom } from './redux/store'
import DragDrop from './components/fileDrop';
import SubmitFile from './components/fileSubmit';
import { useRecoilState, useRecoilValue,useResetRecoilState } from 'recoil'
import Score from './components/score';
import React from 'react';



function CreativityTask() {

    
const divStyleNotePanel = {
    display:'flex',
    justifyContent: 'center',
    margin: '100px',
    height: "800px",
    flex: 'auto'
    
  };
  
  
    return(
        <div > 
    
     <div style={divStyleNotePanel}>
     <div className='dropMidi'>
      <DragDrop />
      <SubmitFile />
     </div>
     <Score />
      
    
    
          
      </div>

      </div>
    );


}


export default CreativityTask;