
import { useContext } from 'react';

import { Link } from 'react-router-dom';

import { PlayerContext } from '../../shared/context/player-context';

import './GameOver.scss';

interface GameOverProps {
    winnerName: string;
}

const GameOver = ({ winnerName }: GameOverProps) => {

    const { playerNames, resetGame } = useContext(PlayerContext);

    const name = winnerName === 'player1' ? playerNames.player1 : playerNames.player2;

    const onClickHandler = () => {
        resetGame();
    }
    return (
        <div className='game-over'>
            {winnerName === 'both' ? <h1>It's a draw</h1> : <h1>{name} you have won</h1>}
            <Link to='/scoreboards'><div onClick={onClickHandler}>See score boards</div></Link>
        </div>
    )
}


export default GameOver;