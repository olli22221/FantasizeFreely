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

    const [board, setBoard] = useState([
        
    ])

    const [board2, setBoard2] = useState([
        
    ])

    const [board3, setBoard3] = useState([
        
    ])

    const [board4, setBoard4] = useState([
        
    ])

    const [board5, setBoard5] = useState([null,null,null,null,null,null,
        null,null,null,null,null,null,null,null,null,null
        
    ])

    const [board6, setBoard6] = useState([
        
    ])

    const [board7, setBoard7] = useState([
        
    ])

    const [board8, setBoard8] = useState([
        
    ])
    
    const [hovering, setHover] = useRecoilState(hoverAtom);
    const dragging = useRecoilValue(dragAtom);
    useEffect(() => {
        

        if(board5.length == 5){
            setIsOpen(true)
        }

        else{
            setIsOpen(false)
        }
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
        (newItem, hoverIndex,appendWhere, target, func) => {
                       
                //if(target.length > 5) return
            
                if (appendWhere == "appendLeft"){

                    func(target => {
    
                        const updatedPets = [...target]
                        
                        
                        const left = updatedPets.slice(0,hoverIndex)
                        const right = updatedPets.slice(hoverIndex)
                        const added = left.concat(newItem)
                        
                      
                        return added.concat(right)
                    })
                }
    
                if (appendWhere == "appendRight"){
    
                    func(target => {
    
                        const updatedPets = [...target]
                        
                        const left = updatedPets.slice(0,hoverIndex+1)
                        const right = updatedPets.slice(hoverIndex+1)
                        const added = left.concat(newItem)
                      
                        return added.concat(right)
                    })
                }

                
            

        }

        const deleteItem = 
        (index,target,func) => {
                       
           
            func(target => {

                const updatedPets = [...target]
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

                    const updatedPets = [...board3,item]
                                   
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

        const [,drop5] = useDrop({
            accept: ["Pitches"],
            drop(item){
                
                setBoard5(board5 => {
                    console.log(item)

                    const updatedPets = [...board5,item]
                                   
                    return updatedPets
                })
    
        }})

        const [,drop6] = useDrop({
            accept: ["Pitches"],
            drop(item){
                
                setBoard6(board6 => {

                    const updatedPets = [item]
                                   
                    return updatedPets
                })
    
        }})

        const [,drop7] = useDrop({
            accept: ["Pitches"],
            drop(item){
                
                setBoard7(board7 => {

                    const updatedPets = [item]
                                   
                    return updatedPets
                })
    
        }})

        const [,drop8] = useDrop({
            accept: ["Pitches"],
            drop(item){
                
                setBoard8(board8 => {

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
                    return <Pitches  url={note} deleteItem={deleteItem} moveItem={moveItem} index={idx} item={note} addItem={addItem} board={board} func={setBoard}/>
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
                    return <Pitches  url={note} deleteItem={deleteItem} moveItem={moveItem} index={idx} item={note} addItem={addItem} board={board2} func={setBoard2} />
                })} </div>

                :<div  className="flex-container" >
                    <ScoreBox notes={board2} timeSign="4/4" violin={false}/>
                    </div>}
                    
            </div>
            }
            </div>
            <div className='rowA0' id='measure3'>
            {board3.length === 0
            ? <div ref={drop3}  className="flex-container"  ><ScoreBox notes={board3} timeSign="4/4" violin={false}/></div>
            :
            <div onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}   className="flex-container"  >
                
                {dragging || hovering
                   ? <div className="flex-container">
                     
                {board3.map( (note ,idx) => {
                    return <Pitches  url={note} deleteItem={deleteItem} moveItem={moveItem} index={idx} item={note} addItem={addItem} board={board3} func={setBoard3}/>
                })} </div>

                :<div  className="flex-container" >
                    <ScoreBox notes={board3} timeSign="4/4" violin={false}/>
                    </div>}
                    
            </div>
            }
        </div>
        <div className='rowA1' id='measure4'>
            {board4.length === 0
            ? <div ref={drop4}  className="flex-container"  ><ScoreBox notes={board4} timeSign="4/4" violin={false}/></div>
            :
            <div onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}   className="flex-container"  >
                
                {dragging || hovering
                   ? <div className="flex-container">
                     
                {board4.map( (note ,idx) => {
                    return <Pitches  url={note} deleteItem={deleteItem} moveItem={moveItem} index={idx} item={note} addItem={addItem} board={board4} func={setBoard4}/>
                })} </div>

                :<div  className="flex-container" >
                    <ScoreBox notes={board4} timeSign="4/4" violin={false} />
                    </div>}
                    
            </div>
            }
                
                </div>
            

            </div>

            <div    className="row">
                
                <div className='rowA'>
            {board5.length === 0
            ? <div ref={drop5}  className="flex-container"  ><ScoreBox notes={board5} timeSign="4/4" violin={false}/></div>
            :
            
            
            <div onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(true)}}   className="flex-container"  >
                
                {dragging || hovering
                   ? <div  className="flex-container">
                     
                {board5.map( (note ,idx) => {
                    return <Pitches onClick={changeColor} style={{border: isActive? '1px solid red' : ''}}  url={note} deleteItem={deleteItem} moveItem={moveItem} index={idx} item={note} addItem={addItem} board={board5} func={setBoard5}/>
                })} 
                
               

                

                
                </div>
                :<div  className="flex-container" >
                    <ScoreBox notes={board5} timeSign="4/4" violin={true} />
                    </div>}
                    
            </div>
            }
            

</div>
            
            
            

        <div className='rowA'>
            {board6.length === 0
            ? <div ref={drop6}  className="flex-container"  ><ScoreBox notes={board6} timeSign="4/4" violin={false}/></div>
            :
            <div onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}   className="flex-container"  >
                
                {dragging || hovering
                   ? <div className="flex-container">
                     
                {board6.map( (note ,idx) => {
                    return <Pitches  url={note} deleteItem={deleteItem} moveItem={moveItem} index={idx} item={note} addItem={addItem} board={board6} func={setBoard6}/>
                })} </div>

                :<div  className="flex-container" >
                    <ScoreBox notes={board6} timeSign="4/4" violin={false}/>
                    </div>}
                    
            </div>
            }
            </div>
            <div className='rowA0' id='measure3'>
            {board7.length === 0
            ? <div ref={drop7}  className="flex-container"  ><ScoreBox notes={board7} timeSign="4/4" violin={false}/></div>
            :
            <div onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}   className="flex-container"  >
                
                {dragging || hovering
                   ? <div className="flex-container">
                     
                {board7.map( (note ,idx) => {
                    return <Pitches  url={note} deleteItem={deleteItem} moveItem={moveItem} index={idx} item={note} addItem={addItem} board={board7} func={setBoard7}/>
                })} </div>

                :<div  className="flex-container" >
                    <ScoreBox notes={board7} timeSign="4/4" violin={false}/>
                    </div>}
                    
            </div>
            }
        </div>
        <div className='rowA1' id='measure4'>
            {board8.length === 0
            ? <div ref={drop8}  className="flex-container"  ><ScoreBox notes={board8} timeSign="4/4" violin={false}/></div>
            :
            <div onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}   className="flex-container"  >
                
                {dragging || hovering
                   ? <div className="flex-container">
                     
                {board8.map( (note ,idx) => {
                    return <Pitches  url={note} deleteItem={deleteItem} moveItem={moveItem} index={idx} item={note} addItem={addItem} board={board8} func={setBoard8}/>
                })} </div>

                :<div  className="flex-container" >
                    <ScoreBox notes={board8} timeSign="4/4" violin={false} />
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

    <Modal
        isOpen={modalIsOpen}
        
        style={customStyles}
        contentLabel="Example Modal"
      ></Modal>



            </div>

    );


}

export default Compose;