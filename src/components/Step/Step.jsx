/** @format */

import React from 'react';
import {
  StepContainer,
  StepStyled,
  StepAsideNumber,
  StepDetails,
  StepNumber,
  StepTitle,
} from './Step.Styled';

function Step({ steps }) {
  return (
    <StepContainer>
      {steps.map((step) => (
        <StepStyled key={step.number}>
          <StepAsideNumber>{step.number}</StepAsideNumber>
          <StepDetails>
            <StepNumber>{`Step ${step.number}`}</StepNumber>
            <StepTitle>{step.title}</StepTitle>
          </StepDetails>
        </StepStyled>
      ))}
    </StepContainer>
  );
}

export default Step;
