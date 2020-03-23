import React from 'react';
import './Step3.scss';
import SurveyContext from '../../../contexts/SurveyContext';

/**
 * Calculator component
 */
const Step3 = () => {
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
          <Link to="/steps/2" onClick={onPrev}>Next</Link>
          </div>
          <button onClick={onSubmit}>Next</button>
        </div>
      </form>
    );
}

export default Step3;