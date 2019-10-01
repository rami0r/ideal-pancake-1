import './App.css';

import React, {Component} from 'react';

class App extends Component {
  state = {
    name: 'Stheffany'
  }

  render () {
    const { name } = this.state;

    return (
      <div>
        Hello, {name}
      </div>
    )
  }
}

export default App;
