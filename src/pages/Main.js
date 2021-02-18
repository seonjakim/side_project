import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button"
import newTitle from "../image/newTitle.png";

const Main = () => {
  return (
    <PageContainer>
      <Container>
          <ImgSizeCtr src={newTitle} />
          <MessageWrapper>
            <InnerMessage>프로젝트는 해야하는데,</InnerMessage>
            <InnerMessage>무슨 프로젝트를 해야할지 모르겠는 코린이들을 위한</InnerMessage>
            <InnerMessage>간단한 테스트와 플젝 아이디어들!</InnerMessage>
          </MessageWrapper>
          <GrayMessage>Takes 30 seconds</GrayMessage>
          <Link to="start">
            <Button content={"Start"} />
          </Link>
      </Container>
    </PageContainer>
  )
}

export default Main;

const PageContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  max-width: 720px;
  max-height: 800px;
  margin: auto;
  padding: 0 40px;
  display:flex;
  flex-direction: column;
  align-items: center;
`;

const ImgSizeCtr = styled.img`
  width: 80%;
`;

const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
`;

const InnerMessage = styled.div`
  font-size: 24px;
  display: flex;
  justify-content: center;
  line-height: 1.4;
`;

const GrayMessage = styled.div`
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.56);
  margin: 8px 0 40px 0;
`;