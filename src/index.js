'use strict';

const React = require('react');
const createStore = require('@phated/redux-create-store');

const reducers = require('./reducers');
const Application = require('./views/application');

const store = createStore(reducers);

const container = document.createElement('div');

React.render(<Application store={store} />, container);

document.body.appendChild(container);

if(module.hot){
  module.hot.accept('./reducers', function(){
    const newReducers = require('./reducers');
    const newStore = createStore(newReducers);
    const replacementReducer = newStore.getReducer();
    store.replaceReducer(replacementReducer);
    React.render(<Application store={store} />, container);
  });
}
