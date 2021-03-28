
export const splitRow = (numbArr: number[], gameSize: number, clickedCell: number) => {

    // add the current picked cell
    numbArr = [...numbArr, clickedCell];
    // split up the player array into rows.
    return [
        numbArr.filter(i => i <= gameSize),
        numbArr.filter(i => i <= (gameSize * 2) && (i > gameSize)),
        numbArr.filter(i => i <= (gameSize * 3) && (i > gameSize * 2)),
        numbArr.filter(i => i <= (gameSize * 4) && (i > gameSize * 3)),
        numbArr.filter(i => i <= (gameSize * 5) && (i > gameSize * 4)),
        numbArr.filter(i => i <= (gameSize * 6) && (i > gameSize * 5)),
        numbArr.filter(i => i <= (gameSize * 7) && (i > gameSize * 6)),
        numbArr.filter(i => i <= (gameSize * 8) && (i > gameSize * 7)),
        numbArr.filter(i => i <= (gameSize * 9) && (i > gameSize * 8))
    ];
}



const getColumns = (number: number, gameSize: number, array: number[]) => {

    return array.filter(i => (i === number || ((i % gameSize) - number) === 0))
}
export const splitColumn = (numbArr: number[], gameSize: number, clickedCell: number) => {

    // add the current picked cell
    numbArr = [...numbArr, clickedCell];
    // split up the player array into rows.
    return [
        getColumns(1, gameSize, numbArr),
        getColumns(2, gameSize, numbArr),
        getColumns(3, gameSize, numbArr),
        getColumns(4, gameSize, numbArr),
        getColumns(5, gameSize, numbArr),
        getColumns(6, gameSize, numbArr),
        getColumns(7, gameSize, numbArr),
        getColumns(8, gameSize, numbArr),
        getColumns(9, gameSize, numbArr)
    ];
}


interface ArrayleftProps {
    zero: number[];
    one: number[];
    two: number[];
    three: number[];
    four: number[];
    five: number[];
    six: number[];
    seven: number[],
    two2: number[],
    three2: number[],
    four2: number[],
    five2: number[],
    six2: number[],
    seven2: number[]
}
export const splitDiagonalLeft = (numbArr: number[], gameSize: number, clickedCell: number) => {
    // add the current picked cell
    numbArr = [...numbArr, clickedCell];
    // split up the player array into rows.
    const arrDist = gameSize - 1;

    const a: ArrayleftProps = {
        zero: [],
        one: [],
        two: [],
        three: [],
        four: [],
        five: [],
        six: [],
        seven: [],
        two2: [],
        three2: [],
        four2: [],
        five2: [],
        six2: [],
        seven2: []
    }
    numbArr.forEach(i => {
        if ((i === arrDist) || ((i % arrDist === 0) && (arrDist * gameSize > i))) {
            a.zero.push(i);
        } else if (i === 1 || ((i % arrDist === 1) && (arrDist * gameSize + 2 > i))) {
            a.one.push(i);
        } else if (i === 3 || ((i % arrDist === 3) && (gameSize * 3 > i))) {
            a.three.push(i);
        } else if (i === 4 || ((i % arrDist === 4) && (gameSize * 4 > i))) {
            a.four.push(i);
        } else if (i === 5 || ((i % arrDist === 5) && (gameSize * 5 > i))) {
            a.five.push(i);
        } else if (i === 6 || ((i % arrDist === 6) && (gameSize * 6 > i))) {
            a.six.push(i);
        } else if (i === 7 || ((i % arrDist === 7) && (gameSize * 7 > i))) {
            a.seven.push(i);
        } else if (i === (gameSize * 2) || ((i % arrDist === 2) && (i > gameSize * 2))) {
            a.two2.push(i);
        } else if (i === (gameSize * 3) || ((i % arrDist === 3) && (i > gameSize * 3))) {
            a.three2.push(i);
        } else if (i === gameSize * 4 || ((i % arrDist === 4) && (i > gameSize * 4))) {
            a.four2.push(i);
        } else if ((i === gameSize * 5) || ((i % arrDist === 5) && (i > gameSize * 5))) {
            a.five2.push(i);
        } else if ((i === gameSize * 6) || ((i % arrDist === 6) && (i > gameSize * 6))) {
            a.six2.push(i);
        } else if ((i === gameSize * 7) || ((i % arrDist === 7) && (i > gameSize * 7))) {
            a.seven2.push(i);
        }
    })
    return [
        a.zero,
        a.one,
        a.two,
        a.three,
        a.four,
        a.five,
        a.six,
        a.seven,
        a.two2,
        a.three2,
        a.four2,
        a.five2,
        a.six2,
        a.seven2
    ];
}


interface ArrayrightProps {
    zero: number[];
    one: number[];
    two: number[];
    three: number[];
    four: number[];
    five: number[];
    six: number[];
    seven: number[],
    eight: number[],
    nine: number[],
    five2: number[],
    six2: number[],
    seven2: number[],
    eight2: number[],
    nine2: number[]
}

export const splitDiagonaRight = (numbArr: number[], gameSize: number, clickedCell: number) => {
    // add the current picked cell
    numbArr = [...numbArr, clickedCell];
    // split up the player array into rows.
    const arrDist = gameSize + 1;
    const a: ArrayrightProps = {
        zero: [],
        one: [],
        two: [],
        three: [],
        four: [],
        five: [],
        six: [],
        seven: [],
        eight: [],
        nine: [],
        five2: [],
        six2: [],
        seven2: [],
        eight2: [],
        nine2: []
    }
    numbArr.forEach(i => {
        if (i % arrDist === 0) {
            a.zero.push(i);
        } else if ((i === 1) || (i % arrDist === 1)) {
            a.one.push(i);
        } else if ((i === 2) || (i % arrDist === 2)) {
            a.two.push(i);
        } else if ((i === 3) || ((i % arrDist === 3) && (gameSize * (gameSize - 1) > i))) {
            a.three.push(i);
        } else if ((i === 4) || ((i % arrDist === 4) && (gameSize * (gameSize - 2) > i))) {
            a.four.push(i);
        } else if ((i === 5) || ((i % arrDist === 5) && (gameSize * (gameSize - 3) > i))) {
            a.five.push(i);
        } else if ((i === 6) || ((i % arrDist === 6) && (gameSize * (gameSize - 4) > i))) {
            a.six.push(i);
        } else if ((i === 7) || ((i % arrDist === 7) && (gameSize * (gameSize - 5) > i))) {
            a.seven.push(i);
        } else if ((i === 8) || ((i % arrDist === 8) && (gameSize * (gameSize - 4) > i))) {
            a.eight.push(i);
        } else if ((i === 9) || ((i % arrDist === 9) && (gameSize * (gameSize - 3) > i))) {
            a.nine.push(i);
        } else if ((i % arrDist === 5) && (gameSize * (gameSize - 3) < i)) {
            a.five2.push(i);
        } else if ((i % arrDist === 6) && (gameSize * (gameSize - 4) < i)) {
            a.six2.push(i);
        } else if ((i % arrDist === 7) && (gameSize * (gameSize - 5) < i)) {
            a.seven2.push(i);
        } else if ((i % arrDist === 8) && (gameSize * (gameSize - 6) < i)) {
            a.eight2.push(i);
        } else if ((i % arrDist === 9) && (gameSize * (gameSize - 7) < i)) {
            a.nine2.push(i);
        }
    })

    return [
        a.zero,
        a.one,
        a.two,
        a.three,
        a.four,
        a.five,
        a.six,
        a.seven,
        a.eight,
        a.nine,
        a.five2,
        a.six2,
        a.seven2,
        a.eight2,
        a.nine2
    ];
}
