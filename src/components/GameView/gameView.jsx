import { useLocation } from 'react-router-dom'
import { Card } from '../Card'
import { Player } from '../Player'
import  useSession  from '../../hooks/useSession'
import './gameView.scss'

const GameView = () => {
    const { waiting, username, room_id, isOwner } = useLocation().state
    const name = isOwner ? 'owner' : username
    const session = useSession()
    const { players} = session.game

    if (waiting) {
        return (
            <div className='waiting'>
                <h2>Waiting host to start Game</h2>
                <div class="lds-ellipsis">
                    <div />
                    <div />
                    <div />
                    <div />
                </div>
            </div>
        )
    }
    return (
        <div className="game-view">
            <div className='game-view__players'>
                {
                    players && Object.keys(players).map((player, index) => {
                        if (players[player].username !== username) {
                            return <Player key={index} player={players[player]} hide />
                        }
                    })
                }
            </div>
            <div className='game-view__board'>
                <Card type='BACK' />
            </div>
            <div className='game-view__main-player'>
                {
                    players[name] && <Player player={players[name]} />
                }
            </div>
        </div>
    )
}

export default GameView
