import { configure } from '@storybook/react';
import 'styles/reset.pcss';
import 'styles/global.pcss';

const req = require.context('../../src', true, /\.story\.tsx$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
