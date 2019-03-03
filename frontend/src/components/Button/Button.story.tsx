import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from 'components/Button';

storiesOf('Button', module)
  .add('Default', () => <Button text="Test button" />)
  .add('Secondary', () => <Button secondary text="Secondary button" />);
