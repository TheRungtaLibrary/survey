import React from 'react';
import {useHistory} from 'react-router-dom';
import './Step3.scss';
import SurveyContext from '../../../contexts/SurveyContext';

/**
 * Step3 component
 */
const Step3 = () => {
  const [q3, setQ3] = React.useState();
  const surveyContext = React.useContext(SurveyContext);
  const history = useHistory();

  /**
   * Handler for form submit event
   */
  const onSubmit = () => {
    /**
     * Pass Url to aync data loader in context provider
     */
    surveyContext.setSurveyData(['Q3', q3]);
    history.push("/steps/4");
  }

  /**
   * Click Handler for Prev button
   */
  const onPrev = () => {
    surveyContext.decreaseSurveyStep();
    history.push("/steps/2");
  }

  /**
   * onChange Handler for input field
   * @param {Event} event
   */
  const handleOptionChange = (event) => {
    setQ3(event.target.value);
  }

    return (
      <form onSubmit={onSubmit} className="input-container panel">
        <p>
          <label>Your friends would say that you are cautious.</label></p>
        <div>
          <input 
            type="radio"
            name="q3"
            value="-2"
            onChange={handleOptionChange}
          />
          <label htmlFor="contactChoice1">Strongly Agree</label>

          <input 
            type="radio"
            name="q3" 
            value="-1"
            onChange={handleOptionChange}
            />
          <label htmlFor="contactChoice2">Agree</label>

          <input 
            type="radio"
            name="q3" 
            value="0"
            onChange={handleOptionChange} 
            />
          <label htmlFor="contactChoice3">Neither Agree nor Disagree</label>

          <input 
            type="radio"
            name="q3" 
            value="1"
            onChange={handleOptionChange}
            />
          <label htmlFor="contactChoice3">Disagree</label>

          <input 
            type="radio"
            name="q3" 
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
            <button type="submit" disabled={q3===""}>Submit</button>
          </div>
        </div>
      </form>
    );
}

export default Step3;