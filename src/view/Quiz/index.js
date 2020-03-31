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
      disableNext: true,
      marker: '',
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

  confirmQuestion = (event, answer) => {
    event.preventDefault();
    
    const { index, questions, score, disableNext } = this.state;

    if(answer === questions[index].rightAnswer.name) {
      this.setState({
        score: score + 1,
        marker: '--right'
      })
      alert('Right answer!');
    } else {
      this.setState({
        marker: '--error'
      })
      alert('Wrong answer!');
    }

    this.setState({disableNext: !disableNext})
  }

  nextQuestion = () => {
    const { index, disableNext } = this.state;
    if (index < 4) {
      this.setState({
        index: index + 1,
        disableNext: !disableNext,
        marker: ''
      })
    }
  }

  render() {
    const { score, questions, index, disableNext, marker } = this.state;
    //const { name } = this.props.location.state;

    return (
      <main className="Page">
        <section className="Container">
          <div className="Container Info">
            <span> Player: 'abnd' </span>
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
