import React from 'react';
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

  surveyContext.getRiskLevels()
    .then((value) => calculateRiskLevel(value));

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
   * Click Handler for Reset button
   */
  const onReset = () => {
    surveyContext.resetCurrentStep();
    history.push("/");
  }

  return (
    <div className="summary-container">
      <h2>Your risk level has been calculated:</h2>
      <br></br>
      <h3>{selectedRisk && selectedRisk.name}</h3>
      <p>{selectedRisk && selectedRisk.description}</p>
      {<table>
        <tbody>
          You can choose other Risk Levels that suit you better!
          {riskLevels && selectedRisk && riskLevels.filter(risk => !(risk.state === selectedRisk.state))
            .map((element, index) => (
              <tr key={index}>
                <th>{element.name}</th>
                <td>{element.description}</td>
              </tr>
            ))}
        </tbody>
      </table>}
      <form onSubmit={onSubmit} className="input-container panel">
        <p>
          <label>Your friends would say that you are cautious.</label></p>
        <div>
        {riskLevels && selectedRisk && riskLevels.filter(risk => !(risk.state === selectedRisk.state))
            .map((element, index) => (
              <tr key={index}>
                <th>{element.name}</th>
                <td>{element.description}</td>
              </tr>
              <input
                type="radio"
                name="q3"
                value={element.name}
                onChange={handleOptionChange}
              />
              <label htmlFor="contactChoice1">Strongly Agree</label>
            ))}
          <label htmlFor="contactChoice1">Strongly Agree</label>

          <input
            type="radio"
            name="q3"
            value="-1"
            onChange={handleOptionChange}
          />
          <label htmlFor="contactChoice2">Agree</label>
        </div>
      </form>
      <div>
        <button onClick={onReset}>Submit</button>
      </div>
    </div>
  );
}

export default Summary;