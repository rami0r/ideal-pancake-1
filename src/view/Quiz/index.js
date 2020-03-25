import React, { Component } from 'react'

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

  render() {
    const { score, questions, index } = this.state;
    const { name } = this.props.location.state;

    const question = questions[index];

    return (
      <main className="Page">
        <section className="Container">
          <div className="Container Info">
            <span> Player: {name} </span>
            <span> Score: {score} </span>
          </div>
          {
            questions.length > 0 ? (
              <div className="Container Game">
                <div className="Game__Question">
                  {question.rightAnswer.name}
                </div>
                <div className="Game__Options">
                  {
                    question.options.map(option =>
                      <span>
                        { option }
                      </span>
                    )
                  }
                </div>
              </div>
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
