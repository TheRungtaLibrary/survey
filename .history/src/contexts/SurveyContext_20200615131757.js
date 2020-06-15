import React from "react";
const SurveyContext = React.createContext(null);
export const SurveyConsumer = SurveyContext.Consumer;

/**
 * Survey Context
 * @constructor
 */
export function SurveyProvider({children}) {
    const [info, setInfo] = React.useState([]);
    let [currentStep, setCurrentStep] = React.useState(-1);

    const setSurveyData = ([key,value])  => {
        const objIndex = info.findIndex(obj => {
            return obj[key] !== undefined;
        })

        if(objIndex > -1) {
            const updatedObj = { ...info[objIndex], [key]: value};
            setInfo([ ...info.slice(0, objIndex),updatedObj,...info.slice(objIndex + 1)]);
        }
        else {
            setInfo([...info, {[key]: value}]);
        }
        
        setCurrentStep(++currentStep);
    }

    const getSurveyData = () => {
        return info;
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
        setCurrentStep(-1);
        setInfo([]);
    };

    const getRiskLevels = async () => {
        let url = new URL('http://localhost:2000/risklevels');

        const response = await fetch(url);
        const jsonData = await response.json();
        return jsonData;
      }

    const surveyContextValue = {
        getSurveyData,
        setSurveyData,
        increaseSurveyStep,
        decreaseSurveyStep,
        getCurrentStep,
        currentStep,
        resetCurrentStep,
        getRiskLevels
    }

    return (
        <SurveyContext.Provider value={surveyContextValue}>
			{children}
		</SurveyContext.Provider>
    );
}

export default SurveyContext;