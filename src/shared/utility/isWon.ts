
export const horizontalWin = (playerArray: number[], seqNeeded: number) => {
    // sort array into an ascending order
    let sortedArray = playerArray.sort((a, b) => a - b)
    // check if we have winning sequence
    if (sortedArray.includes(sortedArray[0] + 1)) {
        if (sortedArray.includes(sortedArray[0] + 2)) {
            if (seqNeeded === 3) {
                return {
                    isWon: true,
                    winningNumbers: sortedArray.slice(0, 3)
                };
            }
            if (sortedArray.includes(sortedArray[0] + 3)) {
                return {
                    isWon: true,
                    winningNumbers: sortedArray.slice(0, 4)
                };
            }
        }
    }
    return {
        isWon: false,
        winningNumbers: [0]
    }
}


export
    const verticalWin = (playerArray: number[], gameSize: number, seqNeeded: number) => {
        // sort array into an ascending order
        let sortedArray = playerArray.sort((a, b) => a - b)
        // check if we have winning sequence

        if (sortedArray.includes(sortedArray[0] + gameSize)) {
            if (sortedArray.includes(sortedArray[0] + gameSize * 2)) {
                if (seqNeeded === 3) {
                    return {
                        isWon: true,
                        winningNumbers: sortedArray.slice(0, 3)
                    };
                }
                if (sortedArray.includes(sortedArray[0] + gameSize * 3)) {
                    return {
                        isWon: true,
                        winningNumbers: sortedArray.slice(0, 4)
                    };
                }
            }
        }
        return {
            isWon: false,
            winningNumbers: [0]
        }
    }


/* export const diagonalLeftWin = (playerArray: number[], gameSize: number, seqNeeded: number) => {
    let val = gameSize - 1;
    // sort array into an ascending order
    let sortedArray = playerArray.sort((a, b) => a - b)
    // check if we have winning sequence
    if (sortedArray.includes(sortedArray[0] + val)) {
        if (sortedArray.includes(sortedArray[0] + (val * 2))) {
            if (seqNeeded === 3) {
                return {
                    isWon: true,
                    winningNumbers: sortedArray.slice(0, 3)
                };
            }
            if (sortedArray.includes(sortedArray[0] + (val * 3))) {
                return {
                    isWon: true,
                    winningNumbers: sortedArray.slice(0, 4)
                };
            }
        }
    }
    return {
        isWon: false,
        winningNumbers: [0]
    }
} */
export const diagonalLeftWin = (playerArray: number[], gameSize: number, seqNeeded: number) => {
    let val = gameSize - 1;
    // sort array into an ascending order
    let sortedArray = playerArray.sort((a, b) => a - b)
    // check if we have winning sequence
    let isWon = {
        isWon: false,
        winningNumbers: [0]
    };;
    sortedArray.forEach(i => {
        if (sortedArray.includes(i + val)) {
            if (sortedArray.includes(i + (val * 2))) {
                if (seqNeeded === 3) {
                    isWon = {
                        isWon: true,
                        winningNumbers: [i, i + val, i + val * 2]
                    };
                }
                if (sortedArray.includes(i + (val * 3))) {
                    isWon = {
                        isWon: true,
                        winningNumbers: [i, i + val, i + val * 2, i + val * 3]
                    };
                }
            }
        }
        return null;
    })

    return isWon;
}
export const diagonalRightWin = (playerArray: number[], gameSize: number, seqNeeded: number) => {
    let val = gameSize + 1;
    // sort array into an ascending order
    let sortedArray = playerArray.sort((a, b) => a - b)
    // check if we have winning sequence
    let isWon = {
        isWon: false,
        winningNumbers: [0]
    };;

    sortedArray.forEach(i => {

        if (sortedArray.includes(i + val)) {
            if (sortedArray.includes(i + (val * 2))) {
                if (seqNeeded === 3) {
                    isWon = {
                        isWon: true,
                        winningNumbers: [i, i + val, i + val * 2]
                    };
                }
                if (sortedArray.includes(i + (val * 3))) {
                    isWon = {
                        isWon: true,
                        winningNumbers: [i, i + val, i + val * 2, i + val * 3]
                    };
                }
            }
        }
        return null;
    })

    return isWon;
}


export const checkIsWon = (playerPicks: number[][], gameSize: number, seqNeeded: number, type: string) => {

    let isWon = false;
    let winningNumbers: number[] = [];
    playerPicks.forEach(i => {
        // check if any of the arrays length long enough to have a chance for a winning compination
        if (i.length > seqNeeded - 1) {
            // we check the specific array(s) if it has a sequence to win
            if (type === 'row') {
                const result = horizontalWin(i, seqNeeded)
                if (result.isWon) {
                    isWon = true;
                    winningNumbers = result.winningNumbers;
                }
            } else if (type === 'column') {
                const result = verticalWin(i, gameSize, seqNeeded)
                if (result.isWon) {
                    isWon = true;
                    winningNumbers = result.winningNumbers;
                }
            } else if (type === 'diagLeft') {
                const result = diagonalLeftWin(i, gameSize, seqNeeded)
                if (result.isWon) {
                    isWon = true;
                    winningNumbers = result.winningNumbers;
                }
            } else if (type === 'diagRight') {
                const result = diagonalRightWin(i, gameSize, seqNeeded)
                if (result.isWon) {
                    isWon = true;
                    winningNumbers = result.winningNumbers;
                }
            }
        }
    })

    return {
        isWon: isWon,
        winningNumbers: winningNumbers
    };

}