import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  // Using arrow functions to bind 'this' properly
  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  };

  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1
    }));
  };

  render() {
    return (
      <>
        <h1>This is the number of products: {this.state.count}</h1>
        <button onClick={this.increment}>Increment +</button>
        <button onClick={this.decrement}>Decrement -</button>
      </>
    );
  }
}

export default Counter;
