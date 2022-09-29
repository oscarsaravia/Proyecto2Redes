import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './instructions.scss'

export const Instructions = () => {
  const navigate = useNavigate();
  const [flag, setFlag] = useState(false);

  const changeFlag = () => {
    setFlag(!flag);
  }

  const handleBack = () => {
    navigate('/');
  }
  return (
    <>
      { flag && 
      <div className="main-container">
        <h1 className='title'>¿Como se juega?</h1>
        <ol className='list'>
          <li>Se reparten todas las cartas de una baraja española entre los jugadores.</li>
          <li>Se elige aleatoriamente la persona que iniciara la partida</li>
          <li>En pantalla se mostrara la carta que el jugador deberia de seleccionar</li>
          <li>El jugador tiene 2 opciones, elegir de su mazo de cartas la carta que se indica, o mentir y seleccionar otra que no es</li>
          <li>Una vez seleccionada la carta, el resto de jugadores puede intervenir e indicar si cree que el jugador que coloco la carta esta mintiendo</li>
          <li>Si el jugador estaba mintiendo, se agregaran todas las cartas a su mazo, de lo contrario el jugador que que lo acuso debera llevarse todas las cartas.</li>
          <li>El juego termina cuando uno de los jugadores se queda sin cartas, siendo este el ganador</li>
        </ol>
        <div className="buttons">
        <button className='back-btn' onClick={ changeFlag }>COMO UTILIZAR EL CLIENTE?</button>
        <button className='back-btn' onClick={ handleBack }>ENTENDIDO</button>
        </div>
      </div>
      }  
      { !flag && 
      <div className="main-container">
        <h1 className='title'>¿Como utilizar el cliente?</h1>
        <ol className='list'>
          <li>En la pantalla principal ingrese su nombre</li>
          <li>Marque la casilla correspondiente a lo que quiera realizar</li>
          <li>Si desea crear una sala, ingrese el nombre y comparta el ID con el resto de jugadores</li>
          <li>Si desea unirse a una sala, ingrese el ID de la sala en la pantalla de unirse a una sala</li>
          <li>Una vez todos esten listos, pida al host que inicie la partida</li>
          <li>Para acusar a alguien, utilice el boton situado en la parte inferior izquierda </li>
          <li>Para utilizar el chat, pulse el boton situado en la parte inferior derecha</li>
        </ol>
        <div className="buttons">
        <button className='back-btn' onClick={ changeFlag }>COMO JUGAR?</button>
        <button className='back-btn' onClick={ handleBack }>ENTENDIDO</button>
        </div>
      </div>
      }  
    </>
  )
}
