import { FC } from 'react';
import ReactDOM from 'react-dom';

import './Backdrop.scss';

interface BackdropProps {
  onCancel: () => void;
}

const Backdrop: FC<BackdropProps> = props => {
  return ReactDOM.createPortal(
    <div className={`backdrop`} onClick={props.onCancel}></div>,
    document.getElementById('backdrop-hook')!
  );
};

export default Backdrop;
