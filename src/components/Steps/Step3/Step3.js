import React from 'react';
import {useHistory} from 'react-router-dom';
import './Step3.scss';
import SurveyContext from '../../../contexts/SurveyContext';

/**
 * Step3 component
 */
const Step3 = () => {
  const [ageGroup, setAgeGroup] = React.useState();
  const surveyContext = React.useContext(SurveyContext);
  const history = useHistory();

  /**
   * Handler for form submit event
   */
  const onSubmit = () => {
    /**
     * Pass Url to aync data loader in context provider
     */
    surveyContext.setSurveyData(['Age Group',ageGroup]);
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
    setAgeGroup(event.target.value);
  }

    return (
      <form onSubmit={onSubmit} className="input-container panel">
        <p>
          <label>Question: What is your age group?</label></p>
        <div>
          <input 
            type="radio" 
            id="ageGroup1"
            name="age" 
            value="18-25"
            onChange={handleOptionChange}
            defaultChecked/>
          <label htmlFor="contactChoice1">18-25</label>

          <input 
            type="radio" 
            id="ageGroup2"
            name="age" 
            value="26-35"
            onChange={handleOptionChange}
            />
          <label htmlFor="contactChoice2">26-35</label>

          <input 
            type="radio" 
            id="ageGroup3"
            name="age" 
            value="35-50"
            onChange={handleOptionChange} 
            />
          <label htmlFor="contactChoice3">35-50</label>

          <input 
            type="radio" 
            id="ageGroup4"
            name="age" 
            value="51"
            onChange={handleOptionChange}
            />
          <label htmlFor="contactChoice3">50+</label>
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

export default Step3;