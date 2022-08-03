import React, { useState,useCallback,useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import Pitches from './Pitches';
import './../App.css';
import {useDrop} from 'react-dnd';
import DropWrapper from './DropWrapper';
import PitchesDraggable from './PitchesDraggable';
import { calculateSteps } from './util';
import {activeMeasure as activeMeasureAtom,measure1 as measure1Atom,measure2 as measure2Atom,
    measure3 as measure3Atom,measure4 as measure4Atom,measure5 as measure5Atom,measure6 as measure6Atom,
    measure7 as measure7Atom,measure8 as measure8Atom,
    meter as meterAtom, dragging as dragAtom, 
    hovering as hoverAtom,activeNote as activeNoteAtom, pointer as pointerAtom, 
    replaceActivated as replaceActivatedAtom, activePanel as activePanelAtom,
    musicatResponse as musicatResponseAtom} from '../redux/store'
import { measure1Meter as measure1MeterAtom,measure2Meter as measure2MeterAtom,measure3Meter as measure3MeterAtom,
    measure4Meter as measure4MeterAtom,measure5Meter as measure5MeterAtom,measure6Meter as measure6MeterAtom,
    measure7Meter as measure7MeterAtom,measure8Meter as measure8MeterAtom  } from '../redux/store';
import { useRecoilValue,useRecoilState } from 'recoil';
import {pitches,halfpitches,wholepitches,sixteenthpitches,eightpitches,
    defaultpitches,defaultpitchesoccupied, defaultPitchesArray_,sixteenthpitchesSharp,
eightpitchesSharp,pitchesSharp,wholepitchesSharp,halfpitchesSharp} from '../data/composePanelData'
import Modal from 'react-modal';
import SubmitComposition from './submitComposition';
import {fourQuarter,twoQuarter,sixEighth} from '../data/meterData'
import 'reactjs-popup/dist/index.css';
import { useNavigate } from "react-router-dom";
import * as Tone from "tone";
import { playMelody, playSynth,NoteDurationDict } from './ToneSampler';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import { Stack } from '@mui/material';


function Compose() {
    let nav = useNavigate();

    const meterArray = [fourQuarter,twoQuarter,sixEighth]
    const [meterIndex1,setMeterIndex1] = useState(0)
    const [volumeMeasure1,setvolumeMeasure1] = useState(0)
    const [volumeMeasure2,setvolumeMeasure2] = useState(0)
    const [volumeMeasure3,setvolumeMeasure3] = useState(0)
    const [volumeMeasure4,setvolumeMeasure4] = useState(0)
    const [volumeMeasure5,setvolumeMeasure5] = useState(0)
    const [volumeMeasure6,setvolumeMeasure6] = useState(0)
    const [volumeMeasure7,setvolumeMeasure7] = useState(0)
    const [volumeMeasure8,setvolumeMeasure8] = useState(0)
    
    const [meterscr1, setMetersrc1] = useState(fourQuarter);
    const musicatResult = useRecoilValue(musicatResponseAtom);
    const [isActive, setIsActive] = useState(false);
    const [panelArray, setpanelArray] = useState(pitches);
    const [panelDuration, setPanelDuration] = useState("quarter");
    const [accent, setAccent] = useState(0);
    const [activeNote, setactiveNote] = useRecoilState(activeNoteAtom);
    const [meter, setMeter] = useRecoilState(meterAtom);
    const [measure1Meter, setmeasure1Meter] = useRecoilState(measure1MeterAtom);
    const [measure2Meter, setmeasure2Meter] = useRecoilState(measure2MeterAtom);
    const [measure3Meter, setmeasure3Meter] = useRecoilState(measure3MeterAtom);
    const [measure4Meter, setmeasure4Meter] = useRecoilState(measure4MeterAtom);
    const [measure5Meter, setmeasure5Meter] = useRecoilState(measure5MeterAtom);
    const [measure6Meter, setmeasure6Meter] = useRecoilState(measure6MeterAtom);
    const [measure7Meter, setmeasure7Meter] = useRecoilState(measure7MeterAtom);
    const [measure8Meter, setmeasure8Meter] = useRecoilState(measure8MeterAtom);
    const [replaceActivated, setreplaceActivated] = useRecoilState(replaceActivatedAtom);
    const [activePanel, setActivePanel] = useRecoilState(activePanelAtom);

    
    

    const changeColor = () => {
        setIsActive(true);
    }

    const playwholeComposition = () => {
        const notesMeasure1 =  measure1.filter(piece => piece.show == true && piece.locked == false)
        const notesMeasure2 =  measure2.filter(piece => piece.show == true && piece.locked == false)
        const notesMeasure3 =  measure3.filter(piece => piece.show == true && piece.locked == false)
        const notesMeasure4 =  measure4.filter(piece => piece.show == true && piece.locked == false)
        const notesMeasure5 =  measure5.filter(piece => piece.show == true && piece.locked == false)
        const notesMeasure6 =  measure6.filter(piece => piece.show == true && piece.locked == false)
        const notesMeasure7 =  measure7.filter(piece => piece.show == true && piece.locked == false)
        const notesMeasure8 =  measure8.filter(piece => piece.show == true && piece.locked == false)
        const wholeComposition = [notesMeasure1,notesMeasure2,notesMeasure3,notesMeasure4,
            notesMeasure5,notesMeasure6,notesMeasure7,notesMeasure8]
       
                playMelody(wholeComposition,[volumeMeasure1,volumeMeasure2,volumeMeasure3,
                    volumeMeasure4,volumeMeasure5,volumeMeasure6,
                    volumeMeasure7,volumeMeasure8 ])
                
                
                
            

            
        
    }
     


    const [modalIsOpen, setIsOpen] = useState(false)

    
    const [activeMeasure,setactiveMeasure] = useRecoilState(activeMeasureAtom);
    const [measure1,setMeasure1] = useRecoilState(measure1Atom);
    const [measure2,setMeasure2] = useRecoilState(measure2Atom);
    const [measure3,setMeasure3] = useRecoilState(measure3Atom);
    const [measure4,setMeasure4] = useRecoilState(measure4Atom);
    const [measure5,setMeasure5] = useRecoilState(measure5Atom);
    const [measure6,setMeasure6] = useRecoilState(measure6Atom);
    const [measure7,setMeasure7] = useRecoilState(measure7Atom);
    const [measure8,setMeasure8] = useRecoilState(measure8Atom);

    const [pointer,setPointer] = useRecoilState(pointerAtom);
    
    
    const [hovering, setHover] = useRecoilState(hoverAtom);
    const dragging = useRecoilValue(dragAtom);
    useEffect(() => {
        console.log(accent,panelDuration)

        switch (panelDuration) {
            case "whole":
                switch (accent) {
                    case 0:
                        setpanelArray(wholepitches)
                        break;
                    case 1:
                        setpanelArray(wholepitchesSharp)
                        break;
                    case 2:
                        setpanelArray(wholepitches)
                        break;
                
                    default:
                        break;
                }
                break;
            case "half":
                switch (accent) {
                    case 0:
                        setpanelArray(halfpitches)
                        break;
                    case 1:
                        setpanelArray(halfpitchesSharp)
                        break;
                    case 2:
                        setpanelArray(halfpitches)
                        break;
                
                    default:
                        break;
                }
                break;
            case "quarter":
                switch (accent) {
                    case 0:
                        setpanelArray(pitches)
                        break;
                    case 1:
                        setpanelArray(pitchesSharp)
                        break;
                    case 2:
                        setpanelArray(pitches)
                        break;
                
                    default:
                        break;
                }
                break;
            case "eighth":
                switch (accent) {
                    case 0:
                        setpanelArray(eightpitches)
                        break;
                    case 1:
                        setpanelArray(eightpitchesSharp)
                        break;
                    case 2:
                        setpanelArray(eightpitches)
                        break;
                
                    default:
                        break;
                }
                break;
            case "sixteenth":
                switch (accent) {
                    case 0:
                        setpanelArray(sixteenthpitches)
                        break;
                    case 1:
                        setpanelArray(sixteenthpitchesSharp)
                        break;
                    case 2:
                        setpanelArray(sixteenthpitches)
                        break;
                
                    default:
                        break;
                }
                break;
            default:
                break;
        }
       

    }, [accent,panelDuration])

   
 


    /*const [{isOver}, drop] = useDrop(() => ({
        accept: "image",
        
        drop: (item) => addImageToBoard(item.id,item.index),
        collect: monitor => ({
            isOver: !!monitor.isOver(),

        }),

        
    }))

    const addImageToBoard = (id,index) => {

            if(index == null){

            }

        
            const pitchToAdd = pitches.filter((pitch => id === pitch.id))
            setBoard((board) => [...board, pitchToAdd[0]])
            
    }*/

        const replaceItem = (item) => {
            if (activeNote == 0) {
                return
                
            }
            

            const indexToReplace = activeNote
            const itemSteps = calculateSteps(item.duration)
            
            
            if(activeMeasure == 0){
                const updatedBoardData = measure1.slice(0,measure1Meter)
                const restboard = measure1.slice(measure1Meter,measure1.length)
                const stepsToReplace = calculateSteps(updatedBoardData[indexToReplace].duration)
                const sliceLen = updatedBoardData.filter(piece => piece.occupied == false).length
                if(itemSteps > sliceLen + stepsToReplace)return
                else{
                if(itemSteps == stepsToReplace){
                    const firstPart = updatedBoardData.slice(0, indexToReplace)
                    const middlePart = [item].concat(new Array(itemSteps-1).fill(defaultpitchesoccupied))
                    const endPart = updatedBoardData.slice(indexToReplace + stepsToReplace,measure1Meter)
                    const result = firstPart.concat(middlePart).concat(endPart).concat(restboard)
                    console.log(result)
                    setMeasure1(result)

                }
                else if(itemSteps < stepsToReplace){
                    const diffDuration = stepsToReplace - itemSteps
                    const firstPart = updatedBoardData.slice(0, indexToReplace)
                    const middlePart = [item].concat(new Array(itemSteps-1).fill(defaultpitchesoccupied))
                    const endPart = updatedBoardData.slice(indexToReplace + stepsToReplace,updatedBoardData.length).concat(new Array(diffDuration).fill(defaultpitches))
                    const result = firstPart.concat(middlePart).concat(endPart).concat(restboard)
                    console.log(middlePart)
                    setMeasure1(result)

                }
                else{
                    const diffDuration = itemSteps - stepsToReplace
                    const firstPart = updatedBoardData.slice(0, indexToReplace)
                    const middlePart = [item].concat(new Array(itemSteps-1).fill(defaultpitchesoccupied))
                    const endPart = updatedBoardData.slice(indexToReplace + stepsToReplace,updatedBoardData.length-diffDuration)
                    const result = firstPart.concat(middlePart).concat(endPart).concat(restboard)
                    console.log(result)
                    setMeasure1(result)

                }
                const pitch = item['type'][0]
            
                playSynth(pitch.replace('/',''),1)
            }
                
            }
            else if(activeMeasure == 1){
                const updatedBoardData = measure2.slice(0,measure2Meter)
                const restboard = measure1.slice(measure2Meter,measure2.length)
                const stepsToReplace = calculateSteps(updatedBoardData[indexToReplace].duration)
                const sliceLen = updatedBoardData.filter(piece => piece.occupied == false).length
                console.log(item)
                if(itemSteps > sliceLen + stepsToReplace)return
                else{
                if(itemSteps == stepsToReplace){
                    console.log(item)
                    const firstPart = updatedBoardData.slice(0, indexToReplace)
                    const middlePart = [item].concat(new Array(itemSteps-1).fill(defaultpitchesoccupied))
                    const endPart = updatedBoardData.slice(indexToReplace + stepsToReplace,measure1Meter)
                    const result = firstPart.concat(middlePart).concat(endPart).concat(restboard)
                    console.log(result)
                    setMeasure2(result)

                }
                else if(itemSteps < stepsToReplace){
                    const diffDuration = stepsToReplace - itemSteps
                    const firstPart = updatedBoardData.slice(0, indexToReplace)
                    const middlePart = [item].concat(new Array(itemSteps-1).fill(defaultpitchesoccupied))
                    const endPart = updatedBoardData.slice(indexToReplace + stepsToReplace,updatedBoardData.length).concat(new Array(diffDuration).fill(defaultpitches))
                    const result = firstPart.concat(middlePart).concat(endPart).concat(restboard)
                    console.log(middlePart)
                    setMeasure2(result)

                }
                else{
                    const diffDuration = itemSteps - stepsToReplace
                    const firstPart = updatedBoardData.slice(0, indexToReplace)
                    const middlePart = [item].concat(new Array(itemSteps-1).fill(defaultpitchesoccupied))
                    const endPart = updatedBoardData.slice(indexToReplace + stepsToReplace,updatedBoardData.length-diffDuration)
                    const result = firstPart.concat(middlePart).concat(endPart).concat(restboard)
                    console.log(result)
                    setMeasure2(result)

                }
                const pitch = item['type'][0]
                playSynth(pitch.replace('/',''),1)
            }
            }
            else if(activeMeasure == 2){
                const updatedBoardData = measure3.slice(0,measure3Meter)
                const restboard = measure3.slice(measure3Meter,measure3.length)
                const stepsToReplace = calculateSteps(updatedBoardData[indexToReplace].duration)
                const sliceLen = updatedBoardData.filter(piece => piece.occupied == false).length
                console.log(item)
                if(itemSteps > sliceLen + stepsToReplace)return
                else{
                if(itemSteps == stepsToReplace){
                    const firstPart = updatedBoardData.slice(0, indexToReplace)
                    const middlePart = [item].concat(new Array(itemSteps-1).fill(defaultpitchesoccupied))
                    const endPart = updatedBoardData.slice(indexToReplace + stepsToReplace,measure1Meter)
                    const result = firstPart.concat(middlePart).concat(endPart).concat(restboard)
                    console.log(result)
                    setMeasure3(result)

                }
                else if(itemSteps < stepsToReplace){
                    const diffDuration = stepsToReplace - itemSteps
                    const firstPart = updatedBoardData.slice(0, indexToReplace)
                    const middlePart = [item].concat(new Array(itemSteps-1).fill(defaultpitchesoccupied))
                    const endPart = updatedBoardData.slice(indexToReplace + stepsToReplace,updatedBoardData.length).concat(new Array(diffDuration).fill(defaultpitches))
                    const result = firstPart.concat(middlePart).concat(endPart).concat(restboard)
                    console.log(middlePart)
                    setMeasure3(result)

                }
                else{
                    const diffDuration = itemSteps - stepsToReplace
                    const firstPart = updatedBoardData.slice(0, indexToReplace)
                    const middlePart = [item].concat(new Array(itemSteps-1).fill(defaultpitchesoccupied))
                    const endPart = updatedBoardData.slice(indexToReplace + stepsToReplace,updatedBoardData.length-diffDuration)
                    const result = firstPart.concat(middlePart).concat(endPart).concat(restboard)
                    console.log(result)
                    setMeasure3(result)

                }
                const pitch = item['type'][0]
            
                playSynth(pitch.replace('/',''),1)
            }
            }
            

            
            
           


        }


        const deleteItem = () => {
            if (activeNote == 0) {
                return
                
            }
            if(activeMeasure == 0){
                const indexToDelete = activeNote
                const stepsToDelete = calculateSteps(measure1[indexToDelete].duration)
                const firstPart = measure1.slice(0, indexToDelete)
                const newActivatedIndex = calculateLastNoteIndex(firstPart)
                const secondPart = new Array(stepsToDelete).fill(defaultpitches) 
                const tmpPart = measure1.slice(indexToDelete+stepsToDelete, measure1.length)
                const boundaryIndexToEmptyPlaces = calculateLastNoteIndex(tmpPart)
                let resultingMeasure = []
                if(tmpPart[boundaryIndexToEmptyPlaces] == undefined){
                    resultingMeasure = firstPart.concat(secondPart)
                    
                }

                else{
                const space = calculateSteps(tmpPart[boundaryIndexToEmptyPlaces].duration)
                const thirdPart = tmpPart.slice(0,boundaryIndexToEmptyPlaces+space)
                const endPart = tmpPart.slice(boundaryIndexToEmptyPlaces+space, tmpPart.length)
                const endPart_ = secondPart.concat(endPart)
                resultingMeasure = firstPart.concat(thirdPart).concat(endPart_)
                }
                setMeasure1(resultingMeasure)
                
                setactiveNote(newActivatedIndex)
                const stepsFornewActivated = calculateSteps(resultingMeasure[newActivatedIndex].duration)
                setPointer(newActivatedIndex + stepsFornewActivated)
            }

            if(activeMeasure == 1){
                
                const indexToDelete = activeNote
                const stepsToDelete = calculateSteps(measure2[indexToDelete].duration)
                const firstPart = measure2.slice(0, indexToDelete)
                const newActivatedIndex = calculateLastNoteIndex(firstPart)
                const secondPart = new Array(stepsToDelete).fill(defaultpitches) 
                const tmpPart = measure2.slice(indexToDelete+stepsToDelete, measure2.length)
                const boundaryIndexToEmptyPlaces = calculateLastNoteIndex(tmpPart)
                let resultingMeasure = []
                if(tmpPart[boundaryIndexToEmptyPlaces] == undefined){
                    resultingMeasure = firstPart.concat(secondPart)
                    
                }

                else{
                    const space = calculateSteps(tmpPart[boundaryIndexToEmptyPlaces].duration)
                const thirdPart = tmpPart.slice(0,boundaryIndexToEmptyPlaces+space)
                const endPart = tmpPart.slice(boundaryIndexToEmptyPlaces+space, tmpPart.length)
                const endPart_ = secondPart.concat(endPart)
                resultingMeasure = firstPart.concat(thirdPart).concat(endPart_)

                }
                
                setMeasure2(resultingMeasure)
                
                setactiveNote(newActivatedIndex)
                const stepsFornewActivated = calculateSteps(resultingMeasure[newActivatedIndex].duration)
                setPointer(newActivatedIndex + stepsFornewActivated)

                }
            

            if(activeMeasure == 2){

                const indexToDelete = activeNote
                const stepsToDelete = calculateSteps(measure3[indexToDelete].duration)
                const firstPart = measure3.slice(0, indexToDelete)
                const newActivatedIndex = calculateLastNoteIndex(firstPart)
                const secondPart = new Array(stepsToDelete).fill(defaultpitches) 
                const tmpPart = measure3.slice(indexToDelete+stepsToDelete, measure3.length)
                const boundaryIndexToEmptyPlaces = calculateLastNoteIndex(tmpPart)
                let resultingMeasure = []
                if(tmpPart[boundaryIndexToEmptyPlaces] == undefined){
                    resultingMeasure = firstPart.concat(secondPart)
                    
                }

                else{
                const space = calculateSteps(tmpPart[boundaryIndexToEmptyPlaces].duration)
                const thirdPart = tmpPart.slice(0,boundaryIndexToEmptyPlaces+space)
                const endPart = tmpPart.slice(boundaryIndexToEmptyPlaces+space, tmpPart.length)
                const endPart_ = secondPart.concat(endPart)
                resultingMeasure = firstPart.concat(thirdPart).concat(endPart_)
                }
                setMeasure3(resultingMeasure)
                
                setactiveNote(newActivatedIndex)
                const stepsFornewActivated = calculateSteps(resultingMeasure[newActivatedIndex].duration)
                setPointer(newActivatedIndex + stepsFornewActivated)

            }

            if(activeMeasure == 3){

                const indexToDelete = activeNote
                const stepsToDelete = calculateSteps(measure4[indexToDelete].duration)
                const firstPart = measure4.slice(0, indexToDelete)
                const newActivatedIndex = calculateLastNoteIndex(firstPart)
                const secondPart = new Array(stepsToDelete).fill(defaultpitches) 
                const tmpPart = measure4.slice(indexToDelete+stepsToDelete, measure4.length)
                const boundaryIndexToEmptyPlaces = calculateLastNoteIndex(tmpPart)
                let resultingMeasure = []
                if(tmpPart[boundaryIndexToEmptyPlaces] == undefined){
                    resultingMeasure = firstPart.concat(secondPart)
                    
                }

                else{
                const space = calculateSteps(tmpPart[boundaryIndexToEmptyPlaces].duration)
                const thirdPart = tmpPart.slice(0,boundaryIndexToEmptyPlaces+space)
                const endPart = tmpPart.slice(boundaryIndexToEmptyPlaces+space, tmpPart.length)
                const endPart_ = secondPart.concat(endPart)
                resultingMeasure = firstPart.concat(thirdPart).concat(endPart_)
                }
                setMeasure4(resultingMeasure)
                
                setactiveNote(newActivatedIndex)
                const stepsFornewActivated = calculateSteps(resultingMeasure[newActivatedIndex].duration)
                setPointer(newActivatedIndex + stepsFornewActivated)

            }

            if(activeMeasure == 4){

                const indexToDelete = activeNote
                const stepsToDelete = calculateSteps(measure5[indexToDelete].duration)
                const firstPart = measure5.slice(0, indexToDelete)
                const newActivatedIndex = calculateLastNoteIndex(firstPart)
                const secondPart = new Array(stepsToDelete).fill(defaultpitches) 
                const tmpPart = measure5.slice(indexToDelete+stepsToDelete, measure5.length)
                const boundaryIndexToEmptyPlaces = calculateLastNoteIndex(tmpPart)
                let resultingMeasure = []
                if(tmpPart[boundaryIndexToEmptyPlaces] == undefined){
                    resultingMeasure = firstPart.concat(secondPart)
                    
                }

                else{
                const space = calculateSteps(tmpPart[boundaryIndexToEmptyPlaces].duration)
                const thirdPart = tmpPart.slice(0,boundaryIndexToEmptyPlaces+space)
                const endPart = tmpPart.slice(boundaryIndexToEmptyPlaces+space, tmpPart.length)
                const endPart_ = secondPart.concat(endPart)
                resultingMeasure = firstPart.concat(thirdPart).concat(endPart_)
                }
                setMeasure5(resultingMeasure)
                
                setactiveNote(newActivatedIndex)
                const stepsFornewActivated = calculateSteps(resultingMeasure[newActivatedIndex].duration)
                setPointer(newActivatedIndex + stepsFornewActivated)

            }

            if(activeMeasure == 5){

                const indexToDelete = activeNote
                const stepsToDelete = calculateSteps(measure6[indexToDelete].duration)
                const firstPart = measure6.slice(0, indexToDelete)
                const newActivatedIndex = calculateLastNoteIndex(firstPart)
                const secondPart = new Array(stepsToDelete).fill(defaultpitches) 
                const tmpPart = measure6.slice(indexToDelete+stepsToDelete, measure6.length)
                const boundaryIndexToEmptyPlaces = calculateLastNoteIndex(tmpPart)
                let resultingMeasure = []
                if(tmpPart[boundaryIndexToEmptyPlaces] == undefined){
                    resultingMeasure = firstPart.concat(secondPart)
                    
                }

                else{
                const space = calculateSteps(tmpPart[boundaryIndexToEmptyPlaces].duration)
                const thirdPart = tmpPart.slice(0,boundaryIndexToEmptyPlaces+space)
                const endPart = tmpPart.slice(boundaryIndexToEmptyPlaces+space, tmpPart.length)
                const endPart_ = secondPart.concat(endPart)
                resultingMeasure = firstPart.concat(thirdPart).concat(endPart_)
                }
                setMeasure6(resultingMeasure)
                
                setactiveNote(newActivatedIndex)
                const stepsFornewActivated = calculateSteps(resultingMeasure[newActivatedIndex].duration)
                setPointer(newActivatedIndex + stepsFornewActivated)

            }

            if(activeMeasure == 6){

                const indexToDelete = activeNote
                const stepsToDelete = calculateSteps(measure7[indexToDelete].duration)
                const firstPart = measure7.slice(0, indexToDelete)
                const newActivatedIndex = calculateLastNoteIndex(firstPart)
                const secondPart = new Array(stepsToDelete).fill(defaultpitches) 
                const tmpPart = measure7.slice(indexToDelete+stepsToDelete, measure7.length)
                const boundaryIndexToEmptyPlaces = calculateLastNoteIndex(tmpPart)
                let resultingMeasure = []
                if(tmpPart[boundaryIndexToEmptyPlaces] == undefined){
                    resultingMeasure = firstPart.concat(secondPart)
                    
                }

                else{
                const space = calculateSteps(tmpPart[boundaryIndexToEmptyPlaces].duration)
                const thirdPart = tmpPart.slice(0,boundaryIndexToEmptyPlaces+space)
                const endPart = tmpPart.slice(boundaryIndexToEmptyPlaces+space, tmpPart.length)
                const endPart_ = secondPart.concat(endPart)
                resultingMeasure = firstPart.concat(thirdPart).concat(endPart_)
                }
                setMeasure7(resultingMeasure)
                
                setactiveNote(newActivatedIndex)
                const stepsFornewActivated = calculateSteps(resultingMeasure[newActivatedIndex].duration)
                setPointer(newActivatedIndex + stepsFornewActivated)

            }

            if(activeMeasure == 7){

                const indexToDelete = activeNote
                const stepsToDelete = calculateSteps(measure8[indexToDelete].duration)
                const firstPart = measure8.slice(0, indexToDelete)
                const newActivatedIndex = calculateLastNoteIndex(firstPart)
                const secondPart = new Array(stepsToDelete).fill(defaultpitches) 
                const tmpPart = measure8.slice(indexToDelete+stepsToDelete, measure8.length)
                const boundaryIndexToEmptyPlaces = calculateLastNoteIndex(tmpPart)
                let resultingMeasure = []
                if(tmpPart[boundaryIndexToEmptyPlaces] == undefined){
                    resultingMeasure = firstPart.concat(secondPart)
                    
                }

                else{
                const space = calculateSteps(tmpPart[boundaryIndexToEmptyPlaces].duration)
                const thirdPart = tmpPart.slice(0,boundaryIndexToEmptyPlaces+space)
                const endPart = tmpPart.slice(boundaryIndexToEmptyPlaces+space, tmpPart.length)
                const endPart_ = secondPart.concat(endPart)
                resultingMeasure = firstPart.concat(thirdPart).concat(endPart_)
                }
                setMeasure8(resultingMeasure)
                
                setactiveNote(newActivatedIndex)
                const stepsFornewActivated = calculateSteps(resultingMeasure[newActivatedIndex].duration)
                setPointer(newActivatedIndex + stepsFornewActivated)

            }
        }
    
        

        const calculatemeasureBoundaries = (activeNote,index) => {

            const measureNumber = ~~(index / 17)
            const endOfMeasure = (measureNumber * 17)+meter
            const measureStart = endOfMeasure-meter+1

        }

        const calculateLastNoteIndex = (currentMeasure) => {
            
            for (let i = currentMeasure.length-1; i > 0; i--) {
                if (currentMeasure[i].locked == false && currentMeasure[i].occupied == true ) {
                    return i;
                }
                
            }
            return 0
                
        }

        const checkMatch = (index,steps, measure) => {
            
            const endOfMeasure = meter
            const sliceOfBoard = measure.slice(endOfMeasure-meter+1,endOfMeasure)
            //const sliceLen = sliceOfBoard.filter(piece => piece.occupied == false).length
            const sliceLen = measure.filter(piece => piece.occupied == false).length
            if(steps <= sliceLen){
                return true
            }
            else {
                return false
            }

            

        }

        
        const addPitch = (item) => {
            console.log(item)

            const index = activeNote
            const steps = calculateSteps(item.duration)
            
            if (activeMeasure == 0) {
                
                const fit = checkMatch(index,steps,measure1)
            if(fit){


                if (activeNote % measure1Meter == 0) {
                    const index = 1
                    setMeasure1(measure1 =>{
                    
                    
                    
                        
                        const updatedBoardData = measure1.slice(0,measure1Meter)
                        const restboard = measure1.slice(measure1Meter,measure1.length)
                        
                        const startSlice = updatedBoardData.slice(0,index)
                        const tmpDefaultPitches = defaultpitchesoccupied
                        const middleSlice = [item].concat(new Array(steps-1).fill(tmpDefaultPitches))
                        const endSlice = updatedBoardData.slice(index,updatedBoardData.length-steps)
                        
                        const updatedBoardData_ = startSlice.concat(middleSlice).concat(endSlice).concat(restboard)
                        return updatedBoardData_
    
                    })

                    setactiveNote(index)
                    setPointer(pointer =>{
                        const followUpPointer = index + steps
                        if(followUpPointer % 17 == 0 ){
                        return index + steps+1}
                        else{
                            return index + steps
                        }
                    })

                }
               else{
 
                    const activeItem = calculateSteps( measure1[index].duration)

                setMeasure1(measure1 =>{
                    
                    const updatedBoardData = measure1.slice(0,measure1Meter)
                    const restboard = measure1.slice(measure1Meter,measure1.length)
                    const steps_ = calculateSteps(updatedBoardData[index].duration) 
                    const startSlice = updatedBoardData.slice(0,index+steps_)
                    const  tmpDefaultPitches = defaultpitchesoccupied
                    const middleSlice = [item].concat(new Array(steps-1).fill(tmpDefaultPitches))
                    const endSlice = updatedBoardData.slice(index+steps_,updatedBoardData.length-steps)
                    
                    
                    const updatedBoardData_ = startSlice.concat(middleSlice).concat(endSlice).concat(restboard)
                    console.log(updatedBoardData_)
                    return updatedBoardData_

                })
                setactiveNote(index+activeItem)
                setPointer(pointer =>{
                    const followUpPointer = index+activeItem + steps
                    if(followUpPointer % measure1Meter == 0 ){
                    return index + steps+1}
                    else{
                        return index + steps
                    }
                })
                
                
            }


        }


        else{

            const currentMeasure_ =  [...measure1]
            const sliceLen = currentMeasure_.filter(piece => piece.occupied == false).length
            if(sliceLen > 0){
                return
            }
            const lastNoteofMeasure = calculateLastNoteIndex(currentMeasure_)
            
            if (activeNote == lastNoteofMeasure) {
                setPointer(1)
                const fit = checkMatch(index,steps,measure2)
                
                if(!fit)return
                
                
                
                    setMeasure2(measure2 =>{
                    
                    
                    
                        console.log(pointer)
                        const updatedBoardData = measure2.slice(0,measure2Meter)
                        const restboard = measure2.slice(measure2Meter,measure2.length)
                        
                        const startSlice = updatedBoardData.slice(0,1)
                        const tmpDefaultPitches = defaultpitchesoccupied
                        const middleSlice = [item].concat(new Array(steps-1).fill(tmpDefaultPitches))
                        const endSlice = updatedBoardData.slice(1,updatedBoardData.length-steps)
                        
                        const updatedBoardData_ = startSlice.concat(middleSlice).concat(endSlice).concat(restboard)
                        return updatedBoardData_
                
            })

            setactiveMeasure(1)
                setactiveNote(1)
                
                setPointer(pointer =>{
                   
                    return index + steps
                   
                })
        }

            else{

            }




        }
                 
            }
            else if (activeMeasure == 1) {
                
                const fit = checkMatch(index,steps,measure2)
            if(fit){


                if (activeNote % measure2Meter == 0) {
                    const index = 1
                    setMeasure2(measure2 =>{
                    
                    
                    
                        
                        const updatedBoardData = measure2.slice(0,measure2Meter)
                        const restboard = measure2.slice(measure2Meter,measure2.length)
                        
                        const startSlice = updatedBoardData.slice(0,index)
                        const tmpDefaultPitches = defaultpitchesoccupied
                        const middleSlice = [item].concat(new Array(steps-1).fill(tmpDefaultPitches))
                        const endSlice = updatedBoardData.slice(index,updatedBoardData.length-steps)
                        
                        const updatedBoardData_ = startSlice.concat(middleSlice).concat(endSlice).concat(restboard)
                        console.log(updatedBoardData_)
                        return updatedBoardData_
    
                    })

                    setactiveNote(index)
                    setPointer(pointer =>{
                        const followUpPointer = index + steps
                        if(followUpPointer % measure2Meter == 0 ){
                        return index + steps+1}
                        else{
                            return index + steps
                        }
                    })

                    
                }

                else{

                    
                    const activeItem = calculateSteps( measure2[index].duration)

                setMeasure2(measure2 =>{
                    
                    
                    
                    
                    const updatedBoardData = measure2.slice(0,measure2Meter)
                    const restboard = measure2.slice(measure2Meter,measure2.length)
                    const steps_ = calculateSteps(updatedBoardData[index].duration) 
                    const startSlice = updatedBoardData.slice(0,index+steps_)
                    const  tmpDefaultPitches = defaultpitchesoccupied
                    const middleSlice = [item].concat(new Array(steps-1).fill(tmpDefaultPitches))
                    const endSlice = updatedBoardData.slice(index+steps_,updatedBoardData.length-steps)
                    
                    
                    const updatedBoardData_ = startSlice.concat(middleSlice).concat(endSlice).concat(restboard)
                    return updatedBoardData_

                })
                setactiveNote(index+activeItem)
                setPointer(pointer =>{
                    const followUpPointer = index+activeItem + steps
                    if(followUpPointer % measure2Meter == 0 ){
                    return index + steps+1}
                    else{
                        return index + steps
                    }
                })
                
                
            }


        }


        else{

            const currentMeasure_ =  [...measure2]
            const sliceLen = currentMeasure_.filter(piece => piece.occupied == false).length
            
            if(sliceLen > 0){
                return
            }
            const lastNoteofMeasure = calculateLastNoteIndex(currentMeasure_)
            
            
            if (activeNote == lastNoteofMeasure) {
                
                setPointer(1)
                const fit = checkMatch(index,steps,measure3)
                
                if(!fit)return

                setMeasure3(measure3 =>{
                    
                    
                    
                    
                    const updatedBoardData = measure3.slice(0,measure3Meter)
                    const restboard = measure3.slice(measure3Meter,measure3.length)
                    
                    const startSlice = updatedBoardData.slice(0,1)
                    const tmpDefaultPitches = defaultpitchesoccupied
                    const middleSlice = [item].concat(new Array(steps-1).fill(tmpDefaultPitches))
                    const endSlice = updatedBoardData.slice(1,updatedBoardData.length-steps)
                    
                    const updatedBoardData_ = startSlice.concat(middleSlice).concat(endSlice).concat(restboard)
                    return updatedBoardData_
            
        })
                setactiveMeasure(2)
                setactiveNote(1)

                setPointer(pointer =>{
                   
                    return index + steps
                   
                })
                
            }

            else{

            }



        }
                
            }
            else if (activeMeasure == 2) {

                const fit = checkMatch(index,steps,measure3)
            if(fit){


                if (activeNote % measure3Meter == 0) {
                    const index = 1
                    setMeasure3(measure3 =>{
                    
                    
                    
                        
                        const updatedBoardData = measure3.slice(0,measure3Meter)
                        const restboard = measure3.slice(measure3Meter,measure3.length)
                        
                        const startSlice = updatedBoardData.slice(0,index)
                        const tmpDefaultPitches = defaultpitchesoccupied
                        const middleSlice = [item].concat(new Array(steps-1).fill(tmpDefaultPitches))
                        const endSlice = updatedBoardData.slice(index,updatedBoardData.length-steps)
                        
                        const updatedBoardData_ = startSlice.concat(middleSlice).concat(endSlice).concat(restboard)
                        console.log(updatedBoardData_)
                        return updatedBoardData_
    
                    })

                    setactiveNote(index)
                    setPointer(pointer =>{
                        const followUpPointer = index + steps
                        if(followUpPointer % measure3Meter == 0 ){
                        return index + steps+1}
                        else{
                            return index + steps
                        }
                    })

                    
                }

                else{

                    
                    const activeItem = calculateSteps( measure3[index].duration)

                setMeasure3(measure3 =>{
                    
                    
                    
                    
                    
                    const updatedBoardData = measure3.slice(0,measure3Meter)
                    const restboard = measure3.slice(measure3Meter,measure3.length)
                    const steps_ = calculateSteps(updatedBoardData[index].duration) 
                    const startSlice = updatedBoardData.slice(0,index+steps_)
                    const  tmpDefaultPitches = defaultpitchesoccupied
                    const middleSlice = [item].concat(new Array(steps-1).fill(tmpDefaultPitches))
                    const endSlice = updatedBoardData.slice(index+steps_,updatedBoardData.length-steps)
                    
                    
                    const updatedBoardData_ = startSlice.concat(middleSlice).concat(endSlice).concat(restboard)
                    console.log(updatedBoardData_)
                    return updatedBoardData_

                })
                setactiveNote(index+activeItem)
                setPointer(pointer =>{
                    const followUpPointer = index+activeItem + steps
                    if(followUpPointer % measure3Meter == 0 ){
                    return index + steps+1}
                    else{
                        return index + steps
                    }
                })
                
                
            }


        }


        else{
            const currentMeasure_ =  [...measure3]
            const sliceLen = currentMeasure_.filter(piece => piece.occupied == false).length
            if(sliceLen > 0){
                return
            }
            const lastNoteofMeasure = calculateLastNoteIndex(currentMeasure_)
            
            if (activeNote == lastNoteofMeasure) {
                
                setPointer(1)
                const fit = checkMatch(index,steps,measure4)
                
                if(!fit)return


                setMeasure4(measure4 =>{
                    
                    
                    const updatedBoardData = measure4.slice(0,measure4Meter)
                    const restboard = measure4.slice(measure4Meter,measure4.length)
                    console.log(restboard)
                    const startSlice = updatedBoardData.slice(0,1)
                    const tmpDefaultPitches = defaultpitchesoccupied
                    const middleSlice = [item].concat(new Array(steps-1).fill(tmpDefaultPitches))
                    const endSlice = updatedBoardData.slice(1,updatedBoardData.length-steps)
                    
                    const updatedBoardData_ = startSlice.concat(middleSlice).concat(endSlice).concat(restboard)
                    console.log(startSlice)
                    console.log(middleSlice)
                    console.log(endSlice)
                    console.log(restboard)
                    return updatedBoardData_
            
        })

            setactiveMeasure(3)
                setactiveNote(1)
                
                setPointer(pointer =>{
                   
                    return index + steps
                   
                })
                
            }
            else{

            }




        }
                
            }

            
            else if (activeMeasure == 3) {
                
                const fit = checkMatch(index,steps,measure4)
            if(fit){


                if (activeNote % measure4Meter == 0) {
                    const index = 1
                    setMeasure4(measure4 =>{
                    
                    
                    
                        
                        const updatedBoardData = measure4.slice(0,measure4Meter)
                        const restboard = measure4.slice(measure4Meter,measure4.length)
                        
                        const startSlice = updatedBoardData.slice(0,index)
                        const tmpDefaultPitches = defaultpitchesoccupied
                        const middleSlice = [item].concat(new Array(steps-1).fill(tmpDefaultPitches))
                        const endSlice = updatedBoardData.slice(index,updatedBoardData.length-steps)
                        
                        const updatedBoardData_ = startSlice.concat(middleSlice).concat(endSlice).concat(restboard)
                        console.log(updatedBoardData_)
                        return updatedBoardData_
    
                    })

                    setactiveNote(index)
                    setPointer(pointer =>{
                        const followUpPointer = index + steps
                        if(followUpPointer % measure4Meter == 0 ){
                        return index + steps+1}
                        else{
                            return index + steps
                        }
                    })

                    
                }

                else{

                    
                    const activeItem = calculateSteps( measure4[index].duration)

                setMeasure4(measure4 =>{
                    
                    
                    
                    
                    const updatedBoardData = measure4.slice(0,measure4Meter)
                    const restboard = measure4.slice(measure4Meter,measure4.length)
                    const steps_ = calculateSteps(updatedBoardData[index].duration) 
                    const startSlice = updatedBoardData.slice(0,index+steps_)
                    const  tmpDefaultPitches = defaultpitchesoccupied
                    const middleSlice = [item].concat(new Array(steps-1).fill(tmpDefaultPitches))
                    const endSlice = updatedBoardData.slice(index+steps_,updatedBoardData.length-steps)
                    
                    
                    const updatedBoardData_ = startSlice.concat(middleSlice).concat(endSlice).concat(restboard)
                    return updatedBoardData_

                })
                setactiveNote(index+activeItem)
                setPointer(pointer =>{
                    const followUpPointer = index+activeItem + steps
                    if(followUpPointer % measure4Meter == 0 ){
                    return index + steps+1}
                    else{
                        return index + steps
                    }
                })
                
                
            }


        }


        else{

            const currentMeasure_ =  [...measure4]
            const sliceLen = currentMeasure_.filter(piece => piece.occupied == false).length
            
            if(sliceLen > 0){
                return
            }
            const lastNoteofMeasure = calculateLastNoteIndex(currentMeasure_)
            
            
            if (activeNote == lastNoteofMeasure) {
                
                setPointer(1)
                const fit = checkMatch(index,steps,measure5)
                
                if(!fit)return

                setMeasure5(measure5 =>{
                    
                    
                    
                    
                    console.log(measure5)
                    const updatedBoardData = measure5.slice(0,measure5Meter)
                    
                    const restboard = measure5.slice(measure5Meter,measure5.length)
                    console.log(measure5Meter)
                    console.log(measure5)
                    const startSlice = updatedBoardData.slice(0,1)
                    const tmpDefaultPitches = defaultpitchesoccupied
                    const middleSlice = [item].concat(new Array(steps-1).fill(tmpDefaultPitches))
                    const endSlice = updatedBoardData.slice(1,updatedBoardData.length-steps)
                    
                    const updatedBoardData_ = startSlice.concat(middleSlice).concat(endSlice).concat(restboard)
                    console.log(startSlice)
                    console.log(middleSlice)
                    console.log(endSlice)
                    console.log(restboard)
                    return updatedBoardData_
            
        })
                setactiveMeasure(4)
                setactiveNote(1)

                setPointer(pointer =>{
                   
                    return index + steps
                   
                })
                
            }

            else{

            }



        }
                
            }


            else if (activeMeasure == 4) {
                
                
                const fit = checkMatch(index,steps,measure5)
            if(fit){
                

                if (activeNote % measure5Meter == 0) {
                    const index = 1
                    setMeasure5(measure5 =>{
                    
                    
                    
                        
                        const updatedBoardData = measure5.slice(0,measure5Meter)
                        const restboard = measure5.slice(measure5Meter,measure5.length)
                        
                        const startSlice = updatedBoardData.slice(0,index)
                        const tmpDefaultPitches = defaultpitchesoccupied
                        const middleSlice = [item].concat(new Array(steps-1).fill(tmpDefaultPitches))
                        const endSlice = updatedBoardData.slice(index,updatedBoardData.length-steps)
                        
                        const updatedBoardData_ = startSlice.concat(middleSlice).concat(endSlice).concat(restboard)
                        console.log(updatedBoardData_)
                        return updatedBoardData_
    
                    })

                    setactiveNote(index)
                    setPointer(pointer =>{
                        const followUpPointer = index + steps
                        if(followUpPointer % measure5Meter == 0 ){
                        return index + steps+1}
                        else{
                            return index + steps
                        }
                    })

                    
                }

                else{

                    
                    const activeItem = calculateSteps( measure5[index].duration)

                setMeasure5(measure5 =>{
                    
                    
                    
                    
                    const updatedBoardData = measure5.slice(0,measure5Meter)
                    const restboard = measure5.slice(measure5Meter,measure5.length)
                    const steps_ = calculateSteps(updatedBoardData[index].duration) 
                    const startSlice = updatedBoardData.slice(0,index+steps_)
                    const  tmpDefaultPitches = defaultpitchesoccupied
                    const middleSlice = [item].concat(new Array(steps-1).fill(tmpDefaultPitches))
                    const endSlice = updatedBoardData.slice(index+steps_,updatedBoardData.length-steps)
                    
                    
                    const updatedBoardData_ = startSlice.concat(middleSlice).concat(endSlice).concat(restboard)
                    return updatedBoardData_

                })
                setactiveNote(index+activeItem)
                setPointer(pointer =>{
                    const followUpPointer = index+activeItem + steps
                    if(followUpPointer % measure5Meter == 0 ){
                    return index + steps+1}
                    else{
                        return index + steps
                    }
                })
                
                
            }


        }


        else{
            
            const currentMeasure_ =  [...measure5]
            const sliceLen = currentMeasure_.filter(piece => piece.occupied == false).length
            console.log(currentMeasure_)
            if(sliceLen > 0){
                
                return
            }
            const lastNoteofMeasure = calculateLastNoteIndex(currentMeasure_)
            
            
            if (activeNote == lastNoteofMeasure) {
                
                setPointer(1)
                const fit = checkMatch(index,steps,measure6)
                console.log(fit)
                if(!fit)return

                setMeasure6(measure6 =>{
                    
                    
                    
                    
                    const updatedBoardData = measure6.slice(0,measure6Meter)
                    const restboard = measure6.slice(measure6Meter,measure6.length)
                    
                    const startSlice = updatedBoardData.slice(0,1)
                    const tmpDefaultPitches = defaultpitchesoccupied
                    const middleSlice = [item].concat(new Array(steps-1).fill(tmpDefaultPitches))
                    const endSlice = updatedBoardData.slice(1,updatedBoardData.length-steps)
                    
                    const updatedBoardData_ = startSlice.concat(middleSlice).concat(endSlice).concat(restboard)
                    return updatedBoardData_
            
        })
                setactiveMeasure(5)
                setactiveNote(1)

                setPointer(pointer =>{
                   
                    return index + steps
                   
                })
                
            }

            else{

            }



        }
                
            }
            
            
            else if (activeMeasure == 5) {
                
                const fit = checkMatch(index,steps,measure6)
            if(fit){


                if (activeNote % measure6Meter == 0) {
                    const index = 1
                    setMeasure6(measure6 =>{
                    
                    
                    
                        
                        const updatedBoardData = measure6.slice(0,measure6Meter)
                        const restboard = measure6.slice(measure6Meter,measure6.length)
                        
                        const startSlice = updatedBoardData.slice(0,index)
                        const tmpDefaultPitches = defaultpitchesoccupied
                        const middleSlice = [item].concat(new Array(steps-1).fill(tmpDefaultPitches))
                        const endSlice = updatedBoardData.slice(index,updatedBoardData.length-steps)
                        
                        const updatedBoardData_ = startSlice.concat(middleSlice).concat(endSlice).concat(restboard)
                        console.log(updatedBoardData_)
                        return updatedBoardData_
    
                    })

                    setactiveNote(index)
                    setPointer(pointer =>{
                        const followUpPointer = index + steps
                        if(followUpPointer % measure6Meter == 0 ){
                        return index + steps+1}
                        else{
                            return index + steps
                        }
                    })

                    
                }

                else{

                    
                    const activeItem = calculateSteps( measure6[index].duration)

                setMeasure6(measure6 =>{
                    
                    
                    
                    
                    const updatedBoardData = measure6.slice(0,measure6Meter)
                    const restboard = measure6.slice(measure6Meter,measure6.length)
                    const steps_ = calculateSteps(updatedBoardData[index].duration) 
                    const startSlice = updatedBoardData.slice(0,index+steps_)
                    const  tmpDefaultPitches = defaultpitchesoccupied
                    const middleSlice = [item].concat(new Array(steps-1).fill(tmpDefaultPitches))
                    const endSlice = updatedBoardData.slice(index+steps_,updatedBoardData.length-steps)
                    
                    
                    const updatedBoardData_ = startSlice.concat(middleSlice).concat(endSlice).concat(restboard)
                    return updatedBoardData_

                })
                setactiveNote(index+activeItem)
                setPointer(pointer =>{
                    const followUpPointer = index+activeItem + steps
                    if(followUpPointer % measure6Meter == 0 ){
                    return index + steps+1}
                    else{
                        return index + steps
                    }
                })
                
                
            }


        }


        else{

            const currentMeasure_ =  [...measure6]
            const sliceLen = currentMeasure_.filter(piece => piece.occupied == false).length
            
            if(sliceLen > 0){
                return
            }
            const lastNoteofMeasure = calculateLastNoteIndex(currentMeasure_)
            
            
            if (activeNote == lastNoteofMeasure) {
                
                setPointer(1)
                const fit = checkMatch(index,steps,measure7)
                
                if(!fit)return

                setMeasure7(measure7 =>{
                    
                    
                    
                    
                    const updatedBoardData = measure7.slice(0,measure7Meter)
                    const restboard = measure7.slice(measure7Meter,measure7.length)
                    
                    const startSlice = updatedBoardData.slice(0,1)
                    const tmpDefaultPitches = defaultpitchesoccupied
                    const middleSlice = [item].concat(new Array(steps-1).fill(tmpDefaultPitches))
                    const endSlice = updatedBoardData.slice(1,updatedBoardData.length-steps)
                    
                    const updatedBoardData_ = startSlice.concat(middleSlice).concat(endSlice).concat(restboard)
                    return updatedBoardData_
            
        })
                setactiveMeasure(6)
                setactiveNote(1)

                setPointer(pointer =>{
                   
                    return index + steps
                   
                })
                
            }

            else{

            }



        }
                
            }
            
            else if (activeMeasure == 6) {
                
                const fit = checkMatch(index,steps,measure7)
            if(fit){


                if (activeNote % measure7Meter == 0) {
                    const index = 1
                    setMeasure7(measure7 =>{
                    
                    
                    
                        
                        const updatedBoardData = measure7.slice(0,measure7Meter)
                        const restboard = measure7.slice(measure7Meter,measure7.length)
                        
                        const startSlice = updatedBoardData.slice(0,index)
                        const tmpDefaultPitches = defaultpitchesoccupied
                        const middleSlice = [item].concat(new Array(steps-1).fill(tmpDefaultPitches))
                        const endSlice = updatedBoardData.slice(index,updatedBoardData.length-steps)
                        
                        const updatedBoardData_ = startSlice.concat(middleSlice).concat(endSlice).concat(restboard)
                        console.log(updatedBoardData_)
                        return updatedBoardData_
    
                    })

                    setactiveNote(index)
                    setPointer(pointer =>{
                        const followUpPointer = index + steps
                        if(followUpPointer % measure7Meter == 0 ){
                        return index + steps+1}
                        else{
                            return index + steps
                        }
                    })

                    
                }

                else{

                    
                    const activeItem = calculateSteps( measure7[index].duration)

                setMeasure7(measure7 =>{
                    
                    
                    
                    
                    const updatedBoardData = measure7.slice(0,measure7Meter)
                    const restboard = measure7.slice(measure7Meter,measure7.length)
                    const steps_ = calculateSteps(updatedBoardData[index].duration) 
                    const startSlice = updatedBoardData.slice(0,index+steps_)
                    const  tmpDefaultPitches = defaultpitchesoccupied
                    const middleSlice = [item].concat(new Array(steps-1).fill(tmpDefaultPitches))
                    const endSlice = updatedBoardData.slice(index+steps_,updatedBoardData.length-steps)
                    
                    
                    const updatedBoardData_ = startSlice.concat(middleSlice).concat(endSlice).concat(restboard)
                    return updatedBoardData_

                })
                setactiveNote(index+activeItem)
                setPointer(pointer =>{
                    const followUpPointer = index+activeItem + steps
                    if(followUpPointer % measure7Meter == 0 ){
                    return index + steps+1}
                    else{
                        return index + steps
                    }
                })
                
                
            }


        }


        else{

            const currentMeasure_ =  [...measure7]
            const sliceLen = currentMeasure_.filter(piece => piece.occupied == false).length
            
            if(sliceLen > 0){
                return
            }
            const lastNoteofMeasure = calculateLastNoteIndex(currentMeasure_)
            
            
            if (activeNote == lastNoteofMeasure) {
                
                setPointer(1)
                const fit = checkMatch(index,steps,measure8)
                
                if(!fit)return

                setMeasure8(measure8 =>{
                    
                    
                    
                    
                    const updatedBoardData = measure8.slice(0,measure8Meter)
                    const restboard = measure8.slice(measure8Meter,measure8.length)
                    
                    const startSlice = updatedBoardData.slice(0,1)
                    const tmpDefaultPitches = defaultpitchesoccupied
                    const middleSlice = [item].concat(new Array(steps-1).fill(tmpDefaultPitches))
                    const endSlice = updatedBoardData.slice(1,updatedBoardData.length-steps)
                    
                    const updatedBoardData_ = startSlice.concat(middleSlice).concat(endSlice).concat(restboard)
                    return updatedBoardData_
            
        })
                setactiveMeasure(7)
                setactiveNote(1)

                setPointer(pointer =>{
                   
                    return index + steps
                   
                })
                
            }

            else{

            }



        }
                
            }

            else if (activeMeasure == 7) {
                
                const fit = checkMatch(index,steps,measure8)
            if(fit){


                if (activeNote % measure8Meter == 0) {
                    const index = 1
                    setMeasure8(measure8 =>{
                    
                    
                    
                        
                        const updatedBoardData = measure8.slice(0,measure8Meter)
                        const restboard = measure8.slice(measure8Meter,measure8.length)
                        
                        const startSlice = updatedBoardData.slice(0,index)
                        const tmpDefaultPitches = defaultpitchesoccupied
                        const middleSlice = [item].concat(new Array(steps-1).fill(tmpDefaultPitches))
                        const endSlice = updatedBoardData.slice(index,updatedBoardData.length-steps)
                        
                        const updatedBoardData_ = startSlice.concat(middleSlice).concat(endSlice).concat(restboard)
                        console.log(updatedBoardData_)
                        return updatedBoardData_
    
                    })

                    setactiveNote(index)
                    setPointer(pointer =>{
                        const followUpPointer = index + steps
                        if(followUpPointer % measure8Meter == 0 ){
                        return index + steps+1}
                        else{
                            return index + steps
                        }
                    })

                    
                }

                else{

                    
                    const activeItem = calculateSteps( measure8[index].duration)

                setMeasure8(measure8 =>{
                    
                    
                    
                    
                    const updatedBoardData = measure8.slice(0,measure8Meter)
                    const restboard = measure8.slice(measure8Meter,measure8.length)
                    const steps_ = calculateSteps(updatedBoardData[index].duration) 
                    const startSlice = updatedBoardData.slice(0,index+steps_)
                    const  tmpDefaultPitches = defaultpitchesoccupied
                    const middleSlice = [item].concat(new Array(steps-1).fill(tmpDefaultPitches))
                    const endSlice = updatedBoardData.slice(index+steps_,updatedBoardData.length-steps)
                    
                    
                    const updatedBoardData_ = startSlice.concat(middleSlice).concat(endSlice).concat(restboard)
                    return updatedBoardData_

                })
                setactiveNote(index+activeItem)
                setPointer(pointer =>{
                    const followUpPointer = index+activeItem + steps
                    if(followUpPointer % measure8Meter == 0 ){
                    return index + steps+1}
                    else{
                        return index + steps
                    }
                })
                
                
            }


        }


        
                
            }
            
            

        }

        const switchLeft = ( measureNumber) =>{
            if (meterIndex1 == 0){
                setMeterIndex1(meterArray.length-1)
                setMetersrc1(meterArray[meterIndex1])
                console.log(meterIndex1)
                console.log(meterArray[meterIndex1])
                setMeasure1(defaultPitchesArray_(meterArray[meterIndex1].numberofPlaces))
                setMeasure2(defaultPitchesArray_(meterArray[meterIndex1].numberofPlaces))
                setMeasure3(defaultPitchesArray_(meterArray[meterIndex1].numberofPlaces))
                setMeasure4(defaultPitchesArray_(meterArray[meterIndex1].numberofPlaces))
                setMeasure5(defaultPitchesArray_(meterArray[meterIndex1].numberofPlaces))
                setMeasure6(defaultPitchesArray_(meterArray[meterIndex1].numberofPlaces))
                setMeasure7(defaultPitchesArray_(meterArray[meterIndex1].numberofPlaces))
                setMeasure8(defaultPitchesArray_(meterArray[meterIndex1].numberofPlaces))
                console.log(measure1)
                console.log(measure2)
                
                setactiveMeasure(measureNumber)
                setactiveNote(0)
                setPointer(1)
                setmeasure1Meter(meterArray[meterIndex1].numberofPlaces)
                setmeasure2Meter(meterArray[meterIndex1].numberofPlaces)
                setmeasure3Meter(meterArray[meterIndex1].numberofPlaces)
                setmeasure4Meter(meterArray[meterIndex1].numberofPlaces)
                setmeasure5Meter(meterArray[meterIndex1].numberofPlaces)
                setmeasure6Meter(meterArray[meterIndex1].numberofPlaces)
                setmeasure7Meter(meterArray[meterIndex1].numberofPlaces)
                setmeasure8Meter(meterArray[meterIndex1].numberofPlaces)
                return
            }

            
            setMeterIndex1((meterIndex1-1)%3)
            setMetersrc1(meterArray[meterIndex1])
            console.log(meterIndex1)
            console.log(meterArray[meterIndex1])
            setMeasure1(defaultPitchesArray_(meterArray[meterIndex1].numberofPlaces))
            setMeasure2(defaultPitchesArray_(meterArray[meterIndex1].numberofPlaces))
            setMeasure3(defaultPitchesArray_(meterArray[meterIndex1].numberofPlaces))
            setMeasure4(defaultPitchesArray_(meterArray[meterIndex1].numberofPlaces))
            setMeasure5(defaultPitchesArray_(meterArray[meterIndex1].numberofPlaces))
            setMeasure6(defaultPitchesArray_(meterArray[meterIndex1].numberofPlaces))
            setMeasure7(defaultPitchesArray_(meterArray[meterIndex1].numberofPlaces))
            setMeasure8(defaultPitchesArray_(meterArray[meterIndex1].numberofPlaces))
            console.log(measure1)
            console.log(measure2)
            setactiveMeasure(measureNumber)
            setactiveNote(0)
            setPointer(1)
            setmeasure1Meter(meterArray[meterIndex1].numberofPlaces)
            setmeasure2Meter(meterArray[meterIndex1].numberofPlaces)
            setmeasure3Meter(meterArray[meterIndex1].numberofPlaces)
            setmeasure4Meter(meterArray[meterIndex1].numberofPlaces)
            setmeasure5Meter(meterArray[meterIndex1].numberofPlaces)
            setmeasure6Meter(meterArray[meterIndex1].numberofPlaces)
            setmeasure7Meter(meterArray[meterIndex1].numberofPlaces)
            setmeasure8Meter(meterArray[meterIndex1].numberofPlaces)

        }

        const switchRight = (measureNumber) =>{
            setMeterIndex1((meterIndex1+1)%3)
            console.log(meterIndex1)
            console.log(meterArray[meterIndex1])
            setMetersrc1(meterArray[meterIndex1])
            setMeasure1(defaultPitchesArray_(meterArray[meterIndex1].numberofPlaces))
            setMeasure2(defaultPitchesArray_(meterArray[meterIndex1].numberofPlaces))
            setMeasure3(defaultPitchesArray_(meterArray[meterIndex1].numberofPlaces))
            setMeasure4(defaultPitchesArray_(meterArray[meterIndex1].numberofPlaces))
            setMeasure5(defaultPitchesArray_(meterArray[meterIndex1].numberofPlaces))
            setMeasure6(defaultPitchesArray_(meterArray[meterIndex1].numberofPlaces))
            setMeasure7(defaultPitchesArray_(meterArray[meterIndex1].numberofPlaces))
            setMeasure8(defaultPitchesArray_(meterArray[meterIndex1].numberofPlaces))
            console.log(measure1)
            console.log(measure2)
            setactiveMeasure(measureNumber)
            setactiveNote(0)
            setPointer(1)
            setmeasure1Meter(meterArray[meterIndex1].numberofPlaces)
            setmeasure2Meter(meterArray[meterIndex1].numberofPlaces)
            setmeasure3Meter(meterArray[meterIndex1].numberofPlaces)
            setmeasure4Meter(meterArray[meterIndex1].numberofPlaces)
            setmeasure5Meter(meterArray[meterIndex1].numberofPlaces)
            setmeasure6Meter(meterArray[meterIndex1].numberofPlaces)
            setmeasure7Meter(meterArray[meterIndex1].numberofPlaces)
            setmeasure8Meter(meterArray[meterIndex1].numberofPlaces)
                
        }

        const changeStateOfReplace = () => {
            setreplaceActivated(!replaceActivated)
            console.log(replaceActivated)

        }

        const changeDuration = (duration) => {

                 setPanelDuration(duration)
            
        }

        const changeAccent = (accent) => {

            if(accent === "none")setAccent(0)
            if(accent === "sharp")setAccent(1)
            if(accent === "minor")setAccent(2)
            

        }
        const goToResult = () => {

            nav("/TestScoreBox")
            
       
   }
   const changeVolume1 = (func,vol) => {
    const el = document.getElementsByClassName(vol)
    
    func(parseInt(el[0].children[3].attributes['aria-valuenow'].nodeValue))
    

}






        

    

    return(
        <div>

            <div className='topColumnLeft' onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}>
        <div className='div-toptop' >
        <div className='chooseMeter-container'>
                    <button onClick={()=>switchLeft(0)}>Links</button>
                        <img
                        height="48px" 
                        width="47px"
                        src={meterscr1.src}
                        />
                    <button onClick={()=>switchRight(0)}>Rechts</button>
                    
                </div>
        <div className='div-top'   style={{overflowY:'scroll'}}>

           

            <div    className="row" >
           
                
                <div className='rowA' >
                <div className='sliderWidth'>
            <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
            <VolumeDownIcon
    fontSize="inherit"
    style={{ fontSize: "20px" }}
  />
        <Slider 
                    className='volume1'
                    onChange={() => changeVolume1(setvolumeMeasure1,'volume1') }
                    valueLabelDisplay="auto"
                    getAriaValueText={`${volumeMeasure1}`}
                    min={-12}
                    max={20}
                    step={4}
                    color="secondary"
                    aria-label="Temperature"
                    

                    
                     />
                     
                     
                      <VolumeUpIcon
    fontSize="inherit"
    style={{ fontSize: "20px" }}
  />
 
  </Stack>
  </div>
           
            <div    className="flex-container"  >
                <div className="flex-container">
                     
                {measure1.slice(0,17).map( (note ,idx) => {
                    return <Pitches measure={0}  url={note} activated={activeNote}  index={idx} item={note}  board={measure1} />
                })} </div>

               
                    
            </div>
            

</div>
            
            
            

        <div className='rowA'>

        <div className='sliderWidth'>
            <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
            <VolumeDownIcon
    fontSize="inherit"
    style={{ fontSize: "20px" }}
  />
        <Slider 
                    className='volume2'
                    onChange={() => changeVolume1(setvolumeMeasure2,'volume2') }
                    valueLabelDisplay="auto"
                    getAriaValueText={`${volumeMeasure2}`}
                    min={-12}
                    max={20}
                    step={4}
                    color="secondary"
                    aria-label="Temperature"
                    

                    
                     />
                     
                     
                      <VolumeUpIcon
    fontSize="inherit"
    style={{ fontSize: "20px" }}
  />
 
  </Stack>
  </div>
                    
            
            <div    className="flex-container"  >
                
                <div className="flex-container">
                     
                {measure2.slice(0,17).map( (note ,idx) => {
                    return <Pitches measure={1}  url={note} activated={activeNote}  index={idx} item={note} board={measure2}  />
                })} </div>

                
                    
            </div>
            
            </div>
            </div>

            <div    className="row" >
            <div className='rowA' id='measure3'>

                            <div className='sliderWidth'>
                            <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                            <VolumeDownIcon
                    fontSize="inherit"
                    style={{ fontSize: "20px" }}
                />
                        <Slider 
                                    className='volume3'
                                    onChange={() => changeVolume1(setvolumeMeasure3,'volume3') }
                                    valueLabelDisplay="auto"
                                    getAriaValueText={`${volumeMeasure3}`}
                                    min={-12}
                                    max={20}
                                    step={4}
                                    color="secondary"
                                    aria-label="Temperature"
                                    

                                    
                                    />
                                    
                                    
                                    <VolumeUpIcon
                    fontSize="inherit"
                    style={{ fontSize: "20px" }}
                />
                
                </Stack>
                </div>
                            
            <div   className="flex-container"  >
                
                 <div className="flex-container">
                     
                {measure3.slice(0,17).map( (note ,idx) => {
                    return <Pitches measure={2}  url={note} activated={activeNote}  index={idx} item={note} board={measure3} />
                })} </div>

                
                    
            </div>
            
        </div>        

        <div className='rowA' id='measure3'>

                    <div className='sliderWidth'>
                        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                        <VolumeDownIcon
                fontSize="inherit"
                style={{ fontSize: "20px" }}
            />
                    <Slider 
                                className='volume4'
                                onChange={() => changeVolume1(setvolumeMeasure4,'volume4') }
                                valueLabelDisplay="auto"
                                getAriaValueText={`${volumeMeasure4}`}
                                min={-12}
                                max={20}
                                step={4}
                                color="secondary"
                                aria-label="Temperature"
                                

                                
                                />
                                
                                
                                <VolumeUpIcon
                fontSize="inherit"
                style={{ fontSize: "20px" }}
            />
            
            </Stack>
            </div>
            
            <div   className="flex-container"  >
                
                <div className="flex-container">
                     
                {measure4.slice(0,17).map( (note ,idx) => {
                    return <Pitches measure={3}  url={note} activated={activeNote}  index={idx} item={note} board={measure4} />
                })} </div>

                
                    
            </div>
            
        </div>        
  
            </div>

            <div    className="row" >
            <div className='rowA' id='measure3'>

                        <div className='sliderWidth'>
                        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                        <VolumeDownIcon
                fontSize="inherit"
                style={{ fontSize: "20px" }}
            />
                    <Slider 
                                className='volume5'
                                onChange={() => changeVolume1(setvolumeMeasure5,'volume5') }
                                valueLabelDisplay="auto"
                                getAriaValueText={`${volumeMeasure5}`}
                                min={-12}
                                max={20}
                                step={4}
                                color="secondary"
                                aria-label="Temperature"
                                

                                
                                />
                                
                                
                                <VolumeUpIcon
                fontSize="inherit"
                style={{ fontSize: "20px" }}
            />
            
            </Stack>
            </div>
            
            <div className="flex-container"  >
                
                <div className="flex-container">
                     
                {measure5.slice(0,17).map( (note ,idx) => {
                    return <Pitches measure={4}  url={note} activated={activeNote}  index={idx} item={note} board={measure5} />
                })} </div>

               
                    
            </div>
            
        </div>        

        <div className='rowA' id='measure3'>

                    <div className='sliderWidth'>
                        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                        <VolumeDownIcon
                fontSize="inherit"
                style={{ fontSize: "20px" }}
            />
                    <Slider 
                                className='volume6'
                                onChange={() => changeVolume1(setvolumeMeasure6,'volume6') }
                                valueLabelDisplay="auto"
                                getAriaValueText={`${volumeMeasure6}`}
                                min={-12}
                                max={20}
                                step={4}
                                color="secondary"
                                aria-label="Temperature"
                                

                                
                                />
                                
                                
                                <VolumeUpIcon
                fontSize="inherit"
                style={{ fontSize: "20px" }}
            />
            
            </Stack>
            </div>
            <div    className="flex-container"  >
                
                
                    <div className="flex-container">
                     
                {measure6.slice(0,17).map( (note ,idx) => {
                    return <Pitches measure={5}  url={note} activated={activeNote}  index={idx} item={note} board={measure6} />
                })} </div>

                    
            </div>
            
        </div>
        
                
  
            </div>
            
            
            <div    className="row" >
            <div className='rowA' id='measure3'>

                            <div className='sliderWidth'>
                            <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                            <VolumeDownIcon
                    fontSize="inherit"
                    style={{ fontSize: "20px" }}
                />
                        <Slider 
                                    className='volume7'
                                    onChange={() => changeVolume1(setvolumeMeasure7,'volume7') }
                                    valueLabelDisplay="auto"
                                    getAriaValueText={`${volumeMeasure7}`}
                                    min={-12}
                                    max={20}
                                    step={4}
                                    color="secondary"
                                    aria-label="Temperature"
                                    

                                    
                                    />
                                    
                                    
                                    <VolumeUpIcon
                    fontSize="inherit"
                    style={{ fontSize: "20px" }}
                />
                
                </Stack>
                </div>
            
            <div className="flex-container"  >
                
                
                    <div className="flex-container">
                     
                {measure7.slice(0,17).map( (note ,idx) => {
                    return <Pitches measure={6}  url={note} activated={activeNote}  index={idx} item={note} board={measure7} />
                })} </div>

               
                    
            </div>
            
        </div>        

        <div className='rowA' id='measure3'>

                    <div className='sliderWidth'>
                        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                        <VolumeDownIcon
                fontSize="inherit"
                style={{ fontSize: "20px" }}
            />
                    <Slider 
                                className='volume8'
                                onChange={() => changeVolume1(setvolumeMeasure8,'volume8') }
                                valueLabelDisplay="auto"
                                getAriaValueText={`${volumeMeasure8}`}
                                min={-12}
                                max={20}
                                step={4}
                                color="secondary"
                                aria-label="Temperature"
                                

                                
                                />
                                
                                
                                <VolumeUpIcon
                fontSize="inherit"
                style={{ fontSize: "20px" }}
            />
            
            </Stack>
            </div>
            
            <div    className="flex-container"  >
                
               
                    <div className="flex-container">
                     
                {measure8.slice(0,17).map( (note ,idx) => {
                    return <Pitches measure={7}  url={note} activated={activeNote}  index={idx} item={note} board={measure8} />
                })} </div>

                
                    
            </div>
            
        </div>
        
                
  
            </div>
            </div>


            
            <div className='Pitches' >
                <div className='column1'>
                
               
                    {panelArray.slice(0,9).map( (note ,idx) => {
                         
                        return (
                        
                 <PitchesDraggable url={note}  index={idx} item={note} addPitch={addPitch} replacePitch={replaceItem} />
                 
                
                 
                 
                 )
                        
                    })}
                   
                    <div className='column1'>
                    {panelArray.slice(9,18).map( (note ,idx) => {
                        return <PitchesDraggable url={note}  index={idx} item={note} addPitch={addPitch} replacePitch={replaceItem} />
                    })}
                    </div>
                    
                    </div>
                    <div className='column3'>
                    <button onClick={() => {changeDuration("whole")}}> Whole Notes </button>
                    <button onClick={() => {changeDuration("half")}} > Half Notes </button>
                    <button onClick={() => {changeDuration("quarter")}}> Quarter Notes </button>
                    <button onClick={() => {changeDuration("eighth")}} > Eighth Notes </button>
                    <button onClick={() => {changeDuration("sixteenth")}}> Sixteenth Notes </button>
                    <div>
                        <button onClick={() => {changeAccent("sharp")}}> Sharp </button>
                        <button onClick={() => {changeAccent("minor")}}> Minor </button>
                        <button onClick={() => {changeAccent("none")}}> None </button>
                    </div>

                    </div>
                    <div className='column2'>
                    <button onClick={deleteItem}> Delete </button>
                    <button onClick={changeStateOfReplace} style={{border: replaceActivated? '2px solid blue':'' }}> Replace </button>
                    
                    </div>
                    <div>
                    <SubmitComposition composition={[measure1,measure2,measure3,measure4,measure5,
                        measure6,measure7,measure8]} meter={meterArray[meterIndex1]} />
                </div>
                <button onClick={goToResult}> Result </button>
                <button onClick={playwholeComposition}> Play the Melody </button>
                
    </div>
    
            </div>
            </div>


            <div className='topColumnRight'>
            
                
            </div>
                            
            </div>

    );


}

export default Compose;