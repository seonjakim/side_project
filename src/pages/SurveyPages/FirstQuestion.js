import React from "react";
import QuestionPageTop from "../../components/QuestionPage/QuestionPageComponents/QuestionPageTop";
import QuestionPage from "../../components/QuestionPage/QuestionPage";

const FirstQuestion = () => {
  return (
    <div style={{ postion: "relative", width: "100vw", height: "100vh" }}>
      <QuestionPageTop />
      <QuestionPage
        number={"a."}
        aAddress={"/outsidernext"}
        aQuestion={"나는 오리지널 아싸다."}
        bAddress={"/insidernext"}
        bQuestion={"나는 인싸라 프로젝트 함께 할 개발자 칭구들이 있다."}
        progress={"33.33"}
      />
    </div>
  );
};

export default FirstQuestion;
