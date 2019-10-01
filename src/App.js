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

  render () {
    const { name, list } = this.state;

    return (
      <div>
        <input type="text" value={name} onChange={this.onChange}/>
        <button type="button" onClick={this.onClick}>Add</button>
        <List list={list}/>
      </div>
    )
  }
}

const List = ({list}) => {
  const items = list.map(value => <li key={value}>{value}</li>);
  return <ul>{items}</ul>
}

export default App;
