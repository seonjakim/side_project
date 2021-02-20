import React from "react";
import QuestionPageTop from "../components/QuestionPage/QuestionPageComponents/QuestionPageTop";
import QuestionPage from "../components/QuestionPage/QuestionPage";

const OutsiderNext = () => {
  return (
    <div style={{ postion: "relative", width: "100vw", height: "100vh" }}>
      <QuestionPageTop />
      <QuestionPage
        number={"b."}
        aAddress={"/outsiderstudy"}
        aQuestion={"나는 쪼렙이다. ( 사용가능한 프레임워크 == 0 )"}
        bAddress={"/outsidercreativity"}
        bQuestion={"쪼렙은 그래도 벗어난 듯?! ( 사용가능한 프레임워크 > 0 )"}
        progress={"66.66"}
      />
    </div>
  );
};

export default OutsiderNext;
