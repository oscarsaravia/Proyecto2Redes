import React, { useState } from 'react';
import './createRoom.scss'
import useSession from '../../hooks/useSession'
import { createRoom } from '../../websockets/socket'
import { useLocation, useNavigate } from 'react-router-dom'

const CreateRoom = () => {
    const [copied, setCopied] = useState(false)
    const session = useSession()
    const navigate = useNavigate()
    const { username } = useLocation().state
    const onClick = () => {
        createRoom(username)
    }
    const navigateMain = () => {
        navigate('/game', {
            state: {
              username: username,
              room_id: session.response?.body?.room_id,
              waiting: false,
            }
          });
    }
    const copy = () => {
        navigator.clipboard.writeText(session.response?.body?.room_id)
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        }, 1000);
    }

    return (
        <div className="create-room">
            <h1>Crear sala</h1>
            <input type="text" placeholder="Nombre de la sala" className="css-input-room" />
            <button className="myButton-room" onClick={onClick}>Crear sala</button>
            {
                session.response?.body?.room_id && (
                <>
                    <h2>La sala se ha creado con el id:</h2>
                    <div className='container'>
                        <h3>{session.response?.body?.room_id}</h3>
                        <button className="copy-btn" onClick={copy}>{copied ? 'COPIADO!' : 'COPIAR' }</button>
                    </div>
                    <button className="myButton-room" onClick={navigateMain}>START GAME!</button>
                </>
                )
            }
        </div>
    )
}

export default CreateRoom