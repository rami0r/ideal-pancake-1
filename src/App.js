import './App.css';

import React, {Component} from 'react';

class App extends Component {
  state = {
    name: '',
    list:[]
  }

  onChange = event => {
    const { value } = event.target;
    this.setState( () => ({
      name: value
    }));
  }
  
  onClick = () => {
    this.setState(()=>({
      name: '',
      list: [...this.state.list, this.state.name]
    }))
  }

  onDelete = value => () => {
    this.setState(() => ({
      list: this.state.list.filter(item => item !== value)
    }))
  }

  render () {
    const { name, list } = this.state;

    return (
      <div>
        <input type="text" value={name} onChange={this.onChange}/>
        <button type="button" onClick={this.onClick}>Add</button>
        <List list={list} onDelete={this.onDelete}/>
      </div>
    )
  }
}

const List = ({list, onDelete}) => {
  const items = list.map(value => <li key={value}>{value} <button type="button" onClick={onDelete(value)}>X</button></li>);
  return <ul>{items}</ul>
}

export default App;
