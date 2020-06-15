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
  const [riskLevels, setRiskLevels] = React.useState(null);
  const [selectedRisk, setSelectedRisk] = React.useState(null);
  let selectedRiskName = 0;

  useEffect(() => {
    if(!riskLevels) {
      surveyContext.getRiskLevels()
      .then((value) => calculateRiskLevel(value));
    }
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
    selectedRiskName = event.target.value;
    console.log(selectedRiskName);
  }

  /**
   * Click Handler for Reset button
   */
  const onSubmit = () => {
    console.log(selectedRisk);
    const opts = {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(selectedRisk)
    }

    fetch('http://localhost:2000/userRisk', opts)
    .then(response => {
      console.log(response);
      history.push("/steps/5");
    })

  }

  return (
    <div className="summary-container">
      <h2>Your risk level has been calculated:</h2>
      <br></br>
      <h3>{selectedRisk && selectedRisk.name}</h3>
      <p>{selectedRisk && selectedRisk.description}</p>
      <div className="input-container panel">
        <p>
          <label>You can choose other Risk Levels that suit you better!</label></p>
        <div>
        {riskLevels && selectedRisk && riskLevels.filter(risk => !(risk.state === selectedRisk.state))
            .map((element, index) => (
              <div key={index}>
                <input
                  type="radio"
                  name="risk"
                  value={element.name}
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
            <button onClick={onSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;