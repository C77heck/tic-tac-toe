
import { useContext } from 'react';
import { PlayerContext } from '../../shared/context/player-context';
import './DrawStarter.scss';

interface DrawStarterProps {
    winner: string;
}
const DrawStarter = ({ winner }: DrawStarterProps) => {
    const { playerNames } = useContext(PlayerContext);
    const style = {
        draw1: {
            animation: `${winner === 'player1' ? 'flipRightP1Win' : 'flipRightP2Win'} 3000ms 1 forwards`
        },
        draw2: {
            animation: `${winner === 'player1' ? 'flipLeftP1Win' : 'flipLeftP2Win'} 3000ms 1 forwards`
        }
    }

    return (
        <div className='animation-overlay'>
            <div style={style.draw1} className='draw1'>
                <div className='draw1__inner'>
                    <h2>{playerNames.player1}</h2>
                    <h3>Let's play</h3>

                </div>
            </div>
            <div style={style.draw2} className='draw2'>
                <div className='draw2__inner'>
                    <h2>{playerNames.player2}</h2>
                    <h3>Let's play</h3>

                </div>
            </div>
        </div>
    )
}


export default DrawStarter;