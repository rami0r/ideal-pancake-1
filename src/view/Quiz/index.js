import {
  RIGHT_ANSWER,
  WRONG_ANSWER,
  getPokemons,
  isAnswerRigth,
  isThereANextQuestion
} from '../../models/PokemonModel';
import React, { Component } from 'react'

import { Link } from "react-router-dom";
import Question from './Question';

class Quiz extends Component {
  constructor(props) {
    super(props)

    this.state = {
      score: 0,
      questions: [],
      index: 0,
      disableNext: true,
      marker: '',
      finish: false
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

    this.setState({ questions });
  }

  confirmQuestion = (event, answer) => {
    event.preventDefault();
    const { index, questions, score, disableNext } = this.state;

    isAnswerRigth(answer, questions[index].rightAnswer.name)
      ? this.setState({ score: score + 1, marker: RIGHT_ANSWER })
      : this.setState({ marker: WRONG_ANSWER })

    this.setState({ disableNext: !disableNext })

    if (!isThereANextQuestion(index)) {
      this.setState({ finish: true })
    }
  }

  resetQuestionState = () => {
    const { index, disableNext } = this.state;

    this.setState({
      index: index + 1,
      disableNext: !disableNext,
      marker: ''
    })
  }

  nextQuestion = () => {
    const { index } = this.state;

    if (isThereANextQuestion(index)) {
      this.resetQuestionState()
    }
  }

  render() {
    const {
      score,
      questions,
      index,
      disableNext,
      marker,
      finish
    } = this.state;
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
                confirmQuestion={this.confirmQuestion}
                onClick={this.nextQuestion}
                index={index}
                disableNext={disableNext}
                marker={marker}
                next={isThereANextQuestion(index)}
              />
            ) : (
                <span>
                  loading...
                </span>
              )
          }
          <div className="Container">
            {
              finish && (
                <Link
                  className="Form__Button"
                  to={{
                    pathname: "/finale",
                    state: { name, score }
                  }}
                >
                  Finish
                </Link>
              )
            }


          </div>
        </section>
      </main>
    )
  }
}

export default Quiz
