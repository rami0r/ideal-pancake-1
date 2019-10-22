import "./App.css";

import React, { Component } from "react";

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
    this.setState(() => ({
      name: "",
      list: [...this.state.list, this.state.name]
    }));
  };

  onDelete = value => () => {
    this.setState(() => ({
      list: this.state.list.filter(item => item !== value),
      show: false
    }));
  };

  componentDidMount() {
    console.log("Component did mount");
  }

  render() {
    const { name, list, show } = this.state;

    return (
      <div>
        <input type="text" value={name} onChange={this.onChange} />
        <button type="button" onClick={this.onClick}>
          Add
        </button>
        {show && <List list={list} onDelete={this.onDelete} />}
      </div>
    );
  }
}

class List extends Component {
  componentWillUnmount() {
    console.log("Unmount");
  }

  render() {
    const { list, onDelete } = this.props;

    const items = list.map(value => (
      <li key={value}>
        {value}
        <button type="button" onClick={onDelete(value)}>
          X
        </button>
      </li>
    ));

    return (
      <ul>{items}</ul>
    );
  }
}

export default App;
