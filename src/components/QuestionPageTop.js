import styled from "styled-components";
import React from "react";

const QuestionPageTop = () => {
  return (
      <FrameDiv>
        <InnerDiv>자, 20문제 시작합니다!</InnerDiv>
      </FrameDiv>
  );
};

export default QuestionPageTop;

const FrameDiv = styled.div`
  width: 100vw;
  height: 60px;
  background-color: rgba(230, 230, 230, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  `;
  
  const InnerDiv = styled.div`
  min-width: 720px;
  margin: 0 auto;
  padding: 0 70px 0 70px;
  font-size: 24px;
`;