import React from 'react';
import {Link} from 'react-router-dom';
import './NavigationFooter.scss'
import { SurveyConsumer } from '../../../contexts/SurveyContext';

/**
 * Calculator component
 */
const NavigationFooter = () => {
  const [name, setName] = React.useState("");
  const surveyContext = React.useContext(SurveyContext);

  /**
   * Handler for submit event for calculator form
   * @param {Event} event 
   */
  const onChange = () => {
    /**
     * Pass Url to aync data loader in context provider
     */
    surveyContext.setSurveyData([{'name':name}])
  }

    return (

      <SurveyConsumer>
    {({currentStep}) =>
      <div className="container">
        <ProgressBar percentRange={currentStep * 20}/>
        {/* <div className="toggle-buttons">
            <button onClick={() => setProgress(percentRange > 0 ?
                percentRange - 20 : 0)}>Decrease
            </button>
            <button onClick={() => setProgress(percentRange < 100 ? 
              percentRange + 20 : 100)}>Increase
            </button>
            <button onClick={() => setProgress(0)}>Reset</button>
        </div> */}
    </div>
    }
  </SurveyConsumer>

      <form onSubmit={onSubmit} className="input-container panel">
        <div className="nav-footer">
          <div>
            <button>Back</button>
          </div>
          <div>
            <Link to="/steps/2" onClick={onSubmit}>Next</Link>
          </div>
        </div>
      </form>
    );
}

export default Step1;