import React from "react";
import QuestionPageTop from "../components/QuestionPage/QuestionPageComponents/QuestionPageTop";
import QuestionPage from "../components/QuestionPage/QuestionPage";

const Home = () => {
  return (
    <div style={{ postion: "relative", width: "100vw", height: "100vh" }}>
      <QuestionPageTop />
      <QuestionPage
        aAddress={"/next"}
        aQuestion={"나는 오리지널 아싸다."}
        bQuestion={"나는 인싸라 프로젝트 함께 할 개발자 칭구들이 있다."}
        progress={"30"}
      />
    </div>
  );
};

export default Home;
