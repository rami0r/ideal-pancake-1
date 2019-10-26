import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import * as TodoModel from './models/TodoModel';

import React, { Component } from "react";

import List from "./views/List"

class App extends Component {
  state = {
    name: "",
    list: []
  };

  componentDidMount () {
    this.getTodos();
  }

  getTodos = () => {
    TodoModel.getTodos()
      .then((value)=> this.updateList(value))
      .catch((error) => console.error(error))
  }

  updateList = (value) => {
    this.setState(() => ({
      list: value
    }))
  }

  onChange = event => {
    const { value } = event.target;

    this.setState(() => ({
      name: value
    }));
  };

  onClick = () => {
    const { name } = this.state;
    TodoModel.add(name)
      .then(this.getTodos)
      .catch(error => console.error(error))
  };

  remove = id => {
    TodoModel.destroy(id)
      .then(this.getTodos)
      .catch(error => console.error(error))
  };

  render() {
    const { name, list } = this.state;

    return (
      <div>
        <input type="text" value={name} onChange={this.onChange} />
        <button onClick={this.onClick}>Add</button>
        <List list={list} onRemove={this.remove} />
      </div>
    );
  }
}



export default App;
