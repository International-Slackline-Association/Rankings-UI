/**
 *
 * Asynchronously loads the component for Rankings
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
