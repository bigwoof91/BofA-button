import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends Record<string, any> {
    colors: Record<string, any>;
    space: (string | number)[];
    sizes: (string | number)[];
    radii: (string | number)[];
    sizes: (string | number)[];
    fonts: Record<string, string>;
    borders: (string | number)[];
  }
}
