import { useState } from "react"
import { PlayerContext } from "./PlayerContext"
import { PlayerInitialValue } from "./PlayerInitialValue"

export const PlayerProvider = ({ children }) => {
  const [game, setGame] = useState(PlayerInitialValue)

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