import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';

const selectGlobal = (state: ApplicationRootState) => state.global;

const selectRoute = (state: ApplicationRootState) => state.route;

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.location,
);

export {
  selectGlobal,
  makeSelectLocation,
};
