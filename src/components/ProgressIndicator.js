import styled from "styled-components";
import React from "react";

const ProgressIndicator = () => {
  return (
    <ProgressWrapper>
      <ProgressTitle>50% completed</ProgressTitle>
      <IndicatorWindow>
        <ProgressBar />
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
  border-radius: 2px;
  margin: 4px 0;
`;

const ProgressBar = styled.div`
  height: 100%;
  width: 50%;
  background-color: red;
  border-radius: 2px 0 0 2px;
`;
