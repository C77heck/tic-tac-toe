

export const average = (array: number[]) => {
    return parseFloat(String((array.reduce((total, num) => total + num) / array.length))).toFixed(2);
}


export const rankDescending = (array: [{
    name: string;
    wins: number;
    steps: number[]
}]) => {
    return array.sort((a: { name: string; wins: number; steps: number[]; }, b: { name: string; wins: number; steps: number[]; }) => {
        return b.wins < a.wins ? -1 : 1;
    }
    )
}


export const rankAscending = (array: [{
    name: string;
    wins: number;
    steps: number[]
}]) => {
    return array.sort((a: { name: string; wins: number; steps: number[]; }, b: { name: string; wins: number; steps: number[]; }) => {
        return average(b.steps) > average(a.steps) ? -1 : 1;
    }
    )
}


