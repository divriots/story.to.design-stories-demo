import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import * as React from 'react';
import type { IconProps } from '../src/icon';
import { Icon, iconNames } from '../src/icon';

const meta: Meta = {
  title: 'Icons/Icon',
  component: Icon,
};

export default meta;

export const Playground: StoryObj<IconProps> = {
  argTypes: {
    icon: {
      type: { name: 'string', required: true },
      control: 'select',
      options: iconNames,
    },
  },
  args: {
    icon: iconNames[0]
  },
  parameters: {
    s2d: {
      variantProperties: ['icon'],
    },
  },
};

export const All: StoryFn<IconProps> = () => (
  <>
    {iconNames.map((name, index) => {
      return <Icon icon={name} key={index} />;
    })}
  </>
);
