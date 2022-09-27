import { useState } from "react"
import { PlayerContext } from "./PlayerContext"

export const PlayerProvider = ({ children }) => {
  const [game, setGame] = useState({
    players: {},
    room_id: '',
    winner: '',
    next_card: '',
    next_player: '',
    last_player: '',
    telltale: '',
    accused: '',
    answer: '',
    owner: '',
    game_started: false,
    response: '',
  })

  return (
    <PlayerContext.Provider value={{
      game,
      setGame
    }}
    >
      { children }
    </PlayerContext.Provider>
  )
}