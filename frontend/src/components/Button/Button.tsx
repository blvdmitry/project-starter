import React from 'react';
import classnames from 'classnames';
import * as T from './Button.types';
import s from './Button.css';

const Button = (props: T.Props) => {
  const { text, secondary } = props;
  const rootClassNames = classnames(s.root, secondary && s['--secondary']);

  return (
    <button className={rootClassNames}>
      { text }
    </button>
  );
};

export default Button;
