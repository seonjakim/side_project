import styled from "styled-components";
import React from "react";
import ProgressIndicator from "./ProgressIndicator";
import PrevNextBtn from "./PrevNextBtn";

const QuestionPageBtm = () => {
  return (
    <BottomWrapper>
      <ProgressIndicator />
      <PrevNextBtn />
    </BottomWrapper>
  )
};

export default QuestionPageBtm;

const BottomWrapper = styled.div`
  display: flex;
`;