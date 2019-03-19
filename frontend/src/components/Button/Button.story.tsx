import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from 'components/Button';

storiesOf('Button', module)
  .add('Default', () => <Button text="Default button" />)
  .add('Secondary', () => <Button variant="secondary" text="Secondary button" />);
