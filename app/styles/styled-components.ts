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
  fontFamily: string;
  breakpoints: IBreakpoints;
}

import * as styledComponents from 'styled-components';

export const colors = {
  green: '#21D38E',
  gray: '#575757',
  grayDark: '#4A4A4A',
  grayDarker: '#404040',
  white: '#FFF',
  grayLight: '#AEB0AF',
  red: '#F46060',
  orange: '#F7931A',
  paleBlue: '#00A099',
  paleWhite: '#D9D9D9',
};

export const theme = {
  default: {
    primary: colors.green,
    componentBackground: colors.paleBlue,
    appBackground: colors.paleWhite,
    border: colors.grayLight,
    textPrimary: colors.grayDark,
    textSecondary: colors.grayLight,
    textInverted: colors.white,
    error: colors.red,
    warning: colors.orange,
    popBackground: colors.white,
    modalBackground: '#222',
    fontFamily: '\'Source Sans Pro\', sans-serif;',
    breakpoints,
  },
};

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  IThemeInterface
>;

export { css, injectGlobal, keyframes, ThemeProvider };
export default styled;
