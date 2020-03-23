import React from 'react';
import {Link} from 'react-router-dom';
import './Step3.scss';
import SurveyContext from '../../../contexts/SurveyContext';

/**
 * Calculator component
 */
const Intro = () => {


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
        
      </form>
    );
}

export default Step3;