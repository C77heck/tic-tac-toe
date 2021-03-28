import React, { useState, useEffect, FC } from "react";

import Cell from "./Cell";


import './Table.scss';

interface TableProps {
    number: number;
    playerName: string;
}
const Table: FC<TableProps> = ({ number, playerName }) => {

    const [gameSize, setGameSize] = useState<number[]>([])

    useEffect(() => {
        if (number) {
            const numberArray: number[] = [];
            for (let i = 1; i < number * number + 1; i++) {
                numberArray.push(i)
            }
            setGameSize(numberArray)
        }

    }, [number])


    return (
        <React.Fragment>
            <div className='game'>
                <div className={`game--${number}`}>
                    {gameSize.map((i: number) => {
                        return (<Cell key={i} number={i} playerName={playerName} />)
                    })}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Table;