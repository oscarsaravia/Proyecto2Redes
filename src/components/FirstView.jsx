import './MainView/App.css';
import { useNavigate} from 'react-router-dom';
import {useState} from 'react';

const FirstView = () => {
    const [valueRoom, setValueRoom] = useState(false);
    const [valueJoin, setValueJoin] = useState(false);
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const handleEvents = () => {
      if (valueRoom) {
        navigate('/create', {
          state: {
            username,
          }
        });
      }
      if (valueJoin) {
        navigate('/join',{
          state: {
            username,
          }
        });
      }
    }

    const onChange = (e) => {
      setUsername(e.target.value)
    }

    return(
    <div className="App">
        <h1>Bienvenido a Va de Farol!</h1>
        <h2>Nombre</h2>
        <input onChange={onChange} type="text" placeholder="Nombre de usuario" className="css-input" />
        <div className="control-group">
          <label className="control control-checkbox">
            Crear sala
            <input type="checkbox" onChange={(e) =>setValueRoom(e.target.checked)} />
            <div className="control_indicator"></div>
          </label>
          <label className="control control-checkbox">
            Unirse a sala
            <input type="checkbox" onChange={(e) =>setValueJoin(e.target.checked)}/>
            <div className="control_indicator"></div>
          </label>
        </div>

        <button className="myButton" onClick={handleEvents}>Comenzar juego</button>
      </div>)
}

export default FirstView