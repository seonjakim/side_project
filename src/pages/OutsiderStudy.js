import React from "react";
import QuestionPageTop from "../components/QuestionPage/QuestionPageComponents/QuestionPageTop";
import QuestionPage from "../components/QuestionPage/QuestionPage";

const OutsiderStudy = () => {
  return (
    <div style={{ postion: "relative", width: "100vw", height: "100vh" }}>
      <QuestionPageTop />
      <QuestionPage
        number={"c."}
        aQuestion={"나는 공부할 의지가 있다."}
        bQuestion={"나는 공부라면 치가 떨린다."}
        progress={"99.99"}
      />
    </div>
  );
};

export default OutsiderStudy;
