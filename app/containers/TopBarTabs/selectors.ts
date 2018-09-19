import { createSelector } from 'reselect';

import { ApplicationState } from 'types';

const selectTopBarDomain = (state: ApplicationState) => {
  return state.get('topBarTabs');
};

const makeSelectIndex = () =>
  createSelector(selectTopBarDomain, topBarState => {
    return topBarState.get('selectedIndex');
  });

export { makeSelectIndex };
