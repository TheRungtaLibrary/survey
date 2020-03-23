import React, {useState, useEffect} from 'react';
import './ProgressBarContainer.css';
import {SurveyContext} from "../../contexts/SurveyContext/SurveyContext";

// pass percentRange state through props to Range an ProgressBar components
const Range = (props) => {
    return (
        // render current the filled range of progress bar along its width
        <div className="range" style={{width: `${props.percentRange}%`}}/>
    );
};

const ProgressBar = (props) => {
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
  let [percentRange, setProgress] = useState(0);

  return (

    <SurveyContext>
    {({currentStep}) =>
      <div className="container">
        <ProgressBar percentRange={currentStep * 20}/>
        <div className="toggle-buttons">
            <button onClick={() => setProgress(percentRange > 0 ?
                percentRange - 20 : 0)}>Decrease
            </button>
            <button onClick={() => setProgress(percentRange < 100 ? 
              percentRange + 20 : 100)}>Increase
            </button>
            <button onClick={() => setProgress(0)}>Reset</button>
        </div>
    </div>
    }
  </SurveyContext>

      
  );
};