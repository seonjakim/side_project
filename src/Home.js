import React, { useState } from 'react';
import QuestionPageTop from "./components/QuestionPageTop";
import QuestionFrame from "./components/QuestionFrame";
import ProgressIndicator from "./components/ProgressIndicator"
import PrevNextBtn from "./components/PrevNextBtn"

const Home = () => {
	return (
		<div>
			<QuestionPageTop />
			<QuestionFrame />
			<ProgressIndicator />
			<PrevNextBtn />
		</div>
	)
}

export default Home;