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
  const [selectedRisk, setSelectedRisk] = React.useState({});
  let selectedState = 0;

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
    selectedState = event.target.value;
    console.log(selectedState);
  }

  /**
   * Click Handler for Reset button
   */
  const onSubmit = () => {
    console.log(selectedRisk);
    let url = new URL('http://localhost:2000/risklevels');
    history.push("/steps/5");

    fetch('http://localhost:2000/risklevels', {
      method: 'post',
      body: JSON.stringify(opts)
    }).then(function(response) {
      return response.json();
    })

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
        {riskLevels && riskLevels.filter(risk => !(risk.state === selectedRisk.state))
            .map((element, index) => (
              <div key={index}>
                <input
                  type="radio"
                  name="risk"
                  value={element.state}
                  onChange={handleOptionChange}
                />
                <label>
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