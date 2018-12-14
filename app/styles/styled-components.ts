import breakpoints, { IBreakpoints } from './breakpoints';

// theme.ts
export interface IThemeInterface {
  primary: string;
  componentBackground: string;
  componentBackgroundSecondary: string;
  componentBackgroundInverted: string;
  appBackground: string;
  border: string;
  divider: string;
  textPrimary: string;
  textSecondary: string;
  textInverted: string;
  textInvertedSecondary: string;
  error: string;
  warning: string;
  popBackground: string;
  modalBackground: string;
  // fontFamily: string;
  breakpoints: IBreakpoints;
}

import * as styledComponents from 'styled-components';
import createMuiTheme, {
  ThemeOptions,
} from '@material-ui/core/styles/createMuiTheme';

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
  isaBlue: '#00A099',
  paleWhite: '#F0F0F0',
  lightBorder: '#DCDADA',
  overlayBackground: 'rgba(22, 18, 32, 0.85)',

  textPrimary: 'rgba(0, 0, 0, 0.87)',
  textSecondary: 'rgba(0, 0, 0, 0.54)',
  divider: 'rgba(0, 0, 0, 0.12)',
  appBackground: '#F0F0F0',
};

export const theme = {
  default: {
    primary: colors.isaBlue,
    componentBackground: colors.white,
    componentBackgroundSecondary: colors.isaBlue,
    componentBackgroundInverted: colors.grayDark,
    appBackground: colors.appBackground,
    border: colors.lightBorder,
    divider: colors.divider,
    textPrimary: colors.textPrimary,
    textSecondary: colors.textSecondary,
    textInverted: colors.white,
    textInvertedSecondary: colors.isaBlue,
    error: colors.red,
    warning: colors.orange,
    popBackground: colors.white,
    modalBackground: '#222',
    // fontFamily: '\'Source Sans Pro\', sans-serif;',
    breakpoints: breakpoints,
  },
};

const muiTheme = createMuiTheme({
  palette: {
    primary: {
      dark: colors.isaBlue,
      light: colors.isaBlue,
      contrastText: colors.isaBlue,
      main: colors.isaBlue,
    },
    secondary: {
      dark: colors.isaRed,
      light: colors.isaRed,
      contrastText: colors.isaRed,
      main: colors.isaRed,
    },
  },
});

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  withTheme,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  IThemeInterface
>;

export {
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  withTheme,
  muiTheme,
};
export default styled;
