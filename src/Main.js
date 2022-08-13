import React from "react";
import './css/Main.css';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useRecoilState, useRecoilValue } from 'recoil'
import { jwtToken as jwtTokenAtom } from "./redux/store";
import useSound from 'use-sound';
import entry from './media/Frontpage/sounds/Entry.mp3'
import  { useState,useCallback,useEffect } from 'react';
import Typewriter from 'typewriter-effect';


const Button = styled.button`
    background-color: blue;
    font-size: 30px;
    padding: 100px 60px;
    color: white;
    background-color:rgb(190, 165, 132);
`


function Main() {
    const [jwtToken, setjwtToken] = useRecoilState(jwtTokenAtom);
  
    const player = new Audio(entry)
    
    const [composer,setComposer] = useState("Mozart")
    const [composerImage,setComposerImage] = useState(require("./media/Frontpage/Composer/mozart.jpg"))




    let nav = useNavigate();
    const handleStart = () => {

        /*axios.get("http://192.168.178.46:5000/start").then((response) => {
            console.log(response.data)
            setjwtToken(response.data)
            nav("/CreativityTask")

        }).catch((error) => {
            console.log(error)
        });*/

       
        nav("/CreativityTask")
        
        

    }

   
    useEffect(() => {
        
        
        
        player.play()
        
    }, [])

    useEffect(() => {
        
        if (composer == "Mozart") {
            const intervalId1 = setInterval(() => {
                player.volume=0.2
                setComposer("Haydn")
                setComposerImage(require("./media/Frontpage/Composer/haydn.jpg"))
              }, 17000);
              return () => clearInterval(intervalId1);
        }
        else if (composer == "Haydn") {
            const intervalId2 = setInterval(() => {
                player.volume=0.2
                setComposer("Beethoven")
                setComposerImage(require("./media/Frontpage/Composer/beethoven.jpg"))
              }, 13000);
              return () => clearInterval(intervalId2);
        }
        else if (composer == "Beethoven") {
            const intervalId3 = setInterval(() => {
                player.volume=0.7
                setComposer("Bach")
                setComposerImage(require("./media/Frontpage/Composer/bach.jpg"))
            }, 24000);
            return () => clearInterval(intervalId3);
        }
        
        
       
    }, [composer])


    return (

    <div  className="backgroundImage">
        <div style={{"height":1080,"width":1920}}>

        <div className="row">

            <div style={{marginTop:"300px"}}>
            <img 
            
            className="imgComposer"
            height="400px" 
            width="500px" 
            borderRadius="40%"
            src= {composerImage} 
           
            
            
        />
            </div>
        <div style={{height:"900px"}}>
        
            
        
            <div style={{textAlign:"center",fontFamily:"Cursive",borderRadius:"30px",fontSize: "25px",height:"350px",width:"550px",marginLeft:"100px",marginTop:"240px", backgroundColor:"#403c3b","color":"white"}}>
        <Typewriter
        onInit={(typewriter) => {
            typewriter.typeString("Welcome fellow MusicianOn this website you will learn to write a melody. An Artificial Intelligence will help you to compose your first melodies. Also watch out for the progress bar which assessess your performance").start();
        } }  
        />
            </div >
            
            <Button style={{height:"150px",padding:"0px",backgroundColor:"#403c3b",marginTop:"70px",marginLeft:"250px","borderRadius":"5px","font-weight": "bold","height":"50px","width":"255px","border":"gold 2px solid"}} onClick={handleStart}>Skip the Intro</Button>
        </div>
    </div>

        </div>
    

</div>

    )
}


export default Main;