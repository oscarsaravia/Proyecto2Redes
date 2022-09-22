import './createRoom.css'
import useSession from '../../hooks/useSession'
import { createRoom } from '../../websockets/socket'
import { useLocation } from 'react-router-dom'

const CreateRoom = () => {
    const session = useSession()
    const { username } = useLocation().state
    const onClick = () => {
        console.log('Hola', username)
        createRoom(username)
    }
    return (
        <div className="create-room">
            <h1>Crear sala</h1>
            <input type="text" placeholder="Nombre de la sala" className="css-input-room" />
            <button className="myButton-room" onClick={onClick}>Crear sala</button>
        </div>
    )
}

export default CreateRoom