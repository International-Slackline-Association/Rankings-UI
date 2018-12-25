/**
 *
 * Asynchronously loads the component for AdminAthlete
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'), {
  LoadingComponent: undefined,
});
