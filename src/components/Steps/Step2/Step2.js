import React from 'react';
import {useHistory} from 'react-router-dom';
import './Step2.scss';
import SurveyContext from '../../../contexts/SurveyContext';

/**
 * Step2 component
 */
const Step2 = () => {
  const [place, setPlace] = React.useState("");
  const surveyContext = React.useContext(SurveyContext);
  const history = useHistory();

  /**
   * Handler for form submit event
   */
  const onSubmit = () => {
    surveyContext.setSurveyData(['Place of birth',place]);
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
    setPlace(event.target.value);
  }

    return (
      <form onSubmit={onSubmit} className="input-container panel">
        <p>
          <label>Question: What is your place of birth?</label>
        </p>
        <input type="text" onChange={handleOptionChange} required/>
        <div className="nav-footer">
          <div>
            <button onClick={onPrev}>Prev</button>
          </div>
          <div>
            <button type="submit">Next</button>
          </div>
        </div>
      </form>
    );
}

export default Step2;