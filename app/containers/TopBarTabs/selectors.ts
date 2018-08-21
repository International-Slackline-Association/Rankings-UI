import { createSelector } from 'reselect';
import {} from 'immutable';

const selectTopBarDomain = () => state => state.get('topBarTabs');

const makeSelectIndex = () =>
  createSelector(selectTopBarDomain(), topBarState => {
    return topBarState.get('selectedIndex');
  });

export { makeSelectIndex };
