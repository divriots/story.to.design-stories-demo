import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { TextInput, TextInputProps } from '../src/text-input';

const meta: Meta = {
  title: 'Inputs/TextInput',
  component: TextInput,
};

export default meta;

export const Playground: StoryObj<TextInputProps> = {
  argTypes: {
    label: { type: { name: 'string', required: true }, control: 'text', defaultValue: 'Text input' },
    description: { type: 'string', control: 'text' },
    placeholder: { type: 'string', control: 'text' },
    required: { type: 'boolean', control: 'boolean' },
    disabled: { type: 'boolean', control: 'boolean' },
    error: { type: 'string', control: 'text' },
  },
  parameters: {
    s2d: {
      variantProperties: [
        {
          fromArg: 'description',
          values: ['', { name: 'has description', argValue: 'Description of the text input' }],
        },
        {
          fromArg: 'placeholder',
          values: ['', { name: 'has placeholder', argValue: 'Placeholder of the text input' }],
        },
        'required',
        'disabled',
        {
          fromArg: 'error',
          values: ['', { name: 'has error', argValue: 'Text input is invalid', excludedArgs: { disabled: true } }],
        },
        ':hover',
        ':focus',
      ],
    },
  },
  render: (args) => {
    return (
      <div style={{ width: '300px' }}>
        <TextInput {...args}></TextInput>
      </div>
    );
  },
};
