import React from "react";
import { useContext, useEffect } from "react";
import { PlayerContext } from "../../shared/context/player-context";
import { useStorage } from "../../shared/hooks/store-hook";
import GameOver from "../components/GameOver";
import Table from "../components/Table"

import './GamePage.scss';

const Game = () => {

    const { isDraw, player, round, gameSize, playerNames, gameWon, reloadGame } = useContext(PlayerContext);
    const { player1, player2 } = playerNames;
    const { getCurrentGame, saveCurrentGame, savePlayerRankings } = useStorage();


    // CHECKS ON PAGE RELOAD IF WE HAVE ANY ONGOING GAME DATA IN THE LOCALSTORAGE
    useEffect(() => {
        const storageData = getCurrentGame();
        if (storageData.length > 0) {
            reloadGame(storageData)
        }

    }, [])

    // SAVES THE CURRENT GAME PROGRESS
    useEffect(() => {
        if (round) {
            saveCurrentGame({
                playerNames: playerNames,
                round: round,
                gameSize: gameSize,
                playerSteps: player
            })
        }
    }, [round])

    const style = {
        player1: {
            animation: `throb 1250ms linear ${round === 'player1' && !gameWon.isWon ? 'infinite' : '0'}`
        },
        player2: {
            animation: `throb 1250ms linear ${round === 'player2' && !gameWon.isWon ? 'infinite' : '0'}`
        }
    }

    useEffect(() => {
        if (gameWon.isWon) {
            savePlayerRankings({
                name: gameWon.winnerName === 'player1' ? playerNames.player1 : playerNames.player2,
                wins: 1,
                steps: [gameWon.steps],
            })
        }
    }, [gameWon])

    return (
        <React.Fragment>

            <div className='game-table'>
                {gameWon.isWon && <GameOver winnerName={gameWon.winnerName} />}
                {isDraw && <GameOver winnerName='both' />}
                <div className='names'>
                    <h2 style={style.player1} className='names__player1'>{player1}</h2>
                    <h2 style={style.player2} className='names__player2'>{player2}</h2>
                </div>

                <Table playerName={round} number={gameSize} />
            </div>
        </React.Fragment>
    )
}


export default Game;