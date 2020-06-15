import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Summary.scss';
import SurveyContext from '../../../contexts/SurveyContext';

/**
 * Summary component
 */
const Summary = () => {
  const surveyContext = React.useContext(SurveyContext);
  const surveyInfo = surveyContext.getSurveyData();
  const history = useHistory();
  const [riskLevels, setRiskLevels] = React.useState([]);
  const [selectedRisk, setSelectedRisk] = React.useState();

  useEffect(() => {
    surveyContext.getRiskLevels()
    .then((value) => calculateRiskLevel(value));
  }, []);

  const calculateRiskLevel = (value) => {
    setRiskLevels(value);
    let score = surveyInfo.reduce((sum, element) => {
      return sum + parseInt(Object.values(element)[0]);
    }, 0);

    setSelectedRisk(value.filter(risk => {
      const avgScore = Math.round(score / 3);

      if (avgScore < 0) {
        return risk.state < 0;
      }
      else if (avgScore > 0) {
        return risk.state > 0;
      }
      else {
        return risk.state === 0;
      }
    })[0]);
  }

  /**
   * onChange Handler for input field
   * @param {Event} event
   */
  const handleOptionChange = (event) => {
    setSelectedRisk(event.target.value);
  }

  /**
   * Click Handler for Reset button
   */
  const onSubmit = () => {
    debugger
    console.log(selectedRisk);
  }

  return (
    <div className="summary-container">
      <h2>Your risk level has been calculated:</h2>
      <br></br>
      <h3>{selectedRisk && selectedRisk.name}</h3>
      <p>{selectedRisk && selectedRisk.description}</p>
      <form onSubmit={onSubmit} className="input-container panel">
        <p>
          <label>You can choose other Risk Levels that suit you better!</label></p>
        <div>
        {riskLevels && selectedRisk && riskLevels.filter(risk => !(risk.state === selectedRisk.state))
            .map((element, index) => (
              <div key={index}>
                <input
                  type="radio"
                  name="risk"
                  value={element}
                  onChange={handleOptionChange}
                />
                <label htmlFor="contactChoice1">
                  {element.name}{element.description}
                </label>
              </div>
            ))}
        </div>
        <div className="nav-footer">
          <div>
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Summary;