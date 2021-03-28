import { createContext } from 'react';


export const PlayerContext = createContext({
    isDraw: false,
    seqNeeded: 0,
    player: {
        player1: [0],
        player2: [0]
    },
    playerNames: {
        player1: '',
        player2: ''
    },
    round: '',
    gameSize: 0,
    gameWon: {
        isWon: false,
        winnerName: '',
        winningNumbers: [0],
        steps: 0
    },
    getSeqNeededToWin: (number: number) => { },
    reloadGame: (data: string) => { },
    getPlayerNames: (player1: string, player2: string) => { },
    getGameSize: (size: number) => { },
    nextPlayer: (player: string) => { },
    getCell: (cellId: number, player: string) => { },
    isGameWon: (clickedCell: number, playerName: string, playerArray: number[], size: number) => { },
    resetGame: () => { },
    drawFirstPlayer: () => { },
    isItADraw: () => { }
})

