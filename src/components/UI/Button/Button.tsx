import { MouseEventHandler, ReactNode } from 'react';
import './Button.css';

const Button = (props: {
    type: "button" | "submit" | "reset" | undefined,
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined,
    children: ReactNode
}) => {
    return (
        <button type={props.type} className="button" onClick={props.onClick}>
            {props.children}
        </button>
    );
};

export default Button;
