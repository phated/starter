'use strict';

const expect = require('expect');

const count = require('../count');
const { INCREMENT, DECREMENT } = require('../../constants');

describe('count reducer', () => {

  it('handles initial state', (done) => {
    const state = count(undefined, {});
    expect(state).toEqual(0);
    done();
  });

  it('handles previous state', (done) => {
    const state = count(1, {});
    expect(state).toEqual(1);
    done();
  });

  it('handles increment action', (done) => {
    const state = count(1, { type: INCREMENT, payload: {} });
    expect(state).toEqual(2);
    done();
  });

  it('handles decrement action', (done) => {
    const state = count(-1, { type: DECREMENT, payload: {} });
    expect(state).toEqual(-2);
    done();
  });
});
