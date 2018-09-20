import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';


const selectTopBarDomain = (state: ApplicationRootState) => {
  return state.topBarTabs;
};

const makeSelectTabItems = () =>
  createSelector(selectTopBarDomain, state => {
    return state.items; // return all items
  });


export { makeSelectTabItems };
