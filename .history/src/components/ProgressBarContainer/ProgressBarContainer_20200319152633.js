import React, {useState, useEffect} from 'react';
import './ProgressBarContainer.css';
import { SurveyConsumer } from "../../contexts/SurveyContext";

// pass percentRange state through props to Range an ProgressBar components
const Range = (props) => {
    return (
        // render current the filled range of progress bar along its width
        <div className="range" style={{width: `${props.percentRange}%`}}/>
    );
};

const ProgressBar = (props) => {
  const [percentRange, setPercentRange] = useState(0);
  props.percentRange * 20 < 80 ? currentStep * 20 : 0;

  return (
      <div className="progress-bar">
          {/*render available progress bar’s limit*/}
          <Range percentRange={props.percentRange}/>
      </div>
  );
};


function EffectedFn() {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 1000 * 10);
    });
  
    return (
      <div>
        {loading && <span>Loading...</span>}
        {!loading && <span>All Done!</span>}
      </div>
    );
  }

export const ProgressBarContainer = () => {

  return (

    <SurveyConsumer>
    {({currentStep}) =>
      <div className="container">
        <ProgressBar percentRange={currentStep}/>
    </div>
    }
  </SurveyConsumer>

      
  );
};