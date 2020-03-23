import React from 'react';
import {Link} from 'react-router-dom';
import './NavigationFooter.scss'
import { SurveyConsumer } from '../../../contexts/SurveyContext';

/**
 * Calculator component
 */
const NavigationFooter = () => {

    return (

      <SurveyConsumer>
        {({currentStep}) =>
          <form oclassName="input-container panel">
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