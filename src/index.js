'use strict';

const React = require('react');
const createStore = require('@phated/redux-create-store');

const { DevTools, DebugPanel, LogMonitor } = require('redux-devtools/lib/react');

const reducers = require('./reducers');
const storeConfig = require('./store-config');
const Application = require('./views/application');

const store = createStore(reducers, storeConfig);

const container = document.createElement('div');

React.render(<Application store={store} />, container);

document.body.appendChild(container);

if(process.env.NODE_ENV !== 'production'){
  const devtoolsContainer = document.createElement('div');

  const devtoolsComponent = (
    <DebugPanel top right bottom>
      <DevTools store={store} monitor={LogMonitor} />
    </DebugPanel>
  );

  React.render(devtoolsComponent, devtoolsContainer);

  document.body.appendChild(devtoolsContainer);
}

if(module.hot){
  module.hot.accept('./reducers', function(){
    const newReducers = require('./reducers');
    const newStore = createStore(newReducers, storeConfig);
    const replacementReducer = newStore.getReducer();
    store.replaceReducer(replacementReducer);
    React.render(<Application store={store} />, container);
  });
}
