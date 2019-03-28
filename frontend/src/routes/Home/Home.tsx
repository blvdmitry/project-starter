import React from 'react';
import Button from 'components/Button';
import history from 'utilities/history';
import s from './Home.pcss';

const Home = () => {
  const handleClick = () => {
    history.push('/tasks/');
  };

  return (
    <div className={s.root}>
      <Button text="Launch project" onClick={handleClick} />
    </div>
  );
};

export default Home;
