import React from 'react';
import './Question.styles.css';

const Question = ({ question }) => {
  return (
    <div className="question-container">
      <label for="name">{question}</label>
      <input type="text" id="name" name="name" required minlength="4" maxlength="8" size="10" />

    </div>
  );
};

export default Question;
