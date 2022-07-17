import React, { useState,useCallback,useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import Pitches from './Pitches';
import Score from './score';
import './../App.css';
import {useDrop} from 'react-dnd';
import DropWrapper from './DropWrapper';
import PitchesDraggable from './PitchesDraggable';
import {activeMeasure as activeMeasureAtom,measure1 as measure1Atom,measure2 as measure2Atom,
    measure3 as measure3Atom,meter as meterAtom, dragging as dragAtom, 
    hovering as hoverAtom,activeNote as activeNoteAtom, pointer as pointerAtom, 
    replaceActivated as replaceActivatedAtom} from '../redux/store'
import { measure1Meter as measure1MeterAtom,measure2Meter as measure2MeterAtom,measure3Meter as measure3MeterAtom  } from '../redux/store';
import { useRecoilValue,useRecoilState } from 'recoil';
import {pitches,halfpitches,wholepitches,sixteenthpitches,eightpitches,defaultpitches,defaultpitchesoccupied, defaultPitchesArray_} from '../data/composePanelData'
import ScoreBox from './ScoreBox';
import Modal from 'react-modal';
import {fourQuarter,twoQuarter,sixEighth} from '../data/meterData'


function Compose() {

    const meterArray = [fourQuarter,twoQuarter,sixEighth]
    const [meterIndex,setMeterIndex] = useState(0) 
    const [meterscr, setMetersrc] = useState(fourQuarter);
    const [isActive, setIsActive] = useState(false);
    const [activeNote, setactiveNote] = useRecoilState(activeNoteAtom);
    const [meter, setMeter] = useRecoilState(meterAtom);
    const [measure1Meter, setmeasure1Meter] = useRecoilState(measure1MeterAtom);
    const [measure2Meter, setmeasure2Meter] = useRecoilState(measure2MeterAtom);
    const [measure3Meter, setmeasure3Meter] = useRecoilState(measure3MeterAtom);
    const [replaceActivated, setreplaceActivated] = useRecoilState(replaceActivatedAtom);
    

    const changeColor = () => {
        console.log("HelloWorld")
        setIsActive(true);
    }

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };

      


    const [modalIsOpen, setIsOpen] = useState(false)

    
    const [activeMeasure,setactiveMeasure] = useRecoilState(activeMeasureAtom);
    const [measure1,setMeasure1] = useRecoilState(measure1Atom);
    const [measure2,setMeasure2] = useRecoilState(measure2Atom);
    const [measure3,setMeasure3] = useRecoilState(measure3Atom);

    const [pointer,setPointer] = useRecoilState(pointerAtom);
    
    
    const [hovering, setHover] = useRecoilState(hoverAtom);
    const dragging = useRecoilValue(dragAtom);
    useEffect(() => {
       // setMeasure1(measure1)
  
        //setMeasure2(measure2)
        //setMeasure3(measure3)

    }, [activeNote])


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

        const replaceItem = () => {
            if (activeNote == 0) {
                return
                
            }
            if(activeMeasure == 0){

            const indexToReplace = activeNote
            const stepsToReplace = calculateSteps(measure1[indexToReplace].duration)
            const firstPart = measure1.slice(0, indexToReplace)

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
                const space = calculateSteps(tmpPart[boundaryIndexToEmptyPlaces].duration)
                const thirdPart = tmpPart.slice(0,boundaryIndexToEmptyPlaces+space)
                const endPart = tmpPart.slice(boundaryIndexToEmptyPlaces+space, tmpPart.length)
                const endPart_ = secondPart.concat(endPart)
                const resultingMeasure = firstPart.concat(thirdPart).concat(endPart_)
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
                const space = calculateSteps(tmpPart[boundaryIndexToEmptyPlaces].duration)
                const thirdPart = tmpPart.slice(0,boundaryIndexToEmptyPlaces+space)
                const endPart = tmpPart.slice(boundaryIndexToEmptyPlaces+space, tmpPart.length)
                const endPart_ = secondPart.concat(endPart)
                const resultingMeasure = firstPart.concat(thirdPart).concat(endPart_)
                setMeasure2(resultingMeasure)
                
                setactiveNote(newActivatedIndex)
                const stepsFornewActivated = calculateSteps(resultingMeasure[newActivatedIndex].duration)
                setPointer(newActivatedIndex + stepsFornewActivated)

                }
            

            if(activeMeasure == 2){}
        }
    
        const calculateSteps = (duration) => {

            switch (duration) {
                case "8d":
                    return 2
                case "16":
                    return 1
                case "q":
                    return 4
                case "h":
                    return 8
                case "w":
                    return 16
                case "n":
                    return 1                    
                    
            
                default:
                    break;
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
                console.log(fit)
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
                setactiveMeasure(2)
                setactiveNote(0)
                setPointer(1)
                
            }

            else{

            }



        }
                
            }
            else if (activeMeasure == 2) {

                const fit = checkMatch(index,steps,measure3)
            if(fit){


                if (activeNote % measure3Meter == 0) {
                    const index = pointer
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
            const currentMeasure_ =  [...measure1]
            const sliceLen = currentMeasure_.filter(piece => piece.occupied == false).length
            if(sliceLen > 0){
                return
            }
            const lastNoteofMeasure = calculateLastNoteIndex(currentMeasure_)
            console.log("lastNoteofMeasure")
            if (activeNote == lastNoteofMeasure) {
                setactiveMeasure(3)
                setactiveNote(1)
                setPointer(1)
                
            }
            else{

            }




        }
                
            }

            
            
            

        }

        const switchLeft = (func, measureNumber,func2) =>{
            if (meterIndex == 0){
                setMeterIndex(meterArray.length-1)
                setMetersrc(meterArray[meterIndex])
                func(defaultPitchesArray_(meterArray[meterIndex].numberofPlaces))
                setactiveMeasure(measureNumber)
                setactiveNote(0)
                setPointer(1)
                func2(meterArray[meterIndex].numberofPlaces)
                return
            }
            
            setMeterIndex((meterIndex-1)%3)
            setMetersrc(meterArray[meterIndex])
            func(defaultPitchesArray_(meterArray[meterIndex].numberofPlaces))
            setactiveMeasure(measureNumber)
            setactiveNote(0)
            setPointer(1)
            func2(meterArray[meterIndex].numberofPlaces)

        }

        const switchRight = (func,measureNumber,func2) =>{
            setMeterIndex((meterIndex+1)%3)
            setMetersrc(meterArray[meterIndex])
            func(defaultPitchesArray_(meterArray[meterIndex].numberofPlaces))
            console.log(measure1)
            setactiveMeasure(measureNumber)
            setactiveNote(0)
            setPointer(1)
            func2(meterArray[meterIndex].numberofPlaces)
                
        }

        const changeStateOfReplace = () => {
            setreplaceActivated(!replaceActivated)
            console.log(replaceActivated)

        }



        

    

    return(
        <div className='div-top'>

           

            <div    className="row">
                
                <div className='rowA'>
                
                <div className='chooseMeter-container'>
                <button onClick={()=>switchLeft(setMeasure1,0,setmeasure1Meter)}>Links</button>
                    <img
                    height="48px" 
                    width="47px"
                    src={meterscr.src}
                    />
                    <button onClick={()=>switchRight(setMeasure1,0,setmeasure1Meter)}>Rechts</button>
                    
                </div>
           
            <div onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}   className="flex-container"  >
                
                {dragging || hovering
                   ? <div className="flex-container">
                     
                {measure1.slice(0,17).map( (note ,idx) => {
                    return <Pitches measure={0}  url={note} activated={activeNote}  index={idx} item={note}  board={measure1} />
                })} </div>

                :<div  className="flex-container" >
                    <ScoreBox notes={measure1.slice(0,17)} timeSign="6/8" violin={true} />
                    </div>}
                    
            </div>
            

</div>
            
            
            

        <div className='rowA'>
            
            <div onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}   className="flex-container"  >
                
                {dragging || hovering
                   ? <div className="flex-container">
                     
                {measure2.slice(0,17).map( (note ,idx) => {
                    return <Pitches measure={1}  url={note} activated={activeNote}  index={idx} item={note} board={measure2}  />
                })} </div>

                :<div  className="flex-container" >
                    <ScoreBox notes={measure2.slice(17,34)} timeSign="4/4" violin={false}/>
                    </div>}
                    
            </div>
            
            </div>
            <div className='rowA0' id='measure3'>
            
            <div onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}   className="flex-container"  >
                
                {dragging || hovering
                   ? <div className="flex-container">
                     
                {measure3.slice(0,17).map( (note ,idx) => {
                    return <Pitches measure={2}  url={note} activated={activeNote}  index={idx} item={note} board={measure3} />
                })} </div>

                :<div  className="flex-container" >
                    <ScoreBox notes={measure3.slice(34,51)} timeSign="4/4" violin={false}/>
                    </div>}
                    
            </div>
            
        </div>
        
            
            

            <div className='Pitches' onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)} } >
            
            {sixteenthpitches.concat(eightpitches,pitches).map( (note ,idx) => {
                return <PitchesDraggable url={note}  index={idx} item={note} addPitch={addPitch} replacePitch={replaceItem} />
            })}
                
    </div>



    




            </div>
            <div>
        
    
            <button onClick={deleteItem}> Delete </button>
            <button onClick={changeStateOfReplace}> Replace </button></div>


            </div>

    );


}

export default Compose;