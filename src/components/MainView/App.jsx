import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className="App">
      <h1>Bienvenido a Va de Farol!</h1>
      <h2>Nombre</h2>
      <input type="text" placeholder="Nombre de usuario" className="css-input"/>
      <div class="control-group">
        <label class="control control-checkbox">
            Crear sala
                <input type="checkbox"/>
            <div class="control_indicator"></div>
        </label>
        <label class="control control-checkbox">
            Unirse a sala
                <input type="checkbox" />
            <div class="control_indicator"></div>
        </label>
    </div>

      <a href="#" className="myButton">Comenzar juego</a>
    </div>
  )
}

export default App
