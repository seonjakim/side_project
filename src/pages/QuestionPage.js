import React from "react";
import styled from "styled-components";
import QuestionFrame from "../components/QuestionFrame";
import QuestionPageBtm from "../components/QuestionPageBtm";

const QuestionPage = () => {
  return (
    <PageWrapper>
        <MiddleWrapper>
          <QuestionFrame />
        </MiddleWrapper>
      <BottomWrapper>
        <QuestionPageBtm />
      </BottomWrapper>
    </PageWrapper>
  )
};

export default QuestionPage;

const PageWrapper = styled.div`
`;

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