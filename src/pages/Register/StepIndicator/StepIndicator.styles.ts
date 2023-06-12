import styled from "styled-components";

import { type IStepBall } from "./StepIndicator.types";

export const StepIndicatorContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
`;

export const StepBallContainer = styled.div`
  align-items: center;
  text-align: center;
  justify-content: center;
`;

export const StepBall = styled.div<IStepBall>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme, isStepOne }) =>
    isStepOne
      ? theme.Register.activeStepBall
      : theme.Register.inactiveStepBall};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin: 5px 0;
`;

export const StepLabel = styled.span`
  margin-top: 10px;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  color: ${({ theme }) => theme.Register.subTitle};
`;

export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 2px;
  background-color: #ccc;
  margin-top: -5px;
`;

export const ProgressBarFill = styled.div<IStepBall>`
  height: 100%;
  background-color: ${({ theme, isStepOne }) =>
    isStepOne
      ? theme.Register.activeLineIndicator
      : theme.Register.activeLineIndicator};
  width: ${({ isStepOne }) => (isStepOne ? "50%" : "100%")};
`;
