import { addons } from '@storybook/manager-api';
import { create,  } from '@storybook/theming/create';

const theme = create({
  base: 'light',

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  brandTitle: 'React Express Component Library',
  brandUrl: '',
  brandImage: `${process.env.STORYBOOK_BASE_PATH ?? '/'}logo.svg`,
  brandTarget: '_self',
});

const themes = {
  light: theme,
};

addons.setConfig({
  theme: themes.light
});
