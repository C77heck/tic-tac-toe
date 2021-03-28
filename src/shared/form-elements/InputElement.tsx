import { useEffect, useState } from 'react';


import './InputElement.scss';

interface InputProps {
    id: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    errorText: string;
    label: string;
    isValid: boolean;
}
export const Input = ({ id, value, onChange, errorText, label, isValid }: InputProps) => {

    const [valid, setValid] = useState(false);

    useEffect(() => {
        setValid(isValid);
    }, [isValid])

    const onBlurHandler = () => {
        if (value.length === 0) {
            setValid(false)
        } else {
            setValid(true)
        }
    }

    const onFocusHandler = () => {
        if (value.length !== 0) {
            setValid(true)
        }
    }
    
    return (
        <div
            className={`input-control ${!valid ? 'input-control--invalid' : 'other'}`}
        >
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                onChange={onChange}
                type='text'
                value={value}
                name={id}
                onBlur={onBlurHandler}
                onFocus={onFocusHandler}
            />
            <div className='error-text' >
                <p > {!valid && errorText} </p>

            </div>

        </div>
    )

}


