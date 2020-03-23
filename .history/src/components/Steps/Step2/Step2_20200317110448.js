import React from 'react';
import {Link} from 'react-router-dom';
import './Step2.scss';
import SurveyContext from '../../../contexts/SurveyContext';

/**
 * Calculator component
 */
const Step2 = () => {
  const [place, setPlace] = React.useState("");
  const surveyContext = React.useContext(SurveyContext);

  /**
   * Handler for submit event for calculator form
   * @param {Event} event 
   */
  const onSubmit = () => {

    /**
     * Pass Url to aync data loader in context provider
     */
    surveyContext.setSurveyData([{'place':place}]);
  }

    return (
      <form onSubmit={onSubmit} className="input-container panel">
        <label>Question: What is your place of birth?</label>
        <input type="text" onChange={e => {setPlace(e.target.value)}} required/>
        <div className="nav-footer">
          <div>
            <button>Back</button>
          </div>
          <div>
            <Link to="/steps/3" onClick={onSubmit}>Next</Link>
          </div>
        </div>
      </form>
    );
}

export default Step2;