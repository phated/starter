'use strict';

const expect = require('expect');
const { isFSA } = require('flux-standard-action');

const decrement = require('../decrement');
const { DECREMENT } = require('../../constants');

describe('decrement creator', () => {

  it('creates a FSA-compatible action', (done) => {
    const action = decrement();
    expect(isFSA(action)).toEqual(true);
    done();
  });

  it('creates an decrement action', (done) => {
    const action = decrement();
    expect(action).toEqual({ type: DECREMENT, payload: {} });
    done();
  });
});
