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
    children: { type: { name: 'string', required: true } },
    variant: {
      type: 'string',
      control: 'radio',
      options: ['primary', 'secondary'],
    },
    compact: { type: 'boolean', control: 'boolean' },
    disabled: { type: 'boolean', control: 'boolean' },
    icon: {
      type: 'string',
      options: iconNames,
      control: 'select',
    },
    iconPosition: {
      if: { arg: 'icon' },
      type: 'string',
      control: 'radio',
      options: ['left', 'right'],
    },
    loading: { type: 'boolean', control: 'boolean' },
  },
  args: {
    children: 'Button',
  },
  parameters: {
    s2d: {
      variantProperties: [
        'variant',
        'compact',
        'disabled',
        {
          fromArg: 'icon',
          values: [iconNames[0]],
        },
        {
          fromArg: 'iconPosition',
          values: [
            { name: 'no icon', argValue: false }, // TODO: `undefined` (also `null`) do not work, `false` is a workaround
            { name: 'left icon', argValue: 'left' },
            { name: 'right icon', argValue: 'right' },
          ],
        },
        'loading',
        ':hover',
        ':focus',
        ':active',
      ],
    },
  },
};
