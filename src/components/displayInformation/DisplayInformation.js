import React from 'react';
import './DisplayInformation.css';
import {InstallmentConsumer} from "../../contexts/InstallmentContext";

/**
 * Display component to show monthly installment
 */
const DisplayInformation = () => {
  return(
    <InstallmentConsumer>
      {({installmentData}) =>
         <div className="information-area">
            <label>Monthly Installment: <b>{installmentData && installmentData.monthlyInstallment} &euro;</b></label>
          </div>
      }
    </InstallmentConsumer>
  ) 
}

export default DisplayInformation;
