import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useSession from '../../hooks/useSession'
import { gameFinished, nextPlayer } from '../../websockets/socket'
import { toast, ToastContainer } from 'react-toastify';
import { Card } from '../Card'
import './player.scss'

export const Player = ({ player, hide }) => {
  const { room_id, players, next_player, owner, winner } = useSession().game
  const navigate = useNavigate()

  useEffect(() => {
    if (winner) {
      navigate('/finish')
    }
  }, [winner])

  // useEffect(() => {
  //   let playersWithNoCards = 0
  //   //count players with no cards
  //   Object.keys(players).forEach((player) => {
  //     if (players[player].cards.length === 0) {
  //       playersWithNoCards++
  //     }
  //   })
  //   if (player.cards.length === 0 && playersWithNoCards === 1) {
  //     console.log('finish game')
  //     gameFinished(player.username, room_id)
  //     navigate('/finish')
  //   }
  // }, [player, winner])

  const nextTurn = (card) => {
    if (Object.keys(players).includes(player.username) && !hide && next_player === player.username) {
      nextPlayer(card, room_id, player.username)
      if (player.cards.length === 1) {
        gameFinished(player.username, room_id)
        navigate('/finish')
      }
    } else if (!hide && (next_player === player.username || (next_player === 'owner' && owner === player.username)) ) {
      nextPlayer(card, room_id, 'owner')
      if (player.cards.length === 1) {
        gameFinished(player.username, room_id)
        navigate('/finish')
      }
    } else {
      toast.error('No es tu turno', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  }
  return (
    <div className='player-container'>
      <h2>{player.username}</h2>
      <div className='player-cards'>
        {
          player.cards && player.cards.map((card, index) => (
            <div key={index}>
              <Card key={index} type={card} hide={hide} handleClick={nextTurn} />
            </div>
          ))
        }
      </div>
  </div>
  )
}
