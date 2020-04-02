import React, { Component } from 'react'

class Question extends Component {
  constructor(props) {
    super(props)

    this.state = {
      answer: ''
    }
  }

  onChange = (event) => {
    const { value } = event.target

    this.setState({ answer: value })
  }


  render() {
    const {
      question,
      onClick,
      index,
      confirmQuestion,
      disableNext,
      marker,
      next
    } = this.props
    const { answer } = this.state

    return (
      <form className="Container Game">
        <div className="Game__Question">
          <img
            src={question.rightAnswer.img}
            alt="question"
          />
        </div>
        <div className="Game__Options">
          {
            question.options.map(option =>
              <div key={option}>
                <input
                  type="radio"
                  id={option}
                  className={`Game__Option${option === answer ? marker : ''}`}
                  value={option}
                  name={`question${index}`}
                  checked={option === answer}
                  onChange={this.onChange}
                  disabled={!disableNext}
                />
                <label htmlFor={option}>
                  {option}
                </ label>
              </div>
            )
          }
        </div>
        <button
          onClick={(event) => confirmQuestion(event, answer)}
          disabled={!Boolean(answer) || !disableNext}
        >
          Ok
        </button>
        {
          next && (
            <button
              type="button"
              onClick={onClick}
              disabled={disableNext}
            >
              Next
            </button>
          )
        }

      </form>
    )
  }
}

export default Question;