import React from 'react';
import Fab from '@mui/material/Fab';
import SendIcon from '@mui/icons-material/Send';
import './message.scss';

export const Message = () => {
  return (
    <Fab color="primary" aria-label="add" className='game-view__main-player__message-icon'>
        <SendIcon />
    </Fab>
  )
}