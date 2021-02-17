import React from "react";
import QuestionPageTop from "../components/QuestionPage/QuestionPageComponents/QuestionPageTop";
import QuestionPage from "../components/QuestionPage/QuestionPage";

const TestNext = () => {
  return (
    <div style={{ postion: "relative", width: "100vw", height: "100vh" }}>
      <QuestionPageTop />
      <QuestionPage
        aQuestion={"나는 쪼렙이다. ( 사용가능한 프레임워크 == 0 )"}
        bQuestion={"쪼렙은 그래도 벗어난 듯?! ( 사용가능한 프레임워크 > 0 )"}
        progress={"60"}
      />
    </div>
  );
};

export default TestNext;