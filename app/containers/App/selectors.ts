import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';

const selectGlobal = (state: ApplicationRootState) => state.global;

const selectRouter = (state: ApplicationRootState) => state.router;

const makeSelectLocation = () =>
  createSelector(selectRouter, routeState => routeState.location);

export { selectGlobal, makeSelectLocation };
