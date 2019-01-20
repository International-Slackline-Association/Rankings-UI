import breakpoints from './breakpoints';

const AppConstants = {
  NavBarHeight: (size: number) => {
    switch (size) {
      case breakpoints.desktopLarge:
      case breakpoints.desktop:
        return 48;
      case breakpoints.tablet:
        return 48;
      case breakpoints.mobile:
        return 36;
      default:
        return 36;
    }
  },
  TopBarHeight: (size: number) => {
    switch (size) {
      case breakpoints.desktopLarge:
      case breakpoints.desktop:
        return 64;
      case breakpoints.tablet:
        return 48;
      case breakpoints.mobile:
        return 36;
      default:
        return 36;
    }
  },

  LeftPadding: (size: number) => {
    switch (size) {
      case breakpoints.desktopLarge:
      case breakpoints.desktop:
        return 64;
      case breakpoints.tablet:
        return 18;
      case breakpoints.mobile:
        return 16;
      default:
        return 16;
    }
  },
};
export default AppConstants;
