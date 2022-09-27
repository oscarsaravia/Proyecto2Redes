import io from 'socket.io-client'

let socket
const initiateSocket = () => {
  socket = io('http://localhost:8080')
}
const getSocket = () => socket

const createRoom = (username) => {
  if (socket) socket.emit('create_room', username )
}

const joinRoom = (username, room) => {
  if (socket) socket.emit('join_room', room, username )
}

const disconnectSocket = () => {
  if (socket) socket.disconnect()
}

const startGame = (room_id) => {
  if (socket) socket.emit('start_game', room_id)
}

const nextPlayer = (card, room_id, username) => {
  if (socket) socket.emit('next_turn', card, room_id, username)
}

const farol = (telltale, accused, room_id) => {
  if (socket) socket.emit('farol', telltale, accused, room_id)
}

export {
  initiateSocket,
  getSocket,
  disconnectSocket,
  createRoom,
  joinRoom,
  startGame,
  nextPlayer,
  farol,
}
