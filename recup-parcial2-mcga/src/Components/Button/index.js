import React from 'react';
import styles from './Button.module.css';

const Button = ({ type, variant, name, onClick, disabled }) => {
  return (
    <button
      type={type ? type : 'button'}
      className={`${styles[variant]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {name}
    </button>
  );
};

export default Button;