import './joinRoom.css'
import { useNavigate, useLocation} from 'react-router-dom';
import { useState } from 'react';
import { joinRoom } from '../../websockets/socket';
const JoinRoom = () => {

    const navigate = useNavigate();
    const [room_id, setRoom_id] = useState('');
    const { username } = useLocation().state;
    const navigateMain = () => {
        joinRoom(username, room_id)
        navigate('/game', {
            state: {
                waiting: true,
                owner: false,
                username,
                room_id
            }
        });
    }

    const onChange = (e) => {
        setRoom_id(e.target.value)
    }

    return (
        <div className="join-room">
            <h1>Unirse a sala</h1>
            <input type="text" value={room_id} onChange={ onChange } placeholder="Nombre de la sala" className="css-input-join" />
            <button className="myButton-join" onClick={navigateMain}>Unirse a sala</button>
        </div>
    )
}

export default JoinRoom