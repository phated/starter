'use strict';

const {
  EXAMPLE
} = require('../constants');

const initial = 0;

function example(state = initial, { type, payload }){
  switch(type){
    case EXAMPLE:
      return payload.value;
    default:
      return state;
  }
}

module.exports = example;
