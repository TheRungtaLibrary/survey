import React from 'react';
import './Summary.scss';
import SurveyContext from '../../../contexts/SurveyContext';

/**
 * Calculator component
 */
const Summary = () => {
  const surveyContext = React.useContext(SurveyContext);
  const surveyData = JSON.parse(surveyContext.getSurveyData());

  const onReset = () => {
    surveyContext.resetCurrentStep();
  }
  
    return (
      <div>
        <h2>Summary</h2>
        <table>
          <tbody>
          {surveyData && surveyData.map((element,i) => (
            <tr key={i}>
              <th>{Object.keys(element)[0]}</th>
              <td>{element[Object.keys(element)[0]]}</td>
            </tr>
          ))}
          </tbody>
        </table>
        <Link to="/steps/" onClick={onReset}>Reset</Link>
      </div>
    );
}

export default Summary;