import { MouseEventHandler, ReactNode } from 'react';
import styles from './Button.module.css';

const Button = (props: {
  type: 'button' | 'submit' | 'reset' | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  children: ReactNode;
}) => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
