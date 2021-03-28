import { FC, useState, useContext, useEffect } from 'react';
import { PlayerContext } from "../../shared/context/player-context";
import { Circle, Cross } from './Icons';

interface CellProps {
    number: number;
    playerName: string;

}
const Cell: FC<CellProps> = ({ number, playerName }) => {

    const { gameWon, gameSize, player, nextPlayer, getCell, isGameWon, isItADraw } = useContext(PlayerContext);
    const [animate, setAnimate] = useState(false);

    let render: JSX.Element | null | undefined;

    useEffect(() => {
        if (player.player1.includes(number)) {
            render = (<Circle style={{
                animation: `throb 1250ms linear ${animate ? 'infinite' : '0'}`,
            }} />);
        } else if (player.player2.includes(number)) {
            render = (<Cross style={{
                animation: `throb 1250ms linear ${animate ? 'infinite' : '0'}`,
            }} />);
        }
    }, [player])


    useEffect(() => {
        if (gameWon.isWon && gameWon.winningNumbers.includes(number)) {
            setAnimate(true);
        }
    }, [gameWon])


    const onClickHandler = () => {
        // check if the cell is free to click or not
        if (!render) {
            nextPlayer(playerName);
            getCell(number, playerName)
            isGameWon(number, playerName, playerName === 'player1' ? player.player1 : player.player2, gameSize)
            isItADraw();
        }
    }
    if (player.player1.includes(number)) {
        render = (<Circle style={{
            animation: `throb 1250ms linear ${animate ? 'infinite' : '0'}`,
        }} />);
    } else if (player.player2.includes(number)) {
        render = (<Cross style={{
            animation: `throb 1250ms linear ${animate ? 'infinite' : '0'}`,
        }} />);
    }


    return (
        <div
            id={`cell${number}`}
            className={`game__component cell${number}`}
            style={{
                backgroundColor: 'white',
                position: 'relative',
            }}
            onClick={onClickHandler}

        >
            {render}<span style={{ zIndex: 100, position: 'absolute', left: 0, top: 0 }}>{number}</span>
        </div>
    )
}

export default Cell;
