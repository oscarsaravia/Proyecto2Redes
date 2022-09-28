import React from 'react';
import Fab from '@mui/material/Fab';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import './message.scss';
import { ChatMockup } from './MockupChat';
import TextField from '@mui/material/TextField';
import useSession from '../../hooks/useSession';
import { sendChatMessage } from '../../websockets/socket';

export const Message = ({ player }) => {
  const [showMessages, setShowMessages] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const { chat, room_id } = useSession().game
  
  const handleShowMessages = () => {
    console.log('show messages');
    setShowMessages(!showMessages);
  };

  const sendMessage = () => {
    console.log('send message', message);
    if (message && player?.username){
      sendChatMessage(player.username, room_id, message)
      setMessage('')
    }
  }

  const onChange = (e) => {
    setMessage(e.target.value);
  }

  return (
    <>
      {
        !showMessages && (
          <div tabIndex={0} className="message" onClick={handleShowMessages}>
            <Fab color="primary" aria-label="add" className='game-view__main-player__message-icon'>
              <SendIcon />
            </Fab>
          </div>
        )        
      }
      {
        showMessages && (
          <div className='message__container'>
            <Fab color="primary" aria-label="add" className='message__container__close-icon' onClick={handleShowMessages}>
              <CloseIcon />
            </Fab>
            {
              chat && chat.map((message, index) => {
                return (
                  <div key={index} className={`message__container__message ${player?.username === message.username && 'my-message'}`}>
                    <h4>{message.username}:</h4>
                    <p>{message.message}</p>
                  </div>
                )
              })
            }
            <div className="message__container__input">
              <TextField id="outlined-basic" className='message_container__input' value={message} onChange={onChange} label="Mensaje" variant="outlined" />
              <Fab color="primary" aria-label="add" className='send_icon' onClick={sendMessage}>
                <SendIcon />
              </Fab>
            </div>
          </div>
        )
      }
    </>
  )
}