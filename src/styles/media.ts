/*
 * Media queries utility
 */

import {
  css,
  DefaultTheme,
  CSSObject,
  InterpolationFunction,
  ThemedStyledProps,
  Interpolation,
  FlattenInterpolation,
} from 'styled-components/macro';
import { breakpoints } from './breakpoints';

/*
 * Taken from https://github.com/DefinitelyTyped/DefinitelyTyped/issues/32914
 */

// Iterate through the sizes and create a media template
export const media = (Object.keys(breakpoints) as Array<
  keyof typeof breakpoints
>).reduce((acc, label) => {
  acc[label] = (first: any, ...interpolations: any[]) => css`
    @media (min-width: ${breakpoints[label]}px) {
      ${css(first, ...interpolations)}
    }
  `;

  return acc;
}, {} as { [key in keyof typeof breakpoints]: MediaFunction });

/*
 * @types/styled-component is not working properly as explained in the github issue referenced above.
 * We must overcome this with custom typings, however, this might not work in time as the styled-components update.
 * Be carefull and keep an eye on the issue and the possible improvements
 */
type MediaFunction = <P extends object>(
  first:
    | TemplateStringsArray
    | CSSObject
    | InterpolationFunction<ThemedStyledProps<P, DefaultTheme>>,
  ...interpolations: Array<Interpolation<ThemedStyledProps<P, DefaultTheme>>>
) => FlattenInterpolation<ThemedStyledProps<P, DefaultTheme>>;
