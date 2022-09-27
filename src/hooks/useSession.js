import { useState, useEffect, useContext } from 'react'
import { PlayerContext } from '../Context/PlayerContext/PlayerContext'
import { getSocket } from '../websockets/socket'

const useSession = () => {
  const { game, setGame } = useContext(PlayerContext)
  const socket = getSocket()

  useEffect(() => {
    if (socket) {
      socket.on('room_created', (response) => {
        console.log('room_created', response, game)
        setGame((game) => {
          return {
            ...game,
            room_id: response.body.room_id,
            owner: response.body.owner,
          }
        })
      })
      socket.on('joined_room', (res) => {
        console.log('joined room', res)
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
        console.log('room full', res)
        const { response } = res
        setGame((game) => {
          return {
            ...game,
            response,
          }
        })
      })

      socket.on('game_started', (res) => {
        console.log("response",res, game)
        const { players, next_player, next_card } = res.body
        setGame((game) => {
          return {
            ...game,
            players,
            game_started: true,
            next_player,
            next_card,
          }
        })
      })

      socket.on('next_turn', (res) => {
        console.log("next_turn",res)
        const { next_player, last_player, players, next_card } = res.body
        setGame((game) => {
          return {
            ...game,
            next_player,
            last_player,
            players,
            next_card,
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
