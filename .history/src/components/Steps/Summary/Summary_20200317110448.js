import React from 'react';
import './Summary.scss';
import SurveyContext from '../../../contexts/SurveyContext';

/**
 * Calculator component
 */
const Summary = () => {
  const surveyContext = React.useContext(SurveyContext);
  const surveyData = JSON.parse(surveyContext.getSurveyData());
  
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
      </div>
    );
}

export default Summary;