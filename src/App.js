import "./App.css";

import * as TodoModel from "./models/TodoModel";

import React, { Component } from "react";

import List from "./view/List"

class App extends Component {
  state = {
    name: "",
    list: [],
    show: true
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

    console.log("Component did mount");

  }

  setList = newList => {
    this.setState(() => ({
      list: newList
    }));
  };

  render() {
    const { name, list, show } = this.state;

    return (
      <div>
        <input type="text" value={name} onChange={this.onChange} />
        <button type="button" onClick={this.onClick}>
          +
        </button>
        {show && <List list={list} onDelete={this.onDelete} />}
      </div>
    );
  }
}

export default App;
