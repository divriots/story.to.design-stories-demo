import type { Meta, StoryObj } from '@storybook/react';
import { iconNames } from '../../icon/src/icon';
import { Button, ButtonProps } from '../src/button';

const meta: Meta = {
  title: 'Buttons/Button',
  component: Button,
};

export default meta;

export const Playground: StoryObj<ButtonProps> = {
  argTypes: {
    children: { type: { name: 'string', required: true }, control: 'text' },
    variant: {
      type: { name: 'string', required: true },
      control: 'select',
      options: ['primary', 'secondary'],
    },
    compact: { type: { name: 'boolean', required: true }, control: 'boolean' },
    disabled: { type: { name: 'boolean', required: true }, control: 'boolean' },
    iconPosition: {
      type: { name: 'string', required: true },
      options: ['none', 'left', 'right'],
      control: { type: 'select' },
    },
    icon: {
      type: { name: 'string', required: false },
      options: [iconNames[0]],
      control: {
        type: 'select',
        labels: {
          undefined: 'none',
          left: 'left',
          right: 'right',
        },
      },
    },
    loading: { type: { name: 'boolean', required: true }, control: 'boolean' },
  },
  args: {
    children: 'Button',
    variant: 'primary',
    compact: false,
    disabled: false,
    iconPosition: undefined,
    icon: undefined,
    loading: false,
  },
};
