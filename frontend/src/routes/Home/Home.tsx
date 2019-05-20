import React from 'react';
import Button from 'components/Button';
import * as routes from 'constants/routes';
import { navigate } from 'utilities/history';
import s from './Home.pcss';

const Home = () => {
  const handleClick = () => {
    navigate({ routeName: routes.names.tasks });
  };

  return (
    <div className={s.root}>
      <Button text="Launch project" onClick={handleClick} />
    </div>
  );
};

export default Home;
