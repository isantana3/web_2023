import { type IStepIndicatorProps } from "./StepIndicator.types";

import {
  ProgressBarContainer,
  ProgressBarFill,
  StepBall,
  StepBallContainer,
  StepIndicatorContainer,
  StepLabel,
} from "./StepIndicator.styles";

export function StepIndicator(props: IStepIndicatorProps): JSX.Element {
  const isStepOne = !!props.stepOne;

  return (
    <StepIndicatorContainer>
      <StepBallContainer>
        <StepBall isStepOne={isStepOne}>1</StepBall>
        <StepLabel>Email</StepLabel>
      </StepBallContainer>
      <ProgressBarContainer>
        <ProgressBarFill isStepOne={isStepOne} />
      </ProgressBarContainer>
      <StepBallContainer>
        <StepBall isStepOne={!isStepOne}>2</StepBall>
        <StepLabel>Dados Pessoais</StepLabel>
      </StepBallContainer>
    </StepIndicatorContainer>
  );
}
