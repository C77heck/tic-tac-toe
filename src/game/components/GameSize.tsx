
import React from 'react';
import {  useContext } from 'react';
import { PlayerContext } from '../../shared/context/player-context';
import './GameSize.scss';

const levels = [3, 4, 5, 6, 7, 8, 9];
const numOfSymbolsNeeded = [3, 4];
interface BtnElementProps {
    number: number;
}

const BtnElement = ({ number }: BtnElementProps) => {

    const { getGameSize, gameSize, seqNeeded } = useContext(PlayerContext);
    const onClickHandler = () => {
        getGameSize(number);
    }

    return (
        <button
            className={`${gameSize === number && 'btn-size--clicked'} btn-size`}
            onClick={onClickHandler}
            disabled={number === 3 && seqNeeded === 4 ? true : false}
        >
            {number}
        </button>
    )
}

/* pick the number of symbols needed to win component */
interface BtnSequenceProps {
    number: number;
}
const BtnSequence = ({ number }: BtnSequenceProps) => {
    const { seqNeeded, getSeqNeededToWin } = useContext(PlayerContext);

    const onClickHandler = () => {
        getSeqNeededToWin(number);

    }
    return (
        <button
            className={`${seqNeeded === number && 'btn-size--seq--clicked'} btn-size btn-size--seq`}
            onClick={onClickHandler}
        >
            {number}
        </button>
    )
}

const GameSize = () => {

    return (
        <React.Fragment>
            <p className='pick-size'>Pick table size</p>
            <div className='button-wrapper'>
                {levels.map(i => (<BtnElement key={i} number={i} />))}
            </div>
            <p className='pick-size'>Sequence size needed to win</p>
            <div className='button-wrapper'>
                {numOfSymbolsNeeded.map(i => (<BtnSequence key={i} number={i} />))}
            </div>
        </React.Fragment>
    )
}

export default GameSize;