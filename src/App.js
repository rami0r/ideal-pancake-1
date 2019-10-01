import './App.css';

import React, {Component} from 'react';

export class App extends Component {
  render () {
    const {name} = this.props;
    return (
      <div>
        Hello, world! from {name}
      </div>
    )
  }
}

export const AnotherApp = ({name}) =>  <div> Hello, world! from {name}</div>

