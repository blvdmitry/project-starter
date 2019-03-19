import React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from 'components/Icon';

storiesOf('Icon', module)
  .add('Default', () => <Icon name="settings" />)
  .add('Small', () => <Icon size="small" name="settings" />)
  .add('Medium', () => <Icon size="medium" name="settings" />)
  .add('Large', () => <Icon size="large" name="settings" />);
