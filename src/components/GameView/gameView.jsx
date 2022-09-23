import { useLocation } from 'react-router-dom'
import { Card } from '../Card'
import { Player } from '../Player'
import './gameView.scss'

const GameView = () => {
    const { waiting, username, room_id } = useLocation().state
    const player = {
        username: username,
        room_id: room_id,
        cards: ['CLUB_2', 'CLUB_Q', 'DIAMOND_2', 'DIAMOND_K']
    }
    const player2 = {
        username: 'bryann',
        room_id: room_id,
        cards: ['BACK', 'BACK', 'BACK', 'BACK']
    }
    const player3 = {
        username: 'Donaldo',
        room_id: room_id,
        cards: ['BACK', 'BACK', 'BACK', 'BACK']
    }
    const player4 = {
        username: 'saravia',
        room_id: room_id,
        cards: ['BACK', 'BACK', 'BACK', 'BACK']
    }

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
                <Player player={player2} />
                <Player player={player3} />
                <Player player={player4} />
            </div>
            <div className='game-view__board'>
                <Card type='BACK' />
            </div>
            <div className='game-view__main-player'>
                <Player player={player} />
            </div>
        </div>
    )
}

export default GameView
