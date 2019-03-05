import { configure } from '@storybook/react';
import 'styles/reset.css';
import 'styles/global.css';

const req = require.context('../src', true, /\.story\.tsx$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
