import {
  ThemeProvider as SCThemeProvider,
  ThemeProviderProps as SCThemeProviderProps,
} from 'styled-components';

const defaultTheme = {
  colors: {
    'color-primary': '#5597fa',
    'color-primary-highlight': '#3072d7',
    'color-neutral-lightest': '#fff',
    'color-neutral-light': '#e8e8e8',
    'color-neutral': '#a2a2a2',
    'color-neutral-dark': '#4d4d4d',
    'color-neutral-darkest': '#000',
    'disabled-background-color': '#e8e8e8',
  },
  borders: [0, '2px solid transparent', '2px solid #000'],
  space: [0, '0.2rem', '0.4rem', '0.8rem', '1.2rem', '1.6rem', '3.4rem'],
  sizes: [0, '1.2rem', '2rem', '2.8rem', '3.6rem', '4.4rem'],
  radii: [0, '2px', '4px', '8px', '16px', '50%'],
  fonts: {
    'font-family-body':
      '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol',
  },
};

export type ThemeProviderProps = Partial<SCThemeProviderProps<any>>;

const ThemeProvider = (props: ThemeProviderProps) => {
  return <SCThemeProvider theme={defaultTheme} {...props} />;
};

export { defaultTheme, ThemeProvider };
