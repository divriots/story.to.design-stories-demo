import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';
import logoUrl from './logo.svg';

addons.setConfig({
  theme: create({
    base: 'light',
    brandImage: logoUrl,
  }),
});
