import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import {useState} from 'react';
import CreateRoom from '../CreateRoom/createRoom.jsx';
import JoinRoom from '../JoinRoom/joinRoom.jsx';
import FirstView from '../FirstView.jsx';

import './App.css'

function App() {
  return (

    <>

      <Router>
        <Routes>
          <Route index element={<FirstView />} />
          <Route path="/" element={<FirstView/>}></Route>
          <Route path='/create' element={<CreateRoom />}/>
          <Route path='/join' element={<JoinRoom />}/>
        </Routes>
      </Router>


    </>

  )
}

export default App
