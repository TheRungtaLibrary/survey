import React from 'react';
import {useHistory} from 'react-router-dom';
import './Step1.scss'
import SurveyContext from '../../../contexts/SurveyContext';

/**
 * Step1 component
 */
const Step1 = () => {
  const [q1, setQ1] = React.useState("");
  const surveyContext = React.useContext(SurveyContext);
  const history = useHistory();

  /**
   * Handler for form submit event
   */
  const onSubmit = () => {
    surveyContext.setSurveyData(['Q1',q1])
    history.push('/steps/2');
  }

  /**
   * onChange Handler for input field
   * @param {Event} event
   */
  const handleOptionChange = (event) => {
    setQ1(event.target.value);
  }

    return (
      <form onSubmit={onSubmit} className="input-container panel">
        <p>
          <label>I have previously put money in a risky investment.</label></p>
        <div>
          <input 
            type="radio"
            name="q1" 
            value="2"
            onChange={handleOptionChange}
            required
          />
          <label>Strongly Agree</label>

          <input
            type="radio"
            name="q1" 
            value="1"
            onChange={handleOptionChange}
            />
          <label>Agree</label>

          <input 
            type="radio"
            name="q1" 
            value="0"
            onChange={handleOptionChange} 
            />
          <label>Neither Agree nor Disagree</label>

          <input 
            type="radio"
            name="q1" 
            value="-1"
            onChange={handleOptionChange}
            />
          <label>Disagree</label>

          <input 
            type="radio"
            name="q1" 
            value="-2"
            onChange={handleOptionChange}
            />
          <label>Strongly Disagree</label>
        </div>
        <div className="nav-footer">
          <div>
            <button type="submit" disabled={q1===""}>Next</button>
          </div>
        </div>
      </form>
    );
}

export default Step1;