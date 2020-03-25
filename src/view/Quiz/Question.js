import React from 'react'

const Question = ({question, onClick}) => (
  <div className="Container Game">
    <div className="Game__Question">
      <img
        src={question.rightAnswer.img}
        alt="question"
      />
    </div>
    <div className="Game__Options">
      {
        question.options.map(option =>
          <span key={option}>
            {option}
          </span>
        )
      }
    </div>
    <button
      type="button"
      onClick={onClick}
    >
      Next
    </button>
  </div>
)

export default Question;