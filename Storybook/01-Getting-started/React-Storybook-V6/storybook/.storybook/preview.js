import React from "react";
import { addDecorator} from '@storybook/react';
import Center from "../src/components/Center/Center";
import { ThemeProvider, theme, CSSReset, Box } from '@chakra-ui/core';
import { withA11y} from '@storybook/addon-a11y';

addDecorator(withA11y);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Box m='4'>
        <Story />
      </Box>
    </ThemeProvider>
  )
]