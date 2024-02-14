import React from 'react';

class FruitList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fruits: ['Apple', 'Banana', 'Orange', 'Grape', 'Mango']
    };
  }

  render() {
    return (
      <div>
        <h1>List of Fruits</h1>
        <ul>
          {this.state.fruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default FruitList;
