'use strict';

const {
  DECREMENT
} = require('../constants');

function decrement(){
  return {
    type: DECREMENT,
    payload: {}
  };
}

module.exports = decrement;
