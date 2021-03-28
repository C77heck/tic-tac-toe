


export const useStorage = () => {

    interface CurrentGameProps {
        playerNames: {
            player1: string,
            player2: string
        }
        round: string;
        gameSize: number;
        playerSteps: {
            player1: number[],
            player2: number[]
        }
    }
    const saveCurrentGame = ({ playerNames, round, gameSize, playerSteps }: CurrentGameProps) => {

        localStorage.setItem(
            'currentGame',
            JSON.stringify({
                playerNames: playerNames,
                round: round,
                gameSize: gameSize,
                playerSteps: playerSteps
            })
        )
    }

    const getCurrentGame = () => {

        return localStorage.getItem('currentGame') || '';

    }

    interface PlayerProps {
        name: string;
        wins: number;
        steps: number[];
    }

    const savePlayerRankings = (finishedGame: PlayerProps) => {
        // check if we have already game history in the localstorage
        const anyRecords = localStorage.getItem('history') || '';
        let history = [];
        let existingPlayer = [];

        if (anyRecords.length !== 0) {
            history = JSON.parse(anyRecords);
            existingPlayer = history.filter((i: PlayerProps) => i.name === finishedGame.name)
        }
        if (existingPlayer.length !== 0) {
            existingPlayer[0].wins += 1;
            existingPlayer[0].steps.push(finishedGame.steps[0]);
            history = history.filter((i: PlayerProps) => i.name !== finishedGame.name)
            history.push(existingPlayer[0])
        } else {
            history.push(finishedGame);
        }
        localStorage.setItem('history', JSON.stringify(history));
    }

    const getPlayerRankings = () => {
        const anyRecords = localStorage.getItem('history') || '';
        if (anyRecords.length !== 0) {
            return {
                playerRecords: JSON.parse(anyRecords),
                records: true
            };
        }
        return {
            playerRecords: [],
            records: false
        };
    }


    const unfinishedGame = () => {
        const anyRecords = localStorage.getItem('currentGame') || '';
        return anyRecords.length > 0 ? true : false;
    }


    const cancelGame = () => {
        localStorage.removeItem('currentGame');
    }

    return { saveCurrentGame, getCurrentGame, savePlayerRankings, getPlayerRankings, unfinishedGame, cancelGame }
}