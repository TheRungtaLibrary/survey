import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./App.scss";
import {SurveyProvider} from "./contexts/SurveyContext";
import Steps from "./components/Steps/Steps";


function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/">
            <SurveyProvider>
              <Steps />
            </SurveyProvider>
          </Route>
        </Switch>
      </Router>
    </div>
  );

}

export default App;
