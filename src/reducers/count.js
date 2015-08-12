'use strict';

const {
  INCREMENT,
  DECREMENT
} = require('../constants');

const initial = 0;

function count(state = initial, { type }){
  switch(type){
    case INCREMENT:
      return (state + 1);
    case DECREMENT:
      return (state - 1);
    default:
      return state;
  }
}

module.exports = count;
