import styled from "styled-components";
import React from "react";

const QuestionPageTop = () => {
	return (
		<div>
			<FrameDiv>자, 20문제 시작합니다!</FrameDiv>
		</div>
	);
}

export default QuestionPageTop;

const FrameDiv = styled.div`
	width: 100vw;
	height: 60px;
	background-color: rgba(230, 230, 230, 0.9);
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 24px;
`;