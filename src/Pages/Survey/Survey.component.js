import React from 'react';
import Button from '../../Components/Button/Button.component';
import ProgressBar from '../../Components/Progress-Bar/Progress-Bar.component';
import { Link } from 'react-router-dom';
import './Survey.styles.css';

const SurveyQuestionsArray = [""]

const Survey = () => {
  return (
    <div className="Survey-page">
     
      <ProgressBar />
    </div>
  );
};

export default Survey;
