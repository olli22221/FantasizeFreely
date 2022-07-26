import React ,{  useEffect,useState} from 'react';
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue,useResetRecoilState } from 'recoil'
import ScoreBox from './ScoreBox';
import { measure1 as measure1Atom,measure2 as measure2Atom,
    measure3 as measure3Atom,measure4 as measure4Atom,measure5 as measure5Atom,measure6 as measure6Atom,
    measure7 as measure7Atom,measure8 as measure8Atom, musicatResponse as musicatResponseAtom} from '../redux/store'



function Result() {


    const measure1 = useRecoilValue(measure1Atom);
    const measure2 = useRecoilValue(measure2Atom);
    const measure3 = useRecoilValue(measure3Atom);
    const measure4 = useRecoilValue(measure4Atom);
    const measure5 = useRecoilValue(measure5Atom);
    const measure6 = useRecoilValue(measure6Atom);
    const measure7 = useRecoilValue(measure7Atom);
    const measure8 = useRecoilValue(measure8Atom);
    const musicatResult = useRecoilValue(musicatResponseAtom);
    const [measure1Color,setMeasure1Color]= useState('rgb(235, 213, 186)')
    const [measure2Color,setMeasure2Color]= useState('rgb(235, 213, 186)')
    const [measure3Color,setMeasure3Color]= useState('rgb(235, 213, 186)')
    const [measure4Color,setMeasure4Color]= useState('rgb(235, 213, 186)')
    const [measure5Color,setMeasure5Color]= useState('rgb(235, 213, 186)')
    const [measure6Color,setMeasure6Color]= useState('rgb(235, 213, 186)')
    const [measure7Color,setMeasure7Color]= useState('rgb(235, 213, 186)')
    const [measure8Color,setMeasure8Color]= useState('rgb(235, 213, 186)')
    const [groupColors,setgroupColors] = useState(['red','blue','yellow','green',
    'violet','orange','silver, snow'])

    


    return (

        <div>
            <div className="row">
            <div className="flex-container"style={{border:'2px solid' + measure1Color}}  >
                <ScoreBox notes={measure1.slice(1,17)} timeSign="4/4" violin={false}/>
                </div>
                <div  className="flex-container"  style={{border:'2px solid' + measure2Color}} >
                <ScoreBox notes={measure2.slice(1,17)} timeSign="4/4" violin={false}/>
                </div>
                <div  className="flex-container" >
                <ScoreBox notes={measure3.slice(1,17)} timeSign="4/4" violin={false}/>
                </div>
                <div  className="flex-container" >
                <ScoreBox notes={measure4.slice(1,17)} timeSign="4/4" violin={false}/>
                </div>
                </div>
                <div className="row">
            <div   >
                <ScoreBox notes={measure5.slice(1,17)} timeSign="4/4" violin={false}/>
                </div>
                <div  className="flex-container" >
                <ScoreBox notes={measure6.slice(1,17)} timeSign="4/4" violin={false}/>
                </div>
                <div  className="flex-container" >
                <ScoreBox notes={measure7.slice(1,17)} timeSign="4/4" violin={false}/>
                </div>
                <div  className="flex-container" >
                <ScoreBox notes={measure8.slice(1,17)} timeSign="4/4" violin={false}/>
                </div>
                </div>
                
            


        </div>


    );


}



export default Result;