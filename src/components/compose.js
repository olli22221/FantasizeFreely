import React, { useState,useCallback,useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import Pitches from './Pitches';
import Score from './score';
import './../App.css';
import {useDrop} from 'react-dnd';
import DropWrapper from './DropWrapper';
import PitchesDraggable from './PitchesDraggable';
import {dragging as dragAtom, hovering as hoverAtom} from '../redux/store'
import { useRecoilValue,useRecoilState } from 'recoil';
import {pitches} from '../data/composePanelData'
import ScoreBox from './ScoreBox';




function Compose() {

    const [board, setBoard] = useState([
        
    ])

    const [board2, setBoard2] = useState([
        
    ])

    const [board3, setBoard3] = useState([
        
    ])

    const [board4, setBoard4] = useState([
        
    ])
    
    const [hovering, setHover] = useRecoilState(hoverAtom);
    const dragging = useRecoilValue(dragAtom);
    useEffect(() => {
        

      
        console.log(dragging)
        console.log(hovering)

        
        
        
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

    const moveItem = 
        (dragIndex, hoverIndex , appendWhere) => {
            const dragItem = board[dragIndex]
            if (appendWhere == "appendLeft"){

                setBoard(board => {

                    const updatedPets = [...board]
                    updatedPets.splice(dragIndex,1)
                    
                    const left = updatedPets.slice(0,hoverIndex)
                    const right = updatedPets.slice(hoverIndex)
                    const added = left.concat(dragItem)
                    
                  
                    return added.concat(right)
                })
            }

            if (appendWhere == "appendRight"){

                setBoard(board => {

                    const updatedPets = [...board]
                    updatedPets.splice(dragIndex,1)
                    const left = updatedPets.slice(0,hoverIndex+1)
                    const right = updatedPets.slice(hoverIndex+1)
                    const added = left.concat(dragItem)
                  
                    return added.concat(right)
                })
            }
            // Swap places of dragItem and hoverItem in the pets array

        }

        const addItem = 
        (newItem, hoverIndex,appendWhere, target) => {
                       
                if(target.length > 5) return
            
                if (appendWhere == "appendLeft"){

                    setBoard(board => {
    
                        const updatedPets = [...board]
                        
                        
                        const left = updatedPets.slice(0,hoverIndex)
                        const right = updatedPets.slice(hoverIndex)
                        const added = left.concat(newItem)
                        
                      
                        return added.concat(right)
                    })
                }
    
                if (appendWhere == "appendRight"){
    
                    setBoard(board => {
    
                        const updatedPets = [...board]
                        
                        const left = updatedPets.slice(0,hoverIndex+1)
                        const right = updatedPets.slice(hoverIndex+1)
                        const added = left.concat(newItem)
                      
                        return added.concat(right)
                    })
                }

                
            

        }

        const deleteItem = 
        (index) => {
                       
           
            setBoard(board => {

                const updatedPets = [...board]
                updatedPets.splice(index,1)
              
                return updatedPets
            })

        }

        const [,drop] = useDrop({
            accept: ["Pitches"],
            drop(item){
                
                setBoard(board => {

                    const updatedPets = [item]
                                   
                    return updatedPets
                })
    
        }})

        const [,drop2] = useDrop({
            accept: ["Pitches"],
            drop(item){
                
                setBoard2(board2 => {

                    const updatedPets = [item]
                                   
                    return updatedPets
                })
    
        }})

        const [,drop3] = useDrop({
            accept: ["Pitches"],
            drop(item){
                
                setBoard3(board3 => {

                    const updatedPets = [item]
                                   
                    return updatedPets
                })
    
        }})

        const [,drop4] = useDrop({
            accept: ["Pitches"],
            drop(item){
                
                setBoard4(board4 => {

                    const updatedPets = [item]
                                   
                    return updatedPets
                })
    
        }})

        

    

    return(
        <div className='div-top'>

           

            <div    className="row">
                <div className='rowA'>
            {board.length === 0
            ? <div ref={drop}  className="flex-container"  ><ScoreBox notes={board} timeSign="4/4" violin={true}/></div>
            :
            <div onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}   className="flex-container"  >
                
                {dragging || hovering
                   ? <div className="flex-container">
                     
                {board.map( (note ,idx) => {
                    return <Pitches  url={note} deleteItem={deleteItem} moveItem={moveItem} index={idx} item={note} addItem={addItem} board={board}/>
                })} </div>

                :<div  className="flex-container" >
                    <ScoreBox notes={board} timeSign="4/4" violin={true} />
                    </div>}
                    
            </div>
            }

</div>
            
            
            

        <div className='rowA'>
            {board2.length === 0
            ? <div ref={drop2}  className="flex-container"  ><ScoreBox notes={board2} timeSign="4/4" violin={false}/></div>
            :
            <div onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}   className="flex-container"  >
                
                {dragging || hovering
                   ? <div className="flex-container">
                     
                {board2.map( (note ,idx) => {
                    return <Pitches  url={note} deleteItem={deleteItem} moveItem={moveItem} index={idx} item={note} addItem={addItem} />
                })} </div>

                :<div  className="flex-container" >
                    <ScoreBox notes={board2} timeSign="4/4" violin={false}/>
                    </div>}
                    
            </div>
            }
            </div>
            <div className='rowA'>
            {board3.length === 0
            ? <div ref={drop3}  className="flex-container"  ><ScoreBox notes={board3} timeSign="4/4" violin={false}/></div>
            :
            <div onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}   className="flex-container"  >
                
                {dragging || hovering
                   ? <div className="flex-container">
                     
                {board3.map( (note ,idx) => {
                    return <Pitches  url={note} deleteItem={deleteItem} moveItem={moveItem} index={idx} item={note} addItem={addItem} />
                })} </div>

                :<div  className="flex-container" >
                    <ScoreBox notes={board3} timeSign="4/4" violin={false}/>
                    </div>}
                    
            </div>
            }
        </div>
        <div className='rowA'>
            {board4.length === 0
            ? <div ref={drop4}  className="flex-container"  ><ScoreBox notes={board4} timeSign="4/4" violin={false}/></div>
            :
            <div onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}   className="flex-container"  >
                
                {dragging || hovering
                   ? <div className="flex-container">
                     
                {board4.map( (note ,idx) => {
                    return <Pitches  url={note} deleteItem={deleteItem} moveItem={moveItem} index={idx} item={note} addItem={addItem} />
                })} </div>

                :<div  className="flex-container" >
                    <ScoreBox notes={board4} timeSign="4/4" violin={false} />
                    </div>}
                    
            </div>
            }
                
                </div>
            

            </div>
            


            <div className='Pitches' >
            
            {pitches.map( (note ,idx) => {
                return <PitchesDraggable url={note} moveItem={moveItem} index={idx} item={note} />
            })}
                
    </div>

            </div>

    );


}

export default Compose;