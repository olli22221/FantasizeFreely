import React ,{  useEffect,useState} from 'react';
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue,useResetRecoilState } from 'recoil'
import ScoreBox from './ScoreBox';
import { measure1 as measure1Atom,measure2 as measure2Atom,
    measure3 as measure3Atom,measure4 as measure4Atom,measure5 as measure5Atom,measure6 as measure6Atom,
    measure7 as measure7Atom,measure8 as measure8Atom, musicatResponse as musicatResponseAtom,originalityScore as originalityScoreAtom,
    fluencyScore as fluencyScoreAtom,flexabilityScore as flexabilityScoreAtom,
    submissions as submissionsAtom} from '../redux/store'
    
import { Progress } from 'react-sweet-progress';
import { Button } from '@mui/material';




function Result() {

    let nav = useNavigate();

    const flexMax = 800
    const origMax = 100
    const fluencyMax = 950
    const musicatResult = useRecoilValue(musicatResponseAtom);
    const [originalityScore, setOriginalityScore] = useRecoilState(originalityScoreAtom);
    const [flexabilityScore, setFlexabilityScore] = useRecoilState(flexabilityScoreAtom);
    const [fluencyScore, setFluencyScore] = useRecoilState(fluencyScoreAtom);
    const [image, setImage] = useState("");
    const [submissions, setSubmissions] = useRecoilState(submissionsAtom);
  


    const nextComposition = () => {
        setFlexabilityScore(0)
        setFluencyScore(0)
        setOriginalityScore(0)
        nav("/compose")
    }

    const endTask = () => {

        nav("/")
        
    }

    useEffect(() => {

        console.log(musicatResult)
        setImage("data:image/jpeg;charset=utf-8;base64,"+musicatResult)
   

    },[musicatResult])
    


    return (

        <div>
            <div style={{float:"left", margin:"50px",backgroundColor:"whitesmoke"}}>
           
                <img
                    width={700}
                    height={600}
                    src= {image}
                />
                
            
            </div>
            <div>
                <div>
            <div style={{border:"solid 4px silver",borderRadius:"20px",backgroundColor:"#debd90" ,width:"700px", height:"300px", marginTop:"200px",alignItems:"center",display:"flex",justifyContent:"center"}}>
                <div style={{float:"left"}}>
                    <div style={{borderRadius:"8px",textAlign: "center",height:"30px",width:"130px","fontWeight": "bold",backgroundColor:"#399ddb" ,marginBottom:"30px"}}>
                    Flexability Score
                    </div>
            <Progress  type="circle" percent={Math.floor((flexabilityScore/flexMax)*100)}  />

            </div>
            <div style={{float:"left", marginLeft:"60px"}}>
                    <div style={{borderRadius:"8px",textAlign: "center",height:"30px",width:"130px","fontWeight": "bold",backgroundColor:"#399ddb" ,marginBottom:"30px"}}>
                    Fluency Score
                    </div>
            <Progress  type="circle" percent={Math.floor((fluencyScore/fluencyMax)*100)}  />

            </div>
            <div style={{float:"left",marginLeft:"60px"}}>
                    <div style={{borderRadius:"8px",textAlign: "center",height:"30px",width:"130px","fontWeight": "bold",backgroundColor:"#399ddb" ,marginBottom:"30px"}}>
                    Originality Score
                    </div>
            <Progress  type="circle" percent={Math.floor((originalityScore/origMax)*100)}  />

            </div>
            </div>
            </div>
            {submissions < 5 && <Button onClick={nextComposition} style={{"fontWeight": "bold","borderRadius":"5px","color":"white","height":"50px","backgroundColor":"#403c3b","border":"#403c3b 2px solid"}}>Another Composition</Button>}
            {submissions > 3 && <Button onClick={endTask} style={{"fontWeight": "bold","borderRadius":"5px","color":"white","height":"50px","backgroundColor":"#403c3b","border":"#403c3b 2px solid"}}>End Task</Button>}


            </div>

        </div>


    );


    }



export default Result;