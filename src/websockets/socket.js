import io from 'socket.io-client'

let socket
const initiateSocket = () => {
  socket = io('http://localhost:8080')
}
const getSocket = () => socket

const createRoom = (username) => {
  if (socket) socket.emit('create_room', { username })
}

const joinRoom = (username, room) => {
  if (socket) socket.emit('join_room', room, username )
}

const disconnectSocket = () => {
  if (socket) socket.disconnect()
}

export {
  initiateSocket,
  getSocket,
  disconnectSocket,
  createRoom,
  joinRoom,
}
