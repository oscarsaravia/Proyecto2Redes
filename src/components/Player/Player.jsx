import useSession from '../../hooks/useSession'
import { nextPlayer } from '../../websockets/socket'
import { Card } from '../Card'
import './player.scss'

export const Player = ({ player, hide }) => {
  const { room_id, players, next_player, owner } = useSession().game
  const nextTurn = (card) => {
    if (Object.keys(players).includes(player.username) && !hide && next_player === player.username) {
      console.log('next turn', card, room_id, player);
      nextPlayer(card, room_id, player.username)
    } else if (!hide && (next_player === player.username || (next_player === 'owner' && owner === player.username)) ) {
      console.log('next turn owner', card, room_id, player);
      nextPlayer(card, room_id, 'owner')
    } else {
      console.log('next turn not your turn', card, room_id, player);
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
