import React from "react";
import { useHistory } from "react-router-dom";
import { useStateWithLocalStorage } from "../utils/useStateWithLocalStorage";
const SurveyContext = React.createContext(null);
export const SurveyConsumer = SurveyContext.Consumer;

export function SurveyProvider({children}) {
    const [info, setInfo] = React.useState([]); //useStateWithLocalStorage("formData");
    let [currentStep, setCurrentStep] = React.useState(0);

    const setSurveyData = (dataObj)  => {
        setInfo([...info, ...dataObj]);
        setCurrentStep(++currentStep);
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

    const getCurrentStep = () => {
        return currentStep;
    };

    const resetCurrentStep = () => {
        setCurrentStep(0);
    };

    const surveyContextValue = {
        getSurveyData,
        setSurveyData,
        increaseSurveyStep,
        decreaseSurveyStep,
        getCurrentStep,
        currentStep,
        resetCurrentStep
    }

    return (
        <SurveyContext.Provider value={surveyContextValue}>
			{children}
		</SurveyContext.Provider>
    );
}

export default SurveyContext;