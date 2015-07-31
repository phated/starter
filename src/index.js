'use strict';

const React = require('react');
const createStore = require('@phated/redux-create-store');

const reducers = require('./reducers');
const Application = require('./views/application');

const store = createStore(reducers);

const container = document.createElement('div');

React.render(<Application store={store} />, container);

document.body.appendChild(container);
