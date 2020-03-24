import React, {useState, useEffect} from 'react';
import './ProgressBarContainer.css';
import { SurveyConsumer } from "../../contexts/SurveyContext";

/**
 * Range component
 * @param {*} props 
 */
const Range = (props) => {
    return (
        <div className="range" style={{width: `${props.percentRange}%`}}/>
    );
};

/**
 *  ProgressBar Component
 * @param {*} props 
 */
const ProgressBar = (props) => {

  const percentRange = props.percentRange * 25 < 100 ? props.percentRange * 20 : 100;

  return (
      <div className="progress-bar">
          {/*render available progress bar’s limit*/}
          <Range percentRange={percentRange}/>
      </div>
  );
};

/**
 *  ProgressBarContainer Component
 * @param {*} props 
 */
export const ProgressBarContainer = () => {
  
  return (
    <SurveyConsumer>
    {({currentStep}) =>
      currentStep>=0 &&
      <div className="container">
        <ProgressBar percentRange={currentStep}/>
    </div>
    }
  </SurveyConsumer>
  );
};