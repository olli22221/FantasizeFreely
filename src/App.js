import logo from './logo.svg';
import './App.css';
import Score from './components/score';
import React, { useRef, useEffect, useState, Component } from 'react'
import Composer from './components/composePanel';
import { useBeforeunload } from 'react-beforeunload';
import { useRecoilState, useRecoilValue,useResetRecoilState } from 'recoil'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { musicNotes as musicNotesAtom, notePointer as notePointerAtom, noteCount as noteCountAtom } from './redux/store'
import DragDrop from './components/fileDrop';
import SubmitFile from './components/fileSubmit';
import Main from './Main';
import CreativityTask from './CreativityTask';
import Compose from './components/compose';

import Result from './components/result';


function App() {
 
  const [musicNotes, setMusicNotes] = useRecoilState(musicNotesAtom);
  const [notePointer, setNotePointer] = useRecoilState(notePointerAtom);
  const [noteCount, setNoteCounter] = useRecoilState(noteCountAtom);


  
  
  

  
   
  return (
    
    <Router>

      <Routes>
      <Route exact path='/' element={<Main/>}/>
      <Route exact path='/CreativityTask' element={<CreativityTask/>}/>
      <Route exact path='/Compose' element={<Compose/>}/>
      <Route exact path='/Result' element={<Result/>}/>
      </Routes>

      </Router>
  



   
  );

  

  
  }
export default App;
