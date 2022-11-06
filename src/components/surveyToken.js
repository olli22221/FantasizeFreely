import React,{useEffect,useState} from "react";
import { useRecoilState} from 'recoil'

import { allowed as allowedAtom } from "../redux/store";
import Popup from 'reactjs-popup';
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

function SurveyToken() {

    let nav = useNavigate();
    const [open, setOpen] = useState(true);  
    const closeModal = () => setOpen(false);

    const [allowed, setAllowed] = useRecoilState(allowedAtom);

    useEffect(() => {

        if (!allowed) {
         nav("/")
        }


        if (!open) {
            setAllowed(false)
        }
        console.log(open)
 
     },[allowed,open]) 

    return(

        <div>
            
            <Popup open={open} closeOnDocumentClick onClose={closeModal}>   
                 <div className="modal">     <p>The following code gives you credits that can be used to get free research participants at SurveySwap.io. 
 
 Go to: <a href="https://surveyswap.io/sr/91SE-6JH7-YDIX">https://surveyswap.io/sr/91SE-6JH7-YDIX </a>
  
 Or, alternatively, enter the code manually: 91SE-6JH7-YDIX</p>     <a className="close" onClick={closeModal}>  
                      &times;          </a>          
                        </div>  
            </Popup>
             </div>
    )

}


export default SurveyToken;
