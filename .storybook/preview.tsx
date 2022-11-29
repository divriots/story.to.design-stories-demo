import { MantineProvider } from '@mantine/core';
import * as React from 'react';
import { theme } from '../theme';

export const decorators = [(renderStory: Function) => <ThemeWrapper>{renderStory()}</ThemeWrapper>];

function ThemeWrapper(props: { children: React.ReactNode }) {
  return (
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      {props.children}
    </MantineProvider>
  );
}
