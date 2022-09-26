import React from 'react';
import './Card.scss';

export const Card = ({ type, hide, handleClick }) => {

  const nextTurn = () => {
    if (handleClick) handleClick(type)
  }

  return (
    <div className={hide ? 'BACK' : type} onClick={nextTurn}>
    </div>
  )
}
