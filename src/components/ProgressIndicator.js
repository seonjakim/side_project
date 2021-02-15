import styled from "styled-components";
import React from "react";

const ProgressIndicator = () => {
	return (
		<div>
			<ProgressTitle>50% completed</ProgressTitle>
			<IndicatorWindow>
				<ProgressBar />
			</IndicatorWindow>
		</div>
	);
}

export default ProgressIndicator;

const ProgressTitle = styled.span`
	font-size: 12px;
`;

const IndicatorWindow = styled.div`
	height: 4px;
	max-width: 150px;
	background-color: rgba(230, 230, 230, 0.9); 
	border-radius: 2px;
	margin: 4px 0;
`;

const ProgressBar = styled.div`
	height: 100%;
	width: 50%;
	background-color: red;
	border-radius: 2px 0 0 2px;
`;