import React from 'react'
import './ActualCard.scss'

export const ActualCard = ({ next_card }) => {
  return (
    <div className='actual-card-container'>
      <h2>Carta a colocar: {next_card.slice(1)}</h2>
    </div>
  )
}
