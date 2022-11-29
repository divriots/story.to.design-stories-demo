import { TextInput as MantineTextInput, TextInputProps as MantineTextInputProps } from '@mantine/core';
import * as React from 'react';

export interface TextInputProps extends React.HTMLAttributes<HTMLInputElement> {
  label: string;
  description?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
}

/**
 * A text input component
 */
export const TextInput = (props: TextInputProps) => {
  return <MantineTextInput {...(props as MantineTextInputProps)}></MantineTextInput>;
};

TextInput.displayName = 'TextInput';
