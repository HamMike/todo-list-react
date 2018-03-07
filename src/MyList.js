import React, { Component } from 'react';
import ListItem from './ListItem';
import './App.css';

class MyList extends Component {
  constructor(props) {
    super()
    this.state = {
      toDoItemArray: [],
      currentItem: ''
    }

  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({
      currentItem: e.target.value
    })
  }

  addItem = (e) => {
    e.preventDefault()
    // checking if currrent item has value (text)
    if (this.state.currentItem) {
    // create a copy
    let toDoItemArrayCopy = Array.from(this.state.toDoItemArray)
    // push item to copy
    toDoItemArrayCopy.push(this.state.currentItem)
    // update state with copy
    this.setState ({
      toDoItemArray: toDoItemArrayCopy,
      currentItem: ''
    })
    }
    this.textInput.focus()
  }

  deleteItem = (e, index) => {
    e.preventDefault()
    let toDoItemArrayCopy = Array.from(this.state.toDoItemArray)
    toDoItemArrayCopy.splice(index, 1)
    this.setState({
      toDoItemArray: toDoItemArrayCopy
    })
    this.textInput.focus()
  }

  clearList = (e) => {
    e.preventDefault()
    this.setState({
      toDoItemArray: []
    })
  }

  render() {
    let jsxTodos = this.state.toDoItemArray.map(
      (listItem, index) => <ListItem key={ index } doThis={ listItem } deleteItem={ (e) => this.deleteItem(e, index) }/> )

    return (
      <div>
        <h1>Things is should stop procastinanting:</h1>
        <ul>
          {jsxTodos}
        </ul>
        <input type='text' ref={ el => { this.textInput = el }} value={ this.state.currentItem } onChange={ this.handleChange } />
        <button onClick={ this.addItem }>Add Item</button>
        <br />
        <button onClick={ this.clearList }>Finished the List</button>
      </div>
    );
  }
}

export default MyList;
