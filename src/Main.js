import React from "react";
import './css/Main.css';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useRecoilState, useRecoilValue } from 'recoil'
import { jwtToken as jwtTokenAtom } from "./redux/store";
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

    const navToComposePanel = () => {

       axios.get('http://35.157.211.200:80/'+"start").then((response) => {
            console.log(response.data)
            setjwtToken(response.data)
            nav("/Compose")
            caches.keys().then((names) => {
                names.forEach((name) => {
                  caches.delete(name);
                });
              });

        }).catch((error) => {
            console.log(error)
        })

        //nav("/Compose")

        

    }

   

    return (

    <div style={{alignItems:"center",display:"flex",justifyContent:"center"}} >
        
        <div style={{fontSize: "50px",textAlign:"center",fontFamily:"Cursive",height:"120px",width:"550px",marginRight:"100px", backgroundColor:"#403c3b","color":"white" }}>
            Fantasize Freely
        </div>
       
        <div style={{height:"900px"}}>
        
            
        
            <div style={{textAlign:"center",fontFamily:"Cursive",borderRadius:"30px",fontSize: "25px",height:"500px",width:"800px",marginLeft:"100px",marginTop:"100px", backgroundColor:"#403c3b","color":"white"}}>
        <Typewriter
        onInit={(typewriter) => {
            typewriter.typeString("Welcome fellow Musician! On this platform you can test your creativity in melody composition. The main task is to compose 3-5 short melodies with a length of 8 to 16 measures. During composing you have the opportunity to listen to your melody but also you can play it on an acoustic instrument. An artificial intelligence can provide you with inspirations which are around one measure. But make sure all the previously composed measures are completely filled. Otherwise it will just reject your request. The provided material from the AI is presented to you in different forms (e.g. just showing the durations or a sequence of different strength of a color will be shown). On the bottom right 3 different creativity score are shown. They are updated in realtime while composing. When the time has come and you think your melody is ready for a submission just click on the submitComposition Button. I wish you a lot of fun!").start();
        } }  
        />
            </div >
            
            <Button style={{height:"150px",padding:"0px",backgroundColor:"#403c3b",marginTop:"70px",marginLeft:"230px","borderRadius":"5px","font-weight": "bold","height":"50px","width":"255px","border":"gold 2px solid"}} onClick={handleStart}>Tutorial</Button>
            <Button style={{height:"150px",padding:"0px",backgroundColor:"#403c3b",marginTop:"70px",marginLeft:"50px","borderRadius":"5px","font-weight": "bold","height":"50px","width":"265px","border":"gold 2px solid"}} onClick={navToComposePanel}>Start Composing</Button>

        </div>
    </div>

       
    



    )
}


export default Main;