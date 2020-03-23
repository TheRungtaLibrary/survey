import React from 'react';
import {Link} from 'react-router-dom';
import './Step1.scss'
import SurveyContext from '../../../contexts/SurveyContext';

/**
 * Calculator component
 */
const Step1 = () => {
  const [name, setName] = React.useState("");
  const surveyContext = React.useContext(SurveyContext);

  /**
   * Handler for submit event for calculator form
   * @param {Event} event 
   */
  const onSubmit = () => {
    /**
     * Pass Url to aync data loader in context provider
     */
    surveyContext.setSurveyData([{'Name':name}])
  }

  const onPrev = () => {
    surveyContext.decreaseSurveyStep();
  }

    return (
      <form onSubmit={onSubmit} className="input-container panel">
        <label>Question: What is your name?</label>
        <input type="text" onChange={e => {setName(e.target.value)}} required/>
        <div className="nav-footer">
          <div>
          <Link to="/steps/0" onClick={onPrev}>Prev</Link>
          </div>
          <div>
            <Link to="/steps/2" onClick={onSubmit}>Next</Link>
          </div>
        </div>
      </form>
    );
}

export default Step1;