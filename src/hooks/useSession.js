import { useState, useEffect } from 'react'
import { getSocket } from '../websockets/socket'

const useSession = () => {
  const socket = getSocket()
  const [game, setGame] = useState({
    players: [],
    room_id: '',
    winner: '',
    next_player: '',
    last_player: '',
    telltale: '',
    accused: '',
    answer: '',
    owner: '',
  })

  useEffect(() => {
    if (socket) {
      socket.on('room_created', (response) => {
        // console.log(response)
        setGame((game) => {
          return {
            ...game,
            room_id: response.body.room_id,
          }
        })
      })
      socket.on('joined_room', (res) => {
        const { room_id, owner, players } = res.body
        setGame((game) => {
          return {
            ...game,
            owner,
            room_id,
            players,
          }
        })
      })
      socket.on('game_started', (res) => {
        const { players } = res.body
        setGame((game) => {
          return {
            ...game,
            players,
          }
        })
      })
    }
  }, [socket, setGame])

  return {
    game,
  }
}

export default useSession
