import React, { useState } from "react";
import QuestionPageTop from "./components/QuestionPageTop";
import QuestionFrame from "./components/QuestionFrame";
import ProgressIndicator from "./components/ProgressIndicator";
import PrevNextBtn from "./components/PrevNextBtn";
import QuestionPageBtm from "./components/QuestionPageBtm";
import QuestionPage from "./pages/QuestionPage";

const Home = () => {
  return (
    <div style={{postion:"relative", width: "100vw", height: "100vh"}}>
      <QuestionPageTop />
      <QuestionPage />
    </div>
  );
};

export default Home;
