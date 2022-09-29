import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlayerContext } from '../../Context/PlayerContext/PlayerContext';
import { PlayerInitialValue } from '../../Context/PlayerContext/PlayerInitialValue';
import useSession from '../../hooks/useSession';
import './Finish.scss';

export const Finish = () => {
  const { winner } = useSession().game;

  return (
    <div className='finish_container'>
      <h1>Felicidades! {winner} gano esta partida</h1>
    </div>
  )
}
