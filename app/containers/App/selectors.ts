import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';


const selectRouter = (state: ApplicationRootState) => state.router;

const makeSelectLocation = () =>
  createSelector(selectRouter, routeState => routeState.location);

export { makeSelectLocation };
