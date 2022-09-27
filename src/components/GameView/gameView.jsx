import { useLocation } from 'react-router-dom'
import { Card } from '../Card'
import { Player } from '../Player'
import  useSession  from '../../hooks/useSession'
import './gameView.scss'
import { Message } from '../Message'
import { Bluff } from '../Bluff'
import { Turn } from '../Turn'
import { ActualCard } from '../ActualCard'

const GameView = () => {
    const { waiting, username, room_id, isOwner } = useLocation().state
    const name = isOwner ? 'owner' : username
    const session = useSession()
    const { players, game_started, next_player, next_card, last_player } = session.game

    if (waiting && !game_started) {
        return (
            <div className='waiting'>
                <h2>Waiting host to start Game</h2>
                <div className="lds-ellipsis">
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
                <Turn next_player={next_player} players={players} />
                <Card type='BACK' />
                <ActualCard next_card={next_card} />
            </div>
            <div className='game-view__main-player'>
                <Bluff player={players[name]} accused={last_player} roomId={room_id} players={players} />
                {
                    players[name] && <Player player={players[name]} />
                }
                <Message />
            </div>
        </div>
    )
}

export default GameView
