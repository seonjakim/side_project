import React from 'react';
import QuestionPageTop from "./components/QuestionPageTop";
import BlueBtn from "./components/Button";
import List from "./components/ListCom";
import QuestionFrame from "./components/QuestionFrame";
import ProgressIndicator from "./components/ProgressIndicator"

const Home = () => {
	return (
		<div>
			<QuestionPageTop />
			Hello I am here!<BlueBtn /><List number={"A"} quotes={"hello world"} />
			<QuestionFrame />
			<ProgressIndicator />
		</div>
	)
}

export default Home;