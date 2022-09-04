import React ,{  useEffect,useState} from 'react';
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue,useResetRecoilState } from 'recoil'
import ScoreBox from './ScoreBox';
import { measure1 as measure1Atom,measure2 as measure2Atom,
    measure3 as measure3Atom,measure4 as measure4Atom,measure5 as measure5Atom,measure6 as measure6Atom,
    measure7 as measure7Atom,measure8 as measure8Atom, musicatResponse as musicatResponseAtom,originalityScore as originalityScoreAtom,
    fluencyScore as fluencyScoreAtom,flexabilityScore as flexabilityScoreAtom,
    submissions as submissionsAtom, jwtToken as jwtTokenAtom,
analogies as analogiesAtom, groups as groupsAtom} from '../redux/store'
    
import { Progress } from 'react-sweet-progress';
import { Button } from '@mui/material';




function Result() {

    let nav = useNavigate();

    const flexMax = 550
    const origMax = 100
    const fluencyMax = 500
    const musicatResult = useRecoilValue(musicatResponseAtom);
    const analogies = useRecoilValue(analogiesAtom);
    const groups = useRecoilValue(groupsAtom);
    const [originalityScore, setOriginalityScore] = useRecoilState(originalityScoreAtom);
    const [flexabilityScore, setFlexabilityScore] = useRecoilState(flexabilityScoreAtom);
    const [fluencyScore, setFluencyScore] = useRecoilState(fluencyScoreAtom);
    const [image, setImage] = useState("");
    const [submissions, setSubmissions] = useRecoilState(submissionsAtom);
    const [jwtToken, setJwtToken] = useRecoilState(jwtTokenAtom);
    const [overallScore, setOverallScore] = useState(0);


    const nextComposition = () => {
        setFlexabilityScore(0)
        setFluencyScore(0)
        setOriginalityScore(0)
        nav("/compose")
    }

    const endTask = () => {
        setJwtToken([])
        setSubmissions(0)
        nav("/")
        
    }

    useEffect(() => {

        if (submissions > 5) {
            setJwtToken([])
        }

        setImage("data:image/jpeg;charset=utf-8;base64,"+musicatResult)

        const musicatScore = (analogies + groups)/2
        console.log(musicatScore)
        setOverallScore(Math.floor((musicatScore+(((Math.floor((originalityScore/origMax)*100))+(Math.floor((fluencyScore/fluencyMax)*100))+(Math.floor((flexabilityScore/flexMax)*100)))/3))/2))

    },[musicatResult])
    


    return (

        <div>
            <div style={{float:"left", margin:"50px",backgroundColor:"whitesmoke"}}>
           
                <img
                    width={600}
                    height={600}
                    src= {image}
                />
                
            
            </div>
            <div>
                <div>
            <div style={{border:"solid 4px silver",borderRadius:"20px",backgroundColor:"#debd90" ,width:"400px", height:"300px", marginTop:"200px",alignItems:"center",display:"flex",justifyContent:"center"}}>
                <div style={{float:"left"}}>
                   
            <div style={{float:"left"}}>
                    <div style={{borderRadius:"8px",textAlign: "center",height:"30px",width:"130px","fontWeight": "bold",backgroundColor:"#399ddb" ,marginBottom:"30px"}}>
                    Overall Score
                    </div>
            <Progress  type="circle" percent={overallScore}  />
            </div>
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