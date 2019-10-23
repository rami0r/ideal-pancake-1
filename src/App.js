import "./App.css";

import * as TodoModel from "./models/TodoModel";

import React, { Component } from "react";

import List from "./view/List"

class App extends Component {
  state = {
    name: "",
    list: [],
  };

  onChange = event => {
    const { value } = event.target;
    this.setState(() => ({
      name: value
    }));
  };

  onClick = () => {
    TodoModel.add(this.state.name)
      .then(this.updateList)
      .catch( error => console.error(error));
  };

  updateList = () => {
    TodoModel.getTodos()
      .then(list => this.setList(list))
      .catch(error => console.error(error));

    this.setState(() => ({
      name: ""
    }))
  }

  onDelete = id => () => {
    TodoModel.destroy(id)
      .then(this.updateList)
      .catch(error => console.error(error))
  };

  componentDidMount() {
    TodoModel.getTodos()
      .then(list => this.setList(list))
      .catch(error => console.error(error));
  }

  setList = newList => {
    this.setState(() => ({
      list: newList
    }));
  };

  render() {
    const { name, list, show } = this.state;

    return (
      <>
        <h1>To do list</h1>
        <input type="text" value={name} onChange={this.onChange} />
        <button type="button" onClick={this.onClick}>
          +
        </button>
        <List list={list} onDelete={this.onDelete} />
      </>
    );
  }
}

export default App;
