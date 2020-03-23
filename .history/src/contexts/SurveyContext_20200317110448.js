import React from "react";
import { useHistory } from "react-router-dom";
import { useStateWithLocalStorage } from "../utils/useStateWithLocalStorage";
const SurveyContext = React.createContext(null);
export const SurveyConsumer = SurveyContext.Consumer;

export function SurveyProvider({children}) {
    const [info, setInfo] = useStateWithLocalStorage("formData");
    let [currentStep, setCurrentStep] = useStateWithLocalStorage("step");
    const history = useHistory();
    const len = 3;

    React.useEffect(() => {
        console.log("ran")
        if(info.length === len) {
            history.push("/steps/summary");
        }
      }, [info]);

    const setSurveyData = (dataObj)  => {
        setInfo([...info, ...dataObj]);
    }

    const getSurveyData = () => {
        return localStorage.getItem('formData');
    };

    const decreaseSurveyStep = ()  => {
        setCurrentStep(--currentStep);
    }

    const increaseSurveyStep = () => {
        setCurrentStep(++currentStep);
    };

    const surveyContextValue = {
        getSurveyData,
        setSurveyData,
        increaseSurveyStep,
        decreaseSurveyStep
    }

    return (
        <SurveyContext.Provider value={surveyContextValue}>
			{children}
		</SurveyContext.Provider>
    );
}

export default SurveyContext;