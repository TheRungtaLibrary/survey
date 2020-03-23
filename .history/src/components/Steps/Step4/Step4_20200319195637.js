import React from 'react';
import {Link} from 'react-router-dom';
import './Step4.scss';
import SurveyContext from '../../../contexts/SurveyContext';

/**
 * Calculator component
 */
const Step4 = () => {
  const [ageGroup, setAgeGroup] = React.useState();
  const surveyContext = React.useContext(SurveyContext);


  /**
   * Handler for submit event for calculator form
   * @param {Event} event 
   */
  const onSubmit = () => {
    /**
     * Pass Url to aync data loader in context provider
     */
    surveyContext.setSurveyData([{'ageGroup':ageGroup}]);
  }

  const handleOptionChange = (event) => {
    setAgeGroup(event.target.value);
  }

  const onPrev = () => {
    surveyContext.decreaseSurveyStep();
  }

    return (
      <form onSubmit={onSubmit} className="input-container panel">
        <p>Question: What is your age group?</p>
        <div>
          
        </div>
        <div className="nav-footer">
          <div>
          <Link to="/steps/3" onClick={onPrev}>Prev</Link>
          </div>
          <Link to="/steps/5" onClick={onSubmit}>Next</Link>
        </div>
      </form>
    );
}

export default Step4;