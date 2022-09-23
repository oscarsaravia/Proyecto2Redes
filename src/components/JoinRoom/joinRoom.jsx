import './joinRoom.css'
import { useNavigate} from 'react-router-dom';
const JoinRoom = () => {
    const navigate = useNavigate();
    const navigateMain = () => {
        navigate('/game', {
            state: {
                waiting: true,
            }
        });
    }

    return (
        <div className="join-room">
            <h1>Unirse a sala</h1>
            <input type="text" placeholder="Nombre de la sala" className="css-input-join" />
            <button className="myButton-join" onClick={navigateMain}>Unirse a sala</button>
        </div>
    )
}

export default JoinRoom