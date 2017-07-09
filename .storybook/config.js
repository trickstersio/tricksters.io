/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import { setOptions } from '@storybook/addon-options';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import theme from '../utils/theme';

setOptions({
  name: 'Tricksters.IO Storybook',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: false,
  showSearchBox: false,
  downPanelInRight: false,
  sortStoriesByKind: false,
});

function loadStories() {
  require('../stories');
}

addDecorator(story =>
  <ThemeProvider theme={theme}>
    {story()}
  </ThemeProvider>,
);

configure(loadStories, module);
