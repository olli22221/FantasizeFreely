import React from "react";
import './css/Main.css';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useRecoilState, useRecoilValue } from 'recoil'
import { jwtToken as jwtTokenAtom } from "./redux/store";

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


    return (

    <div >
    <div className="row">
        <div className="taskdscr">Task Description</div>
        <div className="startbtnpanel">
            <Button onClick={handleStart}>Start the Task</Button>
        </div>
    </div>
    

</div>

    )
}


export default Main;