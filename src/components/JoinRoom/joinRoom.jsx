import './joinRoom.css'

const JoinRoom = () => {
    return (
        <div className="join-room">
            <h1>Unirse a sala</h1>
            <input type="text" placeholder="Nombre de la sala" className="css-input-join" />
            <button className="myButton-join">Unirse a sala</button>
        </div>
    )
}

export default JoinRoom