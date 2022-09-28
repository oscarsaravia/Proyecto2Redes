import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlayerContext } from '../../Context/PlayerContext/PlayerContext';
import { PlayerInitialValue } from '../../Context/PlayerContext/PlayerInitialValue';
import useSession from '../../hooks/useSession';
import './Finish.scss';

export const Finish = () => {
  const { winner } = useSession().game;
  const { setGame } = useContext(PlayerContext);
  const navigate = useNavigate();

  const onClick = () => {
    setGame(PlayerInitialValue)
    navigate('/')
  }

  return (
    <div className='finish_container'>
      <h1>Felicidades! {winner} gano esta partida</h1>
      <button className="myButton" onClick={onClick}>Jugar de nuevo</button>
    </div>
  )
}
