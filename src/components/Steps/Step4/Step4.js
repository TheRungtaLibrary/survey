import React from 'react';
import {useHistory} from 'react-router-dom';
import './Step4.scss';
import SurveyContext from '../../../contexts/SurveyContext';

/**
 * Step4 component
 */
const Step4 = () => {
  const [ride, setRide] = React.useState();
  const surveyContext = React.useContext(SurveyContext);
  const history = useHistory();

  /**
   * Handler for form submit event
   */
  const onSubmit = () => {
    surveyContext.setSurveyData(['Ride',ride]);
    history.push("/steps/5");
  }

  /**
   * Click Handler for Prev button
   */
  const onPrev = () => {
    surveyContext.decreaseSurveyStep();
    history.push("/steps/3");
  }

  /**
   * onChange Handler for input field
   * @param {Event} event
   */
  const handleOptionChange = (event) => {
    setRide(event.target.value);
  }

  return (
    <form onSubmit={onSubmit} className="input-container panel">
      <p>Question: What do you use to get to office?</p>
      <div>
        <select onChange={handleOptionChange} required>
          <option value="" selected disabled hidden>Choose here</option>
          <option value="Bus">Bus</option>
          <option value="UBahn">UBahn</option>
          <option value="SBahn">SBahn</option>
          <option value="Car">Car</option>
          <option value="Bike">Bike</option>
          <option value="Walk">I Walk</option>
        </select>
      </div>
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

export default Step4;