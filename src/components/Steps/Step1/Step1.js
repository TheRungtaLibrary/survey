import React from 'react';
import {useHistory} from 'react-router-dom';
import './Step1.scss'
import SurveyContext from '../../../contexts/SurveyContext';

/**
 * Step1 component
 */
const Step1 = () => {
  const [name, setName] = React.useState("");
  const surveyContext = React.useContext(SurveyContext);
  const history = useHistory();

  /**
   * Handler for form submit event
   */
  const onSubmit = () => {
    surveyContext.setSurveyData(['Name',name])
    history.push('/steps/2');
  }

  /**
   * Click Handler for Prev button
   */
  const onPrev = () => {
    surveyContext.decreaseSurveyStep();
    history.push("/steps/0");
  }

  /**
   * onChange Handler for input field
   * @param {Event} event
   */
  const handleOptionChange = (event) => {
    setName(event.target.value);
  }

    return (
      <form onSubmit={onSubmit} className="input-container panel">
        <p>
          <label>Question: What is your name?</label>
        </p>
          <input 
            type="text" 
            onChange={handleOptionChange}
            required
          />
        <div className="nav-footer">
          <div>
            <button onClick={onPrev} disabled>Prev</button>
          </div>
          <div>
            <button type="submit">Next</button>
          </div>
        </div>
      </form>
    );
}

export default Step1;