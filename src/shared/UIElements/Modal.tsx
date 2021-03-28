import React, { FC } from 'react';
import ReactDOM from 'react-dom';

import Backdrop from './Backdrop'
import './Modal.scss'


interface ModalOverlayProps {
    className?: string;
    header?: string;
    onSubmit?: () => void;
    onCancel?: () => void;
    children?: React.ReactNode;
    footer?: React.ReactNode;
    show: boolean;
}

const ModalOverlay: FC<ModalOverlayProps> = props => {

    const style = {
        transform: props.show ? "scale(1)" : "scale(0)",
        opacity: props.show ? "1" : "0",
        transition: "transform 500ms"
    }
    const content = (
        <div
            style={style}
            className={`modal ${props.className}`}
        >
            <header
                className={`modal__header`}
            >
                <h2>{props.header}</h2>
            </header>
            <form onSubmit={props.onSubmit ? props.onSubmit : event => event.preventDefault()}>
                <div className={`modal__content`}>
                    {props.children}
                </div>
                <footer className={`modal__footer`}>
                    {props.footer}
                </footer>
            </form>
        </div>

    )
    return ReactDOM.createPortal(content, document.getElementById('modal-hook')!)
}


interface ModalProps {
    onCancel: () => void;
    show: boolean;
    className?: string;
}

const Modal: React.FC<ModalProps> = props => {

    return <React.Fragment>
        {props.show && <Backdrop onCancel={props.onCancel} />}
        <ModalOverlay {...props} />
    </React.Fragment>
}



export default Modal;