import styled from "styled-components";
import React from "react";

const ListCom = (props) => {
	return (
		<List>
			<InnerBox>{props.number}</InnerBox>
			{props.quotes}
		</List>
	);
}

export default ListCom;

const List = styled.li`
	border: 1px solid blue;
	border-radius: 4px;
	min-height: 40px;
	width: 100%;
	padding: 4px;
	margin-bottom: 8px;
	display: flex;
	align-items: center;
	font-size: 16px;
`;

const InnerBox = styled.div`
	width: 24px;
	height: 24px;
	border-radius: 2px;
	font-size: 12px;
	border: 1px solid lightBlue;
	margin: 0 8px 0 4px;
	display: flex;
	justify-content: center;
	align-items: center;
`;