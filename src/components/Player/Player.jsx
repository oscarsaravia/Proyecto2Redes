import { Card } from '../Card'
import './player.scss'

export const Player = ({ player, hide }) => {
  console.log("Player",player)
  return (
    <div className='player-container'>
      <h2>{player.username}</h2>
      <div className='player-cards'>
        {
          player.cards && player.cards.map((card, index) => (
            <div key={index}>
              <Card key={index} type={hide ? 'BACK' : card} />
            </div>
          ))
        }
      </div>
  </div>
  )
}
