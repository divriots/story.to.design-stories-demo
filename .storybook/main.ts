import type { StorybookConfig } from '@storybook/types';

module.exports = <StorybookConfig>{
  stories: ['../*/stories/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: '@storybook/react-vite',
  typescript: {
    reactDocgen: false,
  },
};
