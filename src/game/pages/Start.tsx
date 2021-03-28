import React, { useContext, useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { PlayerContext } from '../../shared/context/player-context';
import { Input } from '../../shared/form-elements/InputElement';
import Modal from '../../shared/UIElements/Modal';
import DrawStarter from '../components/DrawStarter';
import GameSize from '../components/GameSize';
import UnfinishedGame from '../components/UnfinishedGame';

import './Start.scss';

const Start = () => {
    const { gameSize, seqNeeded, getPlayerNames, round, drawFirstPlayer } = useContext(PlayerContext);

    const [inputs, setInputs] = useState({
        player1: {
            value: '',
            isValid: false
        },
        player2: {
            value: '',
            isValid: false
        }
    })
    const [isFormValid, setIsFormValid] = useState(true)


    useEffect(() => {
        setInputs({
            player1: {
                value: '',
                isValid: true
            },
            player2: {
                value: '',
                isValid: true
            }
        })
        setIsFormValid(true);
    }, [])

    // validate inputs and whether incompatible game size and sequence has been set.
    useEffect(() => {
        setIsFormValid(() => {
            if (inputs.player1.isValid && inputs.player2.isValid && seqNeeded !== 0) {
                if (inputs.player1.value.length !== 0 && inputs.player2.value.length !== 0) {
                    if (gameSize === 3 && seqNeeded === 4) {
                        return true;
                    }
                    return false;
                }
            }
            return true;
        })
    }, [inputs, seqNeeded, gameSize])



    // modal state
    const [show, setShow] = useState(false);
    // animation state
    const [animate, setAnimate] = useState(true);
    // draw animation state
    const [drawAnimation, setDrawAnimation] = useState(false);
    const onCancelHandler = () => {
        setShow(false);
        setAnimate(true)

    }
    const showModalHandler = () => {
        setShow(true);
        setAnimate(false)
    }
    const saveNamesHandler = () => {
        setShow(false);
        getPlayerNames(inputs.player1.value, inputs.player2.value);
        drawFirstPlayer();
        setDrawAnimation(true)
    }
    const style = {
        animation: `throb 1250ms linear ${animate ? 'infinite' : '0'}`
    }

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setInputs(prev => {
            return {
                ...prev,
                [id]: {
                    value: value,
                    isValid: value.length > 0
                }
            }
        })

    }
    return (
        <React.Fragment>
            <UnfinishedGame />
            <Modal
                show={show}
                onCancel={onCancelHandler}
                className='start-modal'
            >
                <Input
                    id='player1'
                    value={inputs.player1.value}
                    onChange={inputHandler}
                    label='Player 1'
                    errorText='Please provide your name'
                    isValid={inputs.player1.isValid}
                />
                <Input
                    id='player2'
                    value={inputs.player2.value}
                    onChange={inputHandler}
                    label='Player 2'
                    errorText='Please provide your name'
                    isValid={inputs.player2.isValid}
                />
                <GameSize />

                <button
                    className='btn--lets-play'
                    disabled={isFormValid}
                    onClick={saveNamesHandler}
                >
                    Go
                    </button>


            </Modal>
            {drawAnimation && <Link to='game'><DrawStarter winner={round} /></Link>}
            <div className='landing'>
                <div className='landing__inner'>
                    <h1>Tic Tac Toe</h1>
                    <div
                        onClick={showModalHandler}
                        className='landing__start'
                        style={style}
                    >
                        Start
                        </div>
                </div>
            </div>
        </React.Fragment>
    )
}


export default Start;