import React from 'react';
import Button from 'components/Button';
import 'styles/reset.pcss';
import 'styles/global.pcss';
import s from './App.pcss';

const App = () => {
  return (
    <div className={s.root}>
      <Button text="Launch project" />
    </div>
  );
};

export default App;
