import React, { Component } from 'react'

import Question from './Question';
import { getPokemons } from '../../models/PokemonModel';

class Quiz extends Component {
  constructor(props) {
    super(props)

    this.state = {
      score: 0,
      questions: [],
      index: 0,
      // questions: [{
      //   rightAnswer: { name: 'pikachu', url: 'imagem'},
      //   options: ['pikachu', 'bubalsauro', 'cachorro', 'batata']
      // }]
    }
  }

  componentDidMount() {
    this.setQuestions();
  }

  setQuestions = async () => {
    const questions = await getPokemons();
    this.setState({
      questions
    })
  }

  nextQuestion = () => {
    const { index } = this.state;

    this.setState({
      index: index + 1
    })
  }

  render() {
    const { score, questions, index } = this.state;
    const { name } = this.props.location.state;

    return (
      <main className="Page">
        <section className="Container">
          <div className="Container Info">
            <span> Player: {name} </span>
            <span> Score: {score} </span>
          </div>
          {
            questions.length > 0 ? (
              <Question
                question={questions[index]}
                onClick={this.nextQuestion}
              />
            ) : (
              <span>
                loading...
              </span>
            )
          }
        </section>
      </main>
    )
  }
}

export default Quiz
