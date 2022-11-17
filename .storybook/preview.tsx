import { MantineProvider } from '@mantine/core';
import * as React from 'react';
import { theme } from '../theme';

export const decorators = [(renderStory: Function) => <ThemeWrapper>{renderStory()}</ThemeWrapper>];

function ThemeWrapper(props: { children: React.ReactNode }) {
  return (
    <div id="root">
      {/* temporary workaround until S2D supports SB7 default root `#storybook-root` */}
      {/* TODO: remove when `#storybook-root` is supported */}
      <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
        {props.children}
      </MantineProvider>
    </div>
  );
}
