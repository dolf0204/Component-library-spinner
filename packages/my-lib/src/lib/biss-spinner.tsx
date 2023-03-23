import { FC, useCallback, useEffect, useMemo, useState } from "react";
import styled, { keyframes } from "styled-components";

declare const BissSpinnerSizes: ["xs", "sm", "md", "lg", "xl"];

export declare type BissSpinnerSize = typeof BissSpinnerSizes[number];

declare const BissSpinnerPositions: [
  "top",
  "bottom",
  "left",
  "right",
  "bottom-left",
  "bottom-right",
  "top-right",
  "top-left",
  "center"
];

export declare type BissSpinnerPosition = typeof BissSpinnerPositions[number];

export interface IBissSpinnerProps {
  size?: BissSpinnerSize;
  fillColor?: string;
  color?: string;
  position?: BissSpinnerPosition;
  hideBackgorund?: boolean;
  blur?: boolean;
}

const LoadingIndicator: FC<IBissSpinnerProps> = (props) => {
  const {
    fillColor,
    size,
    position,
    hideBackgorund,
    blur = false,
    color,
  } = props;

  const [transformSize, setTransformSize] = useState<string>();
  const [transformPositionTop, setTransformPositionTop] = useState<string>();
  const [transformPositionLeft, setTransformPositionLeft] = useState<string>();

  useEffect(() => {
    setTransformSize(setSize);
    setTransformPositionTop(setPositionTop);
    setTransformPositionLeft(setPositionLeft);
  });

  const setSize = useCallback(() => {
    switch (size) {
      case "xs":
        return "0.25rem";
      case "sm":
        return "1.25rem";
      case "md":
        return "2.5rem";
      case "lg":
        return "8rem";
      case "xl":
        return "15rem";
      default:
        return "2.5rem";
    }
  }, [size]);

  const setPositionTop = useCallback(() => {
    switch (position) {
      case "bottom":
        return "90%";
      case "top":
        return "10%";
      case "left":
        return "50%";
      case "right":
        return "50%";
      case "bottom-left":
        return "90%";
      case "bottom-right":
        return "90%";
      case "top-left":
        return "10%";
      case "top-right":
        return "10%";
      case "center":
        return "50%";
      default:
        return "50%";
    }
  }, [position]);

  const setPositionLeft = useCallback(() => {
    switch (position) {
      case "bottom":
        return "50%";
      case "top":
        return "50%";
      case "left":
        return "10%";
      case "right":
        return "90%";
      case "bottom-left":
        return "90%";
      case "bottom-right":
        return "90%";
      case "top-left":
        return "10%";
      case "top-right":
        return "90%";
      case "center":
        return "50%";
      default:
        return "50%";
    }
  }, [position]);

  const rotationBuilder = () => {
    const rotation = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);

    }
  `;
    return rotation;
  };

  const LoadingIndicator = styled.div`
    animation: ${rotationBuilder()} 2s linear infinite;
    width: ${transformSize};
    height: ${transformSize};
    top: ${transformPositionTop};
    left: ${transformPositionLeft};
    opacity: ${hideBackgorund ? "0" : "100"};
    border: 16px solid ${color ?? "#f3f3f3"};
    border-top: 16px solid ${fillColor ?? "#3498db"};
    position: fixed;
    border-radius: 50%;
  `;

  const LoadingIndicatorContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  `;

  const LoadingIndicatorContainerBlur = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(0.2rem);
  `;

  return (
    <div>
      {blur ? (
        <LoadingIndicatorContainerBlur>
          <LoadingIndicator></LoadingIndicator>
        </LoadingIndicatorContainerBlur>
      ) : (
        <LoadingIndicatorContainer>
          <LoadingIndicator></LoadingIndicator>
        </LoadingIndicatorContainer>
      )}
    </div>
  );
};

export default LoadingIndicator;
