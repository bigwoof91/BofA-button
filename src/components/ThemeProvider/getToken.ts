import get from 'lodash/get';
import { DefaultTheme } from 'styled-components';
import { defaultTheme } from './ThemeProvider';

export type Scale = keyof typeof defaultTheme;
export type OrdinalTokens = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type Token =
  | keyof typeof defaultTheme.colors
  | keyof typeof defaultTheme.fonts
  | OrdinalTokens;

/**
 *
 * @desc styleFn to get theme tokens from theme context
 */
const getToken =
  (token: Token, scale: Scale = 'colors') =>
  (props: { theme: DefaultTheme }): string => {
    return get(props.theme, `${scale}.${token}`, null);
  };

export { getToken };
