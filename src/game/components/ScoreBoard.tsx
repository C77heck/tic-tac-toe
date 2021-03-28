
import { average, rankDescending, rankAscending } from '../../shared/utility/util';
import './ScoreBoard.scss';


interface ScoreBoardProps {
    players: any;
}
interface IterableProps {
    name: string;
    wins: number;
    steps: number[];
}

export const LeastSteps = ({ players }: ScoreBoardProps) => {

    rankAscending(players)
    let index = 0;

    return (
        <div className='score-board'>
            <header>
                <div>Player name</div>
                <div>Steps to win</div>
            </header>
            <div className='score-board__content'>
                {players.map(({ name, wins, steps }: IterableProps) => {
                    return (
                        <div key={index++} className='score-board__player'>
                            <div>{name}</div>
                            <div>{average(steps)}</div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}


export const MostWins = ({ players }: ScoreBoardProps) => {
    rankDescending(players);
    let index = 0;
    return (
        <div className='score-board'>
            <header>
                <div>Player name:</div>
                <div>Won games:</div>
            </header>
            <div className='score-board__content'>
                {players.map(({ name, wins, steps }: IterableProps) => {
                    return (
                        <div key={index++} className='score-board__player'>
                            <div>{name}</div>
                            <div>{wins}</div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}
