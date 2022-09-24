import { Card } from '../Card'
import './player.scss'

export const Player = ({ player }) => {
  console.log("Player",player)
  return (
    <div className='player-container'>
      <h2>{player.username.username}</h2>
      <div className='player-cards'>
        {
          player.cards && player.cards.map((card, index) => (
            <div key={index}>
              <Card key={index} type={card} />
            </div>
          ))
        }
      </div>
  </div>
  )
}
