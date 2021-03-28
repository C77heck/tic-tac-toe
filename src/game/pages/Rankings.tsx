import React, {  useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useStorage } from "../../shared/hooks/store-hook";
import { LeastSteps, MostWins } from "../components/ScoreBoard";
import UnfinishedGame from "../components/UnfinishedGame";

import './Rankings.scss';

const Rankings = () => {

    const { getPlayerRankings } = useStorage();;
    const [scoreBoard, setScoreBoard] = useState(false);
    const [playerRecords, setPlayerRecords] = useState([])
    const mostWinsHandler = () => {
        setScoreBoard(true);
    }
    const leastStepsHandler = () => {
        setScoreBoard(false);
    }

    useEffect(() => {
        const result = getPlayerRankings();
        if (result.records) {
            setPlayerRecords(result.playerRecords);
        }
    }, [])





    return (
        <React.Fragment>
            <UnfinishedGame />
            <div className='ranking'>
                <div className='ranking__score-board'>
                    {scoreBoard && playerRecords.length > 0 ? <MostWins players={playerRecords} /> : <LeastSteps players={playerRecords} />}


                    <div className='ranking__buttons'>
                        <button onClick={mostWinsHandler}>Most wins</button>
                        <button onClick={leastStepsHandler}>least steps to win</button>
                    </div>
                    <div>
                        <Link to='/'>New Game</Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}


export default Rankings;