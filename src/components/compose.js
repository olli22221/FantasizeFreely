import React, { useState,useCallback,useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import Pitches from './Pitches';
import Score from './score';
import './../App.css';
import {useDrop} from 'react-dnd';
import DropWrapper from './DropWrapper';
import PitchesDraggable from './PitchesDraggable';
import {dragging as dragAtom, hovering as hoverAtom, board as boardAtom, pointer as pointerAtom,
meter as meterAtom } from '../redux/store'
import { useRecoilValue,useRecoilState } from 'recoil';
import {pitches,halfpitches,wholepitches,eightpitches,defaultpitches,defaultpitchesoccupied} from '../data/composePanelData'
import ScoreBox from './ScoreBox';
import Modal from 'react-modal';


function Compose() {

    const [isActive, setIsActive] = useState(false);

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

      

    const container = document.getElementsByClassName("rowA1")

    const [modalIsOpen, setIsOpen] = useState(false)

    

    const [board,setBoard] = useRecoilState(boardAtom);
    const [meter,setMeter] = useRecoilState(meterAtom);
    const [pointer,setPointer] = useRecoilState(pointerAtom);
    
    
    const [hovering, setHover] = useRecoilState(hoverAtom);
    const dragging = useRecoilValue(dragAtom);
    useEffect(() => {
        

        

        console.log(board)
        console.log(dragging)
        console.log(hovering)
        console.log(container[0].getBoundingClientRect())

        
        
        
    }, [dragging,hovering])


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
                    
            
                default:
                    break;
            }
        }

        const checkMatch = (index,steps) => {
            const measureNumber = ~~(index / 16)
            const endOfMeasure = (measureNumber * 16)+17
            const sliceOfBoard = board.slice(endOfMeasure-17,endOfMeasure)
            const sliceLen = sliceOfBoard.filter(piece => piece.occupied == false).length
            console.log(measureNumber)
            console.log(endOfMeasure)
            console.log(sliceOfBoard)
            console.log(sliceLen)
            if(steps <= sliceLen){
                return true
            }
            else {
                return false
            }

            

        }
        const addPitch = (item) => {

            const index = pointer
            const steps = calculateSteps(item.duration)
            const fit = checkMatch(index,steps)
            if(fit){
                setBoard(board =>{
                    
                    
                    const updatedPointer = pointer
                    
                    const updatedBoardData = [...board]
                    const startSlice = updatedBoardData.slice(0,index)
                    const  tmpDefaultPitches = defaultpitchesoccupied
                    const middleSlice = [item].concat(new Array(steps-1).fill(tmpDefaultPitches))
                    const endSlice = updatedBoardData.slice(index,board.length-steps)
                    console.log(startSlice)
                    console.log(middleSlice)
                    console.log(endSlice)
                    
                    const updatedBoardData_ = startSlice.concat(middleSlice).concat(endSlice)

                    return updatedBoardData_

                })
                setPointer(pointer =>{
                    return index + steps
                })
            }
            


        }




        

    

    return(
        <div className='div-top'>

           

            <div    className="row">
                
                <div className='rowA'>
           
            <div onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}   className="flex-container"  >
                
                {dragging || hovering
                   ? <div className="flex-container">
                     
                {board.slice(0,17).map( (note ,idx) => {
                    return <Pitches  url={note}  index={idx} item={note}  board={board} />
                })} </div>

                :<div  className="flex-container" >
                    <ScoreBox notes={board.slice(0,17)} timeSign="4/4" violin={true} />
                    </div>}
                    
            </div>
            

</div>
            
            
            

        <div className='rowA'>
            
            <div onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}   className="flex-container"  >
                
                {dragging || hovering
                   ? <div className="flex-container">
                     
                {board.slice(17,34).map( (note ,idx) => {
                    return <Pitches  url={note}  index={idx} item={note} board={board}  />
                })} </div>

                :<div  className="flex-container" >
                    <ScoreBox notes={board.slice(17,34)} timeSign="4/4" violin={false}/>
                    </div>}
                    
            </div>
            
            </div>
            <div className='rowA0' id='measure3'>
            
            <div onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}   className="flex-container"  >
                
                {dragging || hovering
                   ? <div className="flex-container">
                     
                {board.slice(34,51).map( (note ,idx) => {
                    return <Pitches  url={note}  index={idx} item={note} board={board} />
                })} </div>

                :<div  className="flex-container" >
                    <ScoreBox notes={board.slice(34,51)} timeSign="4/4" violin={false}/>
                    </div>}
                    
            </div>
            
        </div>
        <div className='rowA1' id='measure4'>
            
            <div onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}   className="flex-container"  >
                
                {dragging || hovering
                   ? <div className="flex-container">
                     
                {board.slice(51,68).map( (note ,idx) => {
                    return <Pitches  url={note}  index={idx} item={note} board={board}/>
                })} </div>

                :<div  className="flex-container" >
                    <ScoreBox notes={board.slice(51,68)} timeSign="4/4" violin={false} />
                    </div>}
                    
            </div>
            
                
                </div>
            

            </div>

            <div    className="row">
                
                <div className='rowA'>
            
            
            
            <div onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(true)}}   className="flex-container"  >
                
                {dragging || hovering
                   ? <div  className="flex-container">
                     
                {board.slice(68,85).map( (note ,idx) => {
                    return <Pitches onClick={() =>changeColor(idx)} style={{border: isActive? '1px solid red' : ''}}  url={note}  index={idx} item={note}  board={board}/>
                })} 
                
               

                

                
                </div>
                :<div  className="flex-container" >
                    <ScoreBox notes={board.slice(68,85)} timeSign="4/4" violin={true} />
                    </div>}
                    
            </div>
            
            

</div>
            
            
            

        <div className='rowA'>
            
            <div onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}   className="flex-container"  >
                
                {dragging || hovering
                   ? <div className="flex-container">
                     
                {board.slice(85,102).map( (note ,idx) => {
                    return <Pitches  url={note} index={idx} item={note} board={board} />
                })} </div>

                :<div  className="flex-container" >
                    <ScoreBox notes={board.slice(85,102)} timeSign="4/4" violin={false}/>
                    </div>}
                    
            </div>
            
            </div>
            <div className='rowA0' id='measure3'>
            
            <div onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}   className="flex-container"  >
                
                {dragging || hovering
                   ? <div className="flex-container">
                     
                {board.slice(102,119).map( (note ,idx) => {
                    return <Pitches  url={note}  index={idx} item={note}  board={board} />
                })} </div>

                :<div  className="flex-container" >
                    <ScoreBox notes={board.slice(102,119)} timeSign="4/4" violin={false}/>
                    </div>}
                    
            </div>
            
        </div>
        <div className='rowA1' id='measure4'>
           
            <div onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}   className="flex-container"  >
                
                {dragging || hovering
                   ? <div className="flex-container">
                     
                {board.slice(119,136).map( (note ,idx) => {
                    return <Pitches  url={note} index={idx} item={note}  board={board} />
                })} </div>

                :<div  className="flex-container" >
                    <ScoreBox notes={board.slice(119,136)} timeSign="4/4" violin={false} />
                    </div>}
                    
            </div>
            
                
                </div>
            

            </div>
            
            

            <div className='Pitches' >
            
            {eightpitches.concat(pitches).map( (note ,idx) => {
                return <PitchesDraggable url={note}  index={idx} item={note} target={board} addPitch={addPitch} />
            })}
                
    </div>




            </div>

    );


}

export default Compose;