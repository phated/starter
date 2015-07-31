'use strict';

const {
  INCREMENT
} = require('../constants');

function increment(){
  return {
    type: INCREMENT,
    payload: {}
  };
}

module.exports = increment;
