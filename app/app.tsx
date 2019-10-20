/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import '@babel/polyfill';

// Import all the third party stuff
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import FontFaceObserver from 'fontfaceobserver';
import history from 'utils/history';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';

import 'sanitize.css/sanitize.css';

// Import root app
import App from 'containers/App';

// Import Language Provider
import LanguageProvider from 'containers/LanguageProvider';

// Load the favicon and the .htaccess file
import '!file-loader?name=[name].[ext]!./images/favicon.ico';
// tslint:disable-next-line:max-line-length
import 'file-loader?name=.htaccess!./.htaccess';

import configureStore from './configureStore';

// Import i18n messages
import { translationMessages } from 'i18n';

// Observe loading of Open Sans (to remove open sans, remove the <link> tag in
// the index.html file and this observer)
// const openSansObserver = new FontFaceObserver('Roboto', {});

// // When Open Sans is loaded, add a font-family using Open Sans to the body
// openSansObserver.load().then(() => {
//   document.body.classList.add('fontLoaded');
// });

// Create redux store with history
const initialState = {};
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app') as HTMLElement;

const render = (messages, Component = App) => {
  ReactDOM.render(
    <Provider store={store}>
      <LanguageProvider messages={messages}>
        <ConnectedRouter history={history}>
          <Component />
        </ConnectedRouter>
      </LanguageProvider>
    </Provider>,
    MOUNT_NODE,
  );
};

declare const module: any;
if (module.hot) {
  module.hot.accept(['./i18n', './containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    // tslint:disable-next-line:max-line-length
    const App = require('./containers/App').default; // https://github.com/webpack/webpack-dev-server/issues/100
    render(translationMessages, App);
  });
}
// Chunked polyfill for browsers without Intl support
if (!(window as any).Intl) {
  new Promise(resolve => {
    resolve(import('intl'));
  })
    .then(() =>
      Promise.all([
        import('intl/locale-data/jsonp/en.js'),
        import('intl/locale-data/jsonp/de.js'),
      ]),
    ) // eslint-disable-line prettier/prettier
    .then(() => render(translationMessages))
    .catch(err => {
      throw err;
    });
} else {
  render(translationMessages);
}

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  OfflinePluginRuntime.install({
    onUpdateReady: () => {
      // Tells to new SW to take control immediately
      OfflinePluginRuntime.applyUpdate();
    },
  });
}
