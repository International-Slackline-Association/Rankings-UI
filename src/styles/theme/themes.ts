import { rgba } from 'polished';

export const colors = {
  green: '#21D38E',
  gray: '#575757',
  grayDark: '#474F60',
  grayDarker: '#404040',
  white: '#FFF',
  grayLight: '#9098A6',
  red: '#F46060',
  isaRed: '#E05E5E',
  orange: '#F7931A',
  isaBlue: '#00A099',
  paleWhite: '#F0F0F0',
  lightBorder: '#DCDADA',
  overlayBackground: 'rgba(22, 18, 32, 0.85)',

  textPrimary: 'rgba(0, 0, 0, 0.87)',
  textSecondary: 'rgba(0, 0, 0, 0.54)',
  divider: 'rgba(0, 0, 0, 0.12)',
  appBackground: '#F5F8FF',
  textTopBar: 'red',
};

const lightTheme = {
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
  textTopBar: colors.textTopBar,
  error: colors.red,
  warning: colors.orange,
  popBackground: colors.white,
  modalBackground: '#222',

  primaryDarker: '#00807B',
  primaryDarkest: '#006965',
  primaryLighter: '#21ACA7',
  primaryLightest: '#46C5C0',

  accent: colors.isaRed,
  accentSecondary: '#FBBC72',

  newTextPrimary: colors.grayDark,
  newTextPrimaryLighter: rgba(colors.grayDark, 0.5),
};

export type Theme = typeof lightTheme;

export const themes = {
  light: lightTheme,
};
