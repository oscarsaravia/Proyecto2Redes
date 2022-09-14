import './createRoom.css'

const CreateRoom = () => {
    return (
        <div className="create-room">
            <h1>Crear sala</h1>
            <input type="text" placeholder="Nombre de la sala" className="css-input-room" />
            <button className="myButton-room">Crear sala</button>
        </div>
    )
}

export default CreateRoom