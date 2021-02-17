import styled from "styled-components";
import React, { useState } from "react";
import ListCom from "./ListCom";

const QuestionFrame = () => {
	const [firstOption, setFirstOption] = useState(false);
	const [secondOption, setSecondOption] = useState(false);

	return (
		<div>
			<AlignDiv>
				<QuestionNum>b.</QuestionNum>
				<div>
					<TitleDiv>둘 중 어느 쪽에 더 가까우신가요?</TitleDiv>
					<ul>
						<ListCom selected={firstOption} unselect={secondOption} setSelected={setFirstOption} setOtherFalse={setSecondOption} number={"B"} quotes={"직장에서는 되도록 말을 줄인다."} />
						<ListCom selected={secondOption} unselect={firstOption} setSelected={setSecondOption} setOtherFalse={setFirstOption} number={"A"} quotes={"동료와 되도록 많이 대화하려 하며 잡담을 즐기기도 한다."} />
					</ul>
				</div>
			</AlignDiv>
		</div>
	);
}

export default QuestionFrame;

const AlignDiv = styled.div`
  max-width: 720px;
  height: 210px;
  display: flex;
  margin: 0 auto;
`;

const QuestionNum = styled.span`
  padding: 4px 12px;
`;

const TitleDiv = styled.div`
	font-size: 24px;
	margin-bottom: 32px;
`;