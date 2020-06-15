import React from 'react';
import {useHistory} from 'react-router-dom';
import './Step2.scss';
import SurveyContext from '../../../contexts/SurveyContext';

/**
 * Step2 component
 */
const Step2 = () => {
  const [q2, setQ2] = React.useState("");
  const surveyContext = React.useContext(SurveyContext);
  const history = useHistory();

  /**
   * Handler for form submit event
   */
  const onSubmit = () => {
    surveyContext.setSurveyData(['Q2', q2]);
    history.push("/steps/3");
  }

  /**
   * Click Handler for Prev button
   */
  const onPrev = () => {
    surveyContext.decreaseSurveyStep();
    history.push("/steps/1");
  }

  /**
   * onChange Handler for input field
   * @param {Event} event
   */
  const handleOptionChange = (event) => {
    setQ2(event.target.value);
  }

    return (
      <form onSubmit={onSubmit} className="input-container panel">
        <p>
          <label>I prefer my money to be safe from risk</label></p>
        <div>
          <input 
            type="radio"
            name="q2" 
            value="-2"
            onChange={handleOptionChange}
          />
          <label>Strongly Agree</label>

          <input 
            type="radio"
            name="q2" 
            value="-1"
            onChange={handleOptionChange}
            />
          <label>Agree</label>

          <input 
            type="radio"
            name="q2" 
            value="0"
            onChange={handleOptionChange} 
            />
          <label>Neither Agree nor Disagree</label>

          <input 
            type="radio"
            name="q2" 
            value="1"
            onChange={handleOptionChange}
            />
          <label>Disagree</label>

          <input 
            type="radio"
            name="q2" 
            value="2"
            onChange={handleOptionChange}
            />
          <label>Strongly Disagree</label>
        </div>
        <div className="nav-footer">
          <div>
            <button onClick={onPrev}>Prev</button>
          </div>
          <div>
            <button type="submit" disabled={q2===""}>Next</button>
          </div>
        </div>
      </form>
    );
}

export default Step2;