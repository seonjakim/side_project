import styled, {css} from "styled-components";
import React from "react";

const ProgressIndicator = (props) => {
  const { progress } = props;

  return (
    <ProgressWrapper>
      <ProgressTitle>{progress}% completed</ProgressTitle>
      <IndicatorWindow>
        <ProgressBar progress={progress} />
      </IndicatorWindow>
    </ProgressWrapper>
  );
};

export default ProgressIndicator;

const ProgressWrapper = styled.div`
  padding: 0 8px;
  margin-right: 8px;
  min-width: 200px;
`;

const ProgressTitle = styled.span`
  font-size: 12px;
`;

const IndicatorWindow = styled.div`
  height: 4px;
  max-width: 100%;
  background-color: rgba(230, 230, 230, 0.9);
  border-radius: 4px;
  margin: 4px 0;
`;

const ProgressBar = styled.div`
  height: 100%;
  ${props => props.progress ? css`
    width: ${props.progress}%;`
    : css`
    width: 0%;
  `}
  width: ${ props => props.progress };
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 2px 0 0 2px;
`;
