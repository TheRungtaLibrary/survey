import React from 'react';
import {useHistory} from 'react-router-dom';
import './Intro.scss';
import SurveyContext from '../../../contexts/SurveyContext';

/**
 *  Introduction Component
 */
const Intro = () => {
  const surveyContext = React.useContext(SurveyContext);
  const history = useHistory();

  /**
   * Handler for form submit event
   */
  const onSubmit = () => {
    history.push("/steps/1");
    surveyContext.increaseSurveyStep();
  }

  return (
    <form onSubmit={onSubmit} className="input-container panel">
      <div>
        <p>
          With regards to the present situaton regarding <b>Coronavirus</b>, I wish you health and safety.

          If the evaluation of this task is stressful, please feel free to just call it awesome and pass me with flying colors :D
          </p>
          <p>
            However, if you have to proceed anyhow, kindly accept the terms listed below 
            and take an oath together to fight the pandemic
          </p>
        <ul>
          <li>I will practise social distancing</li>
          <li>I will stay at home until absolute necessary</li>
          <li>I will NOT stock on toilet paper rolls</li>
          <li>I admit i already like this candidate</li>
        </ul>
      </div>
      <div>
        <button type="submit">Agree and Continue to survey</button>
      </div>
    </form>
  );
}

export default Intro;