import { useState, useCallback } from 'react';
import { checkIsWon } from '../utility/isWon';
import { splitColumn, splitDiagonalLeft, splitDiagonaRight, splitRow } from '../utility/splitData';


interface StateProps {
    player1: number[];
    player2: number[];
}
export const usePlayer = () => {

    const [player, setPlayer] = useState<StateProps>({
        player1: [],
        player2: []
    });

    const [gameSize, setGameSize] = useState(0);

    const [round, setRound] = useState('');

    const [playerNames, setPlayerNames] = useState({
        player1: '',
        player2: ''
    })

    const [gameWon, setGameWon] = useState({
        isWon: false,
        winnerName: '',
        winningNumbers: [0],
        steps: 0
    });
    const [isDraw, setIsDraw] = useState(false);
    const [seqNeeded, setSeqNeeded] = useState(0);

    // GET THE SEQUENCE NEEDED TO WIN
    const getSeqNeededToWin = (number: number) => {
        setSeqNeeded(number);
    }
    // RELOAD GAME DATA
    const reloadGame = (data: string) => {
        const parsedData = JSON.parse(data);
        setPlayerNames(parsedData.playerNames);
        setRound(parsedData.round);
        setGameSize(parsedData.gameSize);
        setPlayer(parsedData.playerSteps);
    }


    // CHECK IF ITS A DRAW
    const isItADraw = () => {
        if (player.player1.length + player.player2.length + 1 === gameSize * gameSize) {
            setIsDraw(true);
        }
    }


    // DRAW WHO'S STARTING
    const drawFirstPlayer = () => {
        setRound(() => {
            const draw: number = Math.floor(Math.random() * 2) + 1;
            return draw === 1 ? 'player1' : 'player2';
        })
    }

    /* STORE PLAYER NAMES */
    const getPlayerNames = (player1: string, player2: string) => {
        if (player1 !== player2) {
            setPlayerNames({
                player1: player1,
                player2: player2
            })
        } else {
            setPlayerNames({
                player1: player1 + 1,
                player2: player2 + 2
            })
        }

    }

    /* REGISTER GAME SIZE PICKED */

    const getGameSize = useCallback((size: number) => {
        setGameSize(size);
    }, [])


    /* MANAGE ROUNDS */
    const nextPlayer = useCallback(
        (player: string) => {
            if (player === 'player1') {
                setRound('player2')
            } else {
                setRound('player1')
            }
        }, [])


    /* REGISTER CELL PLAYER PICKED */
    const getCell = useCallback(
        (cellId: number, player: string) => {
            setPlayer(prev => {
                return {
                    player1: player === 'player1' ? [...prev.player1, cellId] : prev.player1,
                    player2: player === 'player2' ? [...prev.player2, cellId] : prev.player2
                }
            })
        }, [])


    /* CHECK IF GAME IS WON */

    const isGameWon = (clickedCell: number, playerName: string, playerArray: number[], size: number) => {
        // check if row has a winning sequence
        const row = splitRow(playerArray, size, clickedCell)
        const isRowWin = checkIsWon(row, size, seqNeeded, 'row');
        if (isRowWin.isWon) {
            setGameWon({
                isWon: true,
                winnerName: playerName,
                winningNumbers: isRowWin.winningNumbers,
                steps: playerArray.length
            })
            return;
        }
        // check if column has a winning sequence
        const column = splitColumn(playerArray, size, clickedCell);
        const isColumnWin = checkIsWon(column, size, seqNeeded, 'column');
        if (isColumnWin.isWon) {
            setGameWon({
                isWon: true,
                winnerName: playerName,
                winningNumbers: isColumnWin.winningNumbers,
                steps: playerArray.length
            })
            return;
        }
        // check if diagLeft has a winning sequence
        const diagLeft = splitDiagonalLeft(playerArray, size, clickedCell);
        const isDiagLeftWin = checkIsWon(diagLeft, size, seqNeeded, 'diagLeft');
        if (isDiagLeftWin.isWon) {
            setGameWon({
                isWon: true,
                winnerName: playerName,
                winningNumbers: isDiagLeftWin.winningNumbers,
                steps: playerArray.length
            })
            return;
        }

        // check if diagRight has a winning sequence
        const diagRight = splitDiagonaRight(playerArray, size, clickedCell);
        const isDiagRightWin = checkIsWon(diagRight, size, seqNeeded, 'diagRight');
        if (isDiagRightWin.isWon) {
            setGameWon({
                isWon: true,
                winnerName: playerName,
                winningNumbers: isDiagRightWin.winningNumbers,
                steps: playerArray.length
            })
            return;
        }
    }

    /* RESET GAME */
    const resetGame = () => {
        setPlayer({
            player1: [],
            player2: []
        })
        setGameWon({
            isWon: false,
            winnerName: '',
            winningNumbers: [0],
            steps: 0
        })
        setIsDraw(false);
        localStorage.removeItem('currentGame');
    }





    return {
        isDraw,
        seqNeeded,
        player,
        round,
        gameSize,
        playerNames,
        gameWon,
        getSeqNeededToWin,
        reloadGame,
        getPlayerNames,
        getGameSize,
        nextPlayer,
        getCell,
        isGameWon,
        resetGame,
        drawFirstPlayer,
        isItADraw
    }
}