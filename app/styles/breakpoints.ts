export interface IBreakpoints {
  mobile: number;
  tablet: number;
  desktop: number;
  desktopLarge: number;
}

const breakpoints: IBreakpoints = {
  mobile: 0,
  tablet: 640,
  desktop: 1024,
  desktopLarge: 1140,
};

export default breakpoints;
