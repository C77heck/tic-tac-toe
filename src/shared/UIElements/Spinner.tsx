import { FC } from 'react';

import './Spinner.scss';


interface SpinnerProps {
    overlay: boolean;
}

const Spinner: FC<SpinnerProps> = ({ overlay }) => {
    return (
        <div className={`${overlay && 'loading-spinner__overlay'} spinner-container`}>
            <div className="loader_center"></div>
            <div className="loader"></div>
            <div className="second_loader"></div>
            <div className="third_loader"></div>
        </div>
    )
}

export default Spinner;