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
          if (game.room_id.length === 0) {
            return {
              ...game,
              room_id: response.body.room_id,
              owner: response.body.owner,
            }
          } else return game
        })
      })
      socket.on('joined_room', (res) => {
        console.log('joined room', res)
        const { room_id, owner, players } = res.body
        const { response } = res
        setGame((game) => {
          if (game.room_id.length === 0) {
            return {
              ...game,
              owner,
              room_id,
              players,
              response,
            }
          } else return game
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
        const { players, next_player, next_card, room_id } = res.body
          setGame((game) => {
            if (room_id === game.room_id) {
              return {
                ...game,
                players,
                game_started: true,
                next_player,
                next_card,
              }
            } else return game
          })
      })

      socket.on('next_turn', (res) => {
        console.log("next_turn",res)
        const { next_player, last_player, players, next_card, room_id } = res.body
          setGame((game) => {
            if (room_id === game.room_id) {
              return {
                ...game,
                next_player,
                last_player,
                players,
                next_card,
              }
            } else return game
          })
      })

      socket.on('farol', (res) => {
        console.log("farol",res)
        const { answer, telltale, accused, players, room_id } = res.body
        setGame((game) => {
          if (room_id === game.room_id) {
            return {
              ...game,
              answer,
              telltale,
              accused,
              players,            
            }
          } else return game
          })
      })

      socket.on('game_finished', (res) => {
        console.log("game_finished",res)
        const { winner, room_id } = res.body
          setGame((game) => {
            if (room_id === game.room_id) {
              return {
                ...game,
                winner,
              }
            } else return game
          })
      })
      
      socket.on('message_recieved', (res) => {
        console.log("message_recieved",res)
        const { chat, room_id } = res.body
          setGame((game) => {
            if (room_id === game.room_id) {
              return {
                ...game,
                chat, 
              }
            } else return game
          })
      })
    }
  }, [socket, setGame])

  return {
    game,
  }
}

export default useSession
