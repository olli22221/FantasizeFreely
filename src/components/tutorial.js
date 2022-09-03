import { useRecoilState, useRecoilValue,useResetRecoilState } from 'recoil'
import React from 'react';
import { useNavigate } from "react-router-dom";




function Tutorial() {

    


  let nav = useNavigate();
    const navToComposePanel = () => {

       

        nav("/Compose")

        

    }
  
  
    return(

      <div>
        <div className="row">
        <div className="taskdscr" >
        </div>
        <div className="taskdscr">
          <button onClick={navToComposePanel}>Compose</button>
        </div>
        </div>



      </div>

      /*
        <div > 
    
     <div style={divStyleNotePanel}>
     <div className='dropMidi'>
      <DragDrop />
      <SubmitFile />
     </div>
     <Score />
      
    
    
          
      </div>

      </div>

      */
    );


}


export default Tutorial;