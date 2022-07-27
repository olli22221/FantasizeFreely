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
    const [measure1Color,setMeasure1Color]= useState(' rgb(235, 213, 186)')
    const [measure2Color,setMeasure2Color]= useState(' rgb(235, 213, 186)')
    const [measure3Color,setMeasure3Color]= useState(' rgb(235, 213, 186)')
    const [measure4Color,setMeasure4Color]= useState(' rgb(235, 213, 186)')
    const [measure5Color,setMeasure5Color]= useState(' rgb(235, 213, 186)')
    const [measure6Color,setMeasure6Color]= useState(' rgb(235, 213, 186)')
    const [measure7Color,setMeasure7Color]= useState(' rgb(235, 213, 186)')
    const [measure8Color,setMeasure8Color]= useState(' rgb(235, 213, 186)')
    const groupColors = [' red',' blue',' yellow',' green',
    ' violet',' orange',' silver', 'snow']




    useEffect(() => { 
        console.log(musicatResult)
        const groups = musicatResult['groups']
        let groupCount = 0
        
        for (let index = 0; index < groups.length; index++) {
           const element = groups[index];
           const element_ = element.split("+")
           const firstMeasure = element_[0]
           const secondMeasure = element_[1]
           switch (firstMeasure) {
            case "0":
                console.log(groupColors[index])
                setMeasure1Color(groupColors[index])
                break;
            case "1":
                setMeasure2Color(groupColors[index])
                break;
            case "2":
                setMeasure3Color(groupColors[index])
                break;
            case "3":
                setMeasure4Color(groupColors[index])
                break;
            case "4":
                setMeasure5Color(groupColors[index])
                break;
            case "5":
                setMeasure6Color(groupColors[index])
                break;
            case "6":
                setMeasure7Color(groupColors[index])
                break;
            case "7":
                setMeasure8Color(groupColors[index])
                break;
           
            default:
                break;
           }

           switch (secondMeasure) {
            case "0":
                setMeasure1Color(groupColors[index])
                break;
            case "1":
                setMeasure2Color(groupColors[index])
                break;
            case "2":
                setMeasure3Color(groupColors[index])
                break;
            case "3":
                setMeasure4Color(groupColors[index])
                break;
            case "4":
                setMeasure5Color(groupColors[index])
                break;
            case "5":
                setMeasure6Color(groupColors[index])
                break;
            case "6":
                setMeasure7Color(groupColors[index])
                break;
            case "7":
                setMeasure8Color(groupColors[index])
                break;
           
            default:
                break;
           }
           
           console.log(measure1Color)
           

           
           

           
        }
   
},[musicatResult])

    


    return (

        <div>
            <div className="row">
            <div className="flex-container"style={{border:'2px solid' + measure1Color}}  >
                <ScoreBox notes={measure1.slice(1,17)} timeSign="4/4" violin={false}/>
                </div>
                <div  className="flex-container"  style={{border:'2px solid' + measure2Color}} >
                <ScoreBox notes={measure2.slice(1,17)} timeSign="4/4" violin={false}/>
                </div>
                <div  className="flex-container" style={{border:'2px solid' + measure3Color}}>
                <ScoreBox notes={measure3.slice(1,17)} timeSign="4/4" violin={false}/>
                </div>
                <div  className="flex-container" style={{border:'2px solid' + measure4Color}}>
                <ScoreBox notes={measure4.slice(1,17)} timeSign="4/4" violin={false}/>
                </div>
                </div>
                <div className="row">
            <div  className="flex-container" style={{border:'2px solid' + measure5Color}}>
                <ScoreBox notes={measure5.slice(1,17)} timeSign="4/4" violin={false}/>
                </div>
                <div  className="flex-container" style={{border:'2px solid' + measure6Color}}>
                <ScoreBox notes={measure6.slice(1,17)} timeSign="4/4" violin={false}/>
                </div>
                <div  className="flex-container" style={{border:'2px solid' + measure7Color}}>
                <ScoreBox notes={measure7.slice(1,17)} timeSign="4/4" violin={false}/>
                </div>
                <div  className="flex-container" style={{border:'2px solid' + measure8Color}}>
                <ScoreBox notes={measure8.slice(1,17)} timeSign="4/4" violin={false}/>
                </div>
                </div>
                
            


        </div>


    );


}



export default Result;