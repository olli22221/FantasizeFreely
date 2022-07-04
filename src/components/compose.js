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




function Compose() {

    const [board, setBoard] = useState([
        {
            id: 3,
            index: 2,
            src:require('../media/pitches/Gclef_E1_1-4.png'),
        },
        {
        id: 1,
        index: 0,
        src:require('../media/pitches/Gclef_C1_1-4.png'),

    },
    {
        id: 2,
        index: 1,
        src:require('../media/pitches/Gclef_D1_1-4.png'),
        
    }
    ])
    
    const [hovering, setHover] = useRecoilState(hoverAtom);
    const dragging = useRecoilValue(dragAtom);
    let scorebox =<div>HelloWorld</div> ;
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
        (newItem, hoverIndex) => {
                       
           
            setBoard(board => {

                const updatedPets = [...board]
                const left = updatedPets.slice(0,hoverIndex)
                const right = updatedPets.slice(hoverIndex)
                const added = left.concat(newItem)
              
                return added.concat(right)
            })

        }

        

    

    return(
        <div>

           

            <div    className="row">
                
            <div onMouseEnter={()=>{setHover(true)}}   className="flex-container"  >
                
                {dragging || hovering
                   ? <div className="flex-container">
                     
                {board.map( (note ,idx) => {
                    return <Pitches  url={note} moveItem={moveItem} index={idx} item={note} addItem={addItem} />
                })} </div>

                :<div   >Test</div>}
                    
            </div>
            
            
            
            

            <div className="rowA" >
                
            
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