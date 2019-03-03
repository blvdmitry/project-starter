import React from 'react';
import * as T from './Button.types';
import s from './Button.css';

const Button = (props: T.Props) => {
  const { text } = props;

  return (
    <button className={s.root}>
      { text }
    </button>
  );
};

export default Button;
