'use strict';

const React = require('react');
const { createContainer } = require('sovereign');

const { increment, decrement } = require('../creators');

class Application extends React.Component {
  constructor(...args){
    super(...args);

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment(){
    const { store } = this.props;

    store.dispatch(increment());
  }

  decrement(){
    const { store } = this.props;

    store.dispatch(decrement());
  }

  render(){
    const { count } = this.props;

    return (
      <div>
        <h1>Hello starter</h1>
        <div>Example: {count}</div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

module.exports = createContainer(Application, {
  getStores({ store }){
    return {
      store
    };
  },

  getPropsFromStores({ store }){
    const { count } = store.getState();

    return {
      count
    };
  }
});
