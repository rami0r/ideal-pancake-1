import { Link } from "react-router-dom";
import React from 'react'

const Finale = ({ location: { state } }) =>
  <main className="Page">
    <header className="Header">
      <h3> Finale </h3>
    </header>
    <section className="Container">
      <div className="Container Info">
        <span> Player: {state.name} </span>
        <span> Score: {state.score} </span>
      </div>
      <Link
        className="Form__Button"
        to={{
          pathname: "/",
        }}
      >
        Play again
      </Link>
    </section>
  </main>


export default Finale
