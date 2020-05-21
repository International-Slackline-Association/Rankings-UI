import * as slice from '../slice';
import { ThemeState, ThemeKeyType } from '../types';
import { RootState } from 'types';
import { themes } from '../themes';
import { DefaultTheme } from 'styled-components';

describe('theme slice', () => {
  let state: ThemeState;

  beforeEach(() => {
    state = slice.initialState;
  });

  it('should return the initial state', () => {
    expect(slice.reducer(undefined, { type: '' })).toEqual(state);
  });

  describe('selectors', () => {
    it('selectTheme', () => {
      let state: RootState = {};
      expect(slice.selectTheme(state)).toEqual<DefaultTheme>(themes.light);
      state = {
        theme: { selected: 'system' },
      };
      expect(slice.selectTheme(state)).toEqual<DefaultTheme>(themes.light);
    });

    it('selectThemeKey', () => {
      let state: RootState = {};
      expect(slice.selectThemeKey(state)).toEqual<ThemeKeyType>(
        slice.initialState.selected,
      );

      state = {
        theme: { selected: 'system' },
      };
      expect(slice.selectThemeKey(state)).toEqual<ThemeKeyType>(
        state.theme!.selected,
      );
    });
  });
});
