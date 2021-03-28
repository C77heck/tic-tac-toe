import { useEffect, useState } from "react";

import { Link } from "react-router-dom"

import { useStorage } from "../../shared/hooks/store-hook"
import Modal from "../../shared/UIElements/Modal"

import './UnfinishedGame.scss';

const UnfinishedGame = () => {
    const { unfinishedGame, cancelGame } = useStorage();
    const [show, setShow] = useState(false);
    useEffect(() => {
        if (unfinishedGame()) {
            setShow(true);
        }
    }, [unfinishedGame])

    const onCancelHandler = () => {
        setShow(false);
    }
    const onClickHandler = () => {
        cancelGame();
        setShow(false);
    }
    return (
        <Modal
            show={show}
            onCancel={onCancelHandler}
            className='unfinished-modal'
        >
            <h3>You have an unfinsihed game.</h3>
            <h4>Would you like to continue it?</h4>
            <div className='btn-group'>
                <Link to='/game'>
                    <button >Yes</button>
                </Link>
                <Link to='/'>
                    <button onClick={onClickHandler}>No</button>
                </Link>
            </div>
        </Modal>
    )
}

export default UnfinishedGame;