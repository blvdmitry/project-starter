import React from 'react';
import Button from 'components/Button';
import 'styles/reset.css';
import 'styles/global.css';
import s from './App.css';

const App = () => {
  return (
    <div className={s.root}>
      <Button text="Launch project" />
    </div>
  );
};

export default App;
