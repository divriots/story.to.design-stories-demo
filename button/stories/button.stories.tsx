import type { Meta } from '@storybook/react';
import type { ButtonProps } from '@mantine/core';
import { Button } from '@mantine/core';

export default {
  title: 'Buttons/Button',
  component: Button,
  args: {
    children: 'Button',
  },
} as Meta<ButtonProps>;

export const Playground = {};
