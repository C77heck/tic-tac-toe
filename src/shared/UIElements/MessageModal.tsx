import { FC } from 'react';

import Modal from './Modal';

import './MessageModal.scss'


interface MessageModalProps {
    className?: string;
    onClear: () => void;
    message?: string;
    header?: string;
}


const MessageModal: FC<MessageModalProps> = props => {
    return (
        <Modal
            className={`message-modal ${props.className}`}
            onCancel={props.onClear}
            show={!!props.message}
        >
            <h2>{props.message}</h2>
        </Modal>
    );
};

export default MessageModal;
