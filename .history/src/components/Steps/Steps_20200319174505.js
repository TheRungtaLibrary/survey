import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Intro from './Intro/Intro';
import Step1 from './Step1/Step1';
import Step2 from './Step2/Step2';
import Step3 from './Step3/Step3';
import Step4 from './Step4/Step4';
import Summary from './Summary/Summary';

/**
* This is the functional component for Home
* @constructor
*/
function Steps(){

	return (
		<Router>
			<div>
                <Switch>
                    <Route exact path='/' component={Intro} />
                    <Route exact path='/intro' component={Intro} />
                    <Route exact path='/steps/1' component={Step1} />
                    <Route exact path="/steps/2" component={Step2} />
                    <Route exact path="/steps/3" component={Step3} />
                    <Route exact path="/steps/4" component={Step4} />
                    <Route exact path="/steps/5" component={Summary} />
                </Switch>
			</div>
		</Router>
	);
}

export default Steps;
