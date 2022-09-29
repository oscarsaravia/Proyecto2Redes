import io from 'socket.io-client'

let socket
const initiateSocket = () => {
  //socket = io('http://localhost:5001')
  socket = io('https://guarded-harbor-53293.herokuapp.com/')
}
const getSocket = () => socket

const createRoom = (username) => {
  if (socket) socket.emit('create_room', username )
}

const joinRoom = (room, username) => {
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

const gameFinished = (winner, room_id) => {
  if (socket) socket.emit('finish_game', winner, room_id)
}

const sendChatMessage = (username, room_id, message) => {
  if (socket) socket.emit('send_message', username, room_id, message)
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
  gameFinished,
  sendChatMessage,
}
