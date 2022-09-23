import { useState, useEffect } from 'react'
import { getSocket } from '../websockets/socket'

const useSession = () => {
  const socket = getSocket()
  const [response, setResponse] = useState()

  useEffect(() => {
    if (socket) {
      socket.on('room_created', (response) => {
        // console.log(response)
        setResponse(response)
      })
    }
  }, [socket])

  return {
    response,
  }
}

export default useSession
