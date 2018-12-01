/**
 *
 * Asynchronously loads the component for Rankings
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'), {
  LoadingComponent: undefined,
});
