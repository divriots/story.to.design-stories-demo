import { MantineThemeOverride } from '@mantine/core';
import { DEFAULT_THEME } from '@mantine/core';

export const theme: MantineThemeOverride = {
  primaryColor: 'pink',
  defaultRadius: 'xl',
  fontFamily: `Inter,${DEFAULT_THEME.fontFamily}`,
  fontSizes: {
    xs: 16,
    sm: 18,
    md: 20,
    lg: 22,
    xl: 24,
  },
};
