import React from 'react';
import Button from '../../Components/Button/Button.component';
import ProgressBar from '../../Components/Progress-Bar/Progress-Bar.component';
import Question from '../../Components/Question/Question.component'
import './Survey.styles.css';

const SurveyQuestionsArray = ["Tell us a bit about yourself.", "What is your email?", "First Name", "Last Name"]
const buttonStyle = {
width: "10px"
}
const Survey = () => {
  return (
    <div className="Survey-page">
    {SurveyQuestionsArray.map(question => <Question question={question} />)}
    <Button props={buttonStyle}>Continue</Button>
      <ProgressBar />
    </div>
  );
};

export default Survey;
