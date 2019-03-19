import React from 'react';
import classnames from 'classnames';
import * as T from './Icon.types';
import s from './Icon.pcss';

const Icon = (props: T.Props) => {
  const { name, className, size } = props;
  const rootClassName = classnames(s.root, className, size && s[`--size-${size}`]);
  const svg = require(`./icons/${name}.svg`);

  return <i className={rootClassName} dangerouslySetInnerHTML={{ __html: svg }} />;
};

export default Icon;
