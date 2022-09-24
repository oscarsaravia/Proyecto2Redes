import { useState, useEffect } from 'react'
import { getSocket } from '../websockets/socket'

const useSession = () => {
  const socket = getSocket()
  const [game, setGame] = useState({
    players: {},
    room_id: '',
    winner: '',
    next_player: '',
    last_player: '',
    telltale: '',
    accused: '',
    answer: '',
    owner: '',
    game_started: false,
    response: '',
  })

  useEffect(() => {
    if (socket) {
      socket.on('room_created', (response) => {
        setGame((game) => {
          return {
            ...game,
            room_id: response.body.room_id,
          }
        })
      })
      socket.on('joined_room', (res) => {
        const { room_id, owner, players } = res.body
        const { response } = res
        setGame((game) => {
          return {
            ...game,
            owner,
            room_id,
            players,
            response,
          }
        })
      })

      socket.on('room_full', (res) => {
        const { response } = res
        setGame((game) => {
          return {
            ...game,
            response,
          }
        })
      })

      socket.on('game_started', (res) => {
        console.log("response",res)
        const { players } = res.body
        setGame((game) => {
          return {
            ...game,
            players,
            game_started: true,
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
