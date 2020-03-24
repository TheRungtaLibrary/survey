import React from 'react';
import {useHistory} from 'react-router-dom';
import './Summary.scss';
import SurveyContext from '../../../contexts/SurveyContext';

/**
 * Summary component
 */
const Summary = () => {
  const surveyContext = React.useContext(SurveyContext);
  const surveyData = surveyContext.getSurveyData();
  const history = useHistory();

  /**
   * Click Handler for Reset button
   */
  const onReset = () => {
    surveyContext.resetCurrentStep();
    history.push("/intro");
  }

  return (
    <div className="summary-container">
      <h2>Summary</h2>
      <table>
        <tbody>
          {surveyData && surveyData.map((element, i) => (
            <tr key={i}>
              <th>{Object.keys(element)[0]}</th>
              <td>{element[Object.keys(element)[0]]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={onReset}>Reset the world and this form</button>
      </div>
    </div>
  );
}

export default Summary;