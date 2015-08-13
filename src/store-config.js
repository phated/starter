'use strict';

const { devTools, persistState } = require('redux-devtools');

const storeConfig = {
  // Put enhancers here
  enhancers: [
    devTools(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
  ],
  // Put middleware here
  middleware: []
};

module.exports = storeConfig;
