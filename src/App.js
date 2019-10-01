import './App.css';

import React, {Component} from 'react';

class App extends Component {
  state = {
    name: 'Stheffany'
  }

  onChange = event => {
    const { value } = event.target;
    this.setState( () => ({
      name: value
    }));
  }

  render () {
    const { name } = this.state;

    return (
      <div>
        <input type="text" value={name} onChange={this.onChange}/>
      </div>
    )
  }
}

export default App;
