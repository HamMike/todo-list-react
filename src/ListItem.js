import React, { Component } from 'react';
import './App.css';

class ListItem extends Component {
  render() {
    return (
      <div>

      <li>
        {this.props.doThis}
        <button onClick={ this.props.deleteItem }>x</button>
      </li>

      </div>
    );
  }
}

export default ListItem;
