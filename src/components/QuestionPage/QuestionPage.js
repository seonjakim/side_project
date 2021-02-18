import React from "react";
import styled from "styled-components";
import QuestionFrame from "./QuestionPageComponents/QuestionFrame";
import ProgressIndicator from "./QuestionPageComponents/ProgressIndicator";
import PrevNextBtn from "./QuestionPageComponents/PrevNextBtn";

const QuestionPage = (props) => {
  const { aAddress, bAddress, aQuestion, bQuestion, progress } = props;

  return (
    <div>
      <MiddleWrapper>
        <QuestionFrame
          aAddress={aAddress}
          bAddress={bAddress}
          aQuestion={aQuestion}
          bQuestion={bQuestion}
        />
      </MiddleWrapper>
      <BottomWrapper>
        <AlignDiv>
          <ProgressIndicator progress={progress} />
          {/* prevLink, nextLink setting */}
          <PrevNextBtn />
        </AlignDiv>
      </BottomWrapper>
    </div>
  );
};

export default QuestionPage;

const MiddleWrapper = styled.div`
  width: 100%;
  min-height: 210px;
  padding: 0 40px 0 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const BottomWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 16px;
`;

const AlignDiv = styled.div`
  display: flex;
`;
