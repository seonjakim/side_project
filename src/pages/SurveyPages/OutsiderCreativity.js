import React from "react";
import QuestionPageTop from "../../components/QuestionPage/QuestionPageComponents/QuestionPageTop";
import QuestionPage from "../../components/QuestionPage/QuestionPage";

const OutsiderCreativity = () => {
  return (
    <div style={{ postion: "relative", width: "100vw", height: "100vh" }}>
      <QuestionPageTop />
      <QuestionPage
        number={"c."}
        aQuestion={"나는 흰 쌀밥을 보면 그 속에 숨은 바람과 농부의 노력을 엿볼 수 있다. (Yes 창의력)"}
        bQuestion={"나는 흰 씰밥을 보면 그냥 먹는다. 고로 난 존재한다. (No 창의력)"}
        progress={"99.99"}
      />
    </div>
  );
};

export default OutsiderCreativity;