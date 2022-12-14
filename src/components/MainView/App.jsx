import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import {useState} from 'react';
import CreateRoom from '../CreateRoom/createRoom.jsx';
import JoinRoom from '../JoinRoom/joinRoom.jsx';
import FirstView from '../FirstView.jsx';
import { Instructions } from '../Instructions/Instructions'
import { initiateSocket } from '../../websockets/socket'
import GameView from '../GameView/gameView.jsx';
import './App.css'
import { PlayerProvider } from '../../Context/PlayerContext/PlayerProvider.jsx';
import { Finish } from '../Finish';

function App() {
  initiateSocket()
  return (
    <>
      <PlayerProvider>
        <Router>
          <Routes>
            <Route index element={<FirstView />} />
            <Route path="/" element={<FirstView/>}></Route>
            <Route path='/create' element={<CreateRoom />}/>
            <Route path='/join' element={<JoinRoom />}/>
            <Route path='/game' element={<GameView />}/>
            <Route path='/finish' element={<Finish />}/>
            <Route path='/instructions' element={<Instructions />}/>
          </Routes>
        </Router>
      </PlayerProvider>
    </>

  )
}

export default App
