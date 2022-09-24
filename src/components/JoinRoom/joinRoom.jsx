import './joinRoom.css'
import { useNavigate, useLocation} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { joinRoom } from '../../websockets/socket';
import  useSession  from '../../hooks/useSession'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const JoinRoom = () => {

    const navigate = useNavigate();
    const [room_id, setRoom_id] = useState('');
    const { username } = useLocation().state;
    const session = useSession();
    const { response } = session.game;
    const fullRoom = true;

    useEffect(() => {
        if(response === 'room_full'){
            toast.error('Sala esta llena',{
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
            });
        }else if(response === 'joined_room'){

            navigate('/game', {
                state: {
                    waiting: true,
                    owner: false,
                    username,
                    room_id
                }
            });
        }
    }, [response]);

    const navigateMain = () => {
        joinRoom(username, room_id)
    }

    const onChange = (e) => {
        setRoom_id(e.target.value)
    }

    return (
        <div className="join-room">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                />
            {/* Same as */}
            <ToastContainer />
            <h1>Unirse a sala</h1>
            <input type="text" value={room_id} onChange={ onChange } placeholder="Nombre de la sala" className="css-input-join" />
            <button className="myButton-join" onClick={navigateMain}>Unirse a sala</button>
        </div>
    )
}

export default JoinRoom