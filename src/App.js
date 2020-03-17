import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./App.css";
import {SurveyProvider} from "./contexts/SurveyContext";
import Steps from "./components/Steps/Steps";
//import DisplayInformation from "./components/displayInformation/DisplayInformation";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/">
            <SurveyProvider>
              {/* <DisplayInformation /> */}
              <Steps />
            </SurveyProvider>
          </Route>
        </Switch>
      </Router>
    </div>
  );

}

export default App;
