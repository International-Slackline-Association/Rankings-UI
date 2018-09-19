import breakpoints, { IBreakpoints } from './breakpoints';

// theme.ts
export interface IThemeInterface {
  primary: string;
  componentBackground: string;
  appBackground: string;
  border: string;
  textPrimary: string;
  textSecondary: string;
  textInverted: string;
  error: string;
  warning: string;
  popBackground: string;
  modalBackground: string;
  // fontFamily: string;
  breakpoints: IBreakpoints;
}

import * as styledComponents from 'styled-components';

export const colors = {
  green: '#21D38E',
  gray: '#575757',
  grayDark: '#474F60',
  grayDarker: '#404040',
  white: '#FFF',
  grayLight: '#9098A6',
  red: '#F46060',
  isaRed: '#f04d32',
  orange: '#F7931A',
  isaBlue: '#26a69c',
  paleWhite: '#FBFBFB',
  lightBorder: '#DCDADA',
};

export const theme = {
  default: {
    primary: colors.green,
    componentBackground: colors.white,
    appBackground: colors.paleWhite,
    border: colors.lightBorder,
    textPrimary: colors.grayDark,
    textSecondary: colors.grayLight,
    textInverted: colors.white,
    error: colors.red,
    warning: colors.orange,
    popBackground: colors.white,
    modalBackground: '#222',
    // fontFamily: '\'Source Sans Pro\', sans-serif;',
    breakpoints: breakpoints,
  },
};

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<IThemeInterface>;

export { css, injectGlobal, keyframes, ThemeProvider };
export default styled;
