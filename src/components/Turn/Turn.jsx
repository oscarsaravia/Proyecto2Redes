import React from 'react'
import './Turn.scss'

export const Turn = ({ next_player, players }) => {
  return (
    <div className='turn-container'>
      <h2>Siguiente jugador: {next_player === 'owner' ? players[next_player].username : next_player}</h2>
    </div>
  )
}
