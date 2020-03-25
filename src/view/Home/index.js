import { Component } from 'react'
import { Link } from "react-router-dom";
import React from 'react'

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
    }
  }

  onChange = (event) => {
    const { name, value } = event.target

    this.setState({ [name]: value })
  }

  render() {
    const { name } = this.state;

    return (
      <main className="Page">
        <header className="Header">
          <h3> Home </h3>
        </header>
        <section className="Container">
          <div className="Container Form">
            <label className="Form__Label">
              Name
            </label>
            <input
              className="Form__Input"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
            />
            <Link
              className="Form__Button"
              to={{
                pathname: "/quiz",
                state: { name }
              }}
            >
              Play
            </Link>
          </div>
        </section>
      </main>
    )
  }

}

export default Home
