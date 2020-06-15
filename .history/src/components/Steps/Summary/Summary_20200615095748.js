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

    value.filter(risk => {
      const avgScore = Math.round(score / 3);
      switch (avgScore) {
        case avgScore < 0:
          return risk.state < 0;
          break;
        case avgScore > 0:
          return risk.state < 0;
          break;
        default:
          return risk.state === 0;
      }
      risk.state === (Math.round(score / 3))
    })[0]

    setSelectedRisk(value.filter(risk => risk.state === (Math.round(score / 3)))[0]);
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
      <h2>Your risk level has been calculated</h2>
      <h3>{selectedRisk && selectedRisk.name}</h3>
      <p>{selectedRisk && selectedRisk.description}</p>
      {<table>
        <tbody>
          {riskLevels && riskLevels.map((element, index) => (
            <tr key={index}>
              <th>{element.name}</th>
              <td>{element.description}</td>
            </tr>
          ))}
        </tbody>
      </table>}
      <div>
        <button onClick={onReset}>Reset the world and this form</button>
      </div>
    </div>
  );
}

export default Summary;