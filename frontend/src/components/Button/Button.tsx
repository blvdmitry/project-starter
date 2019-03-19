import React from 'react';
import classnames from 'classnames';
import * as T from './Button.types';
import s from './Button.pcss';

const Button = (props: T.Props) => {
  const { text, variant, className } = props;
  const rootClassNames = classnames(s.root, className, variant && s[`--${variant}`]);

  return (
    <button className={rootClassNames}>
      { text }
    </button>
  );
};

export default Button;
