import React from 'react';
import {Link} from 'react-router-dom';
import './NavigationFooter.scss'
import { SurveyConsumer } from '../../../contexts/SurveyContext';

/**
 * Calculator component
 */
const NavigationFooter = () => {
  const [name, setName] = React.useState("");

  /**
   * Handler for submit event for calculator form
   * @param {Event} event 
   */
  const onChange = () => {
    /**
     * Pass Url to aync data loader in context provider
     */
    surveyContext.setSurveyData([{'name':name}])
  }

    return (

      <SurveyConsumer>
        {({currentStep}) =>
          <form onSubmit={onSubmit} className="input-container panel">
          <div className="nav-footer">
            <div>
              <button>Back</button>
            </div>
            <div>
              <Link to={`/steps/${currentStep}`} onClick={onSubmit}>Next</Link>
            </div>
          </div>
        </form>
        }
      </SurveyConsumer>
    );
}

export default Step1;