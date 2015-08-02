'use strict';

const expect = require('expect');
const { isFSA } = require('flux-standard-action');

const increment = require('../increment');
const { INCREMENT } = require('../../constants');

describe('increment creator', () => {

  it('creates a FSA-compatible action', (done) => {
    const action = increment();
    expect(isFSA(action)).toEqual(true);
    done();
  });

  it('creates an increment action', (done) => {
    const action = increment();
    expect(action).toEqual({ type: INCREMENT, payload: {} });
    done();
  });
});
