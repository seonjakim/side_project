import styled, {css} from "styled-components";
import React, {useState} from "react";
import { globalStyleDef } from "../styles/CommonStyleDefine"

const ListCom = (props) => {
	const { selected, unselect, setSelected, setOtherFalse } = props;
	const [hoverEffect, setHoverEffect] = useState(false);

	return (
		<List selected={selected} onClick={() => {setSelected(!selected), unselect == true && setOtherFalse(!unselect)}} hoverEffect={hoverEffect} onMouseEnter={() => {setHoverEffect(true)}} onMouseLeave={() => {setHoverEffect(false)}}>
			<div style={{width: "36px"}}>
				<InnerBox selected={selected} hoverEffect={hoverEffect}>
					{hoverEffect || selected ? <span style={{marginRight: "6px"}}>Key</span> : ""}
					<span>{props.number}</span>
				</InnerBox>
			</div>
			<div>{props.quotes}</div>
			<div style={{minWidth: "48px"}}>
				<CheckerWrapper>
						<svg fill={selected ? `${globalStyleDef.color.mainBlue}` : "transparent"} height="13" width="16">
							<path d="M14.293.293l1.414 1.414L5 12.414.293 7.707l1.414-1.414L5 9.586z"></path>
						</svg>
				</CheckerWrapper>
			</div>
		</List>
	);
}

export default ListCom;

const List = styled.li`
	border: 1px solid ${globalStyleDef.color.mainBlue};
	border-radius: 4px;
	min-height: 40px;
	min-width: 75px;
	padding: 4px;
	margin-bottom: 8px;
	display: flex;
	position: relative;
	align-items: center;
	font-size: 16px;
	color: ${globalStyleDef.color.mainBlue};
	${props => props.selected ? css`
		box-shadow: rgb(4 69 175 / 80%) 0px 0px 0px 2px inset;
		background-color: ${globalStyleDef.hoverColor.hoverBlue};
	` : css`background-color: ${globalStyleDef.color.boxBlue};`}
	${props => props.hoverEffect && css`
	background-color: ${globalStyleDef.hoverColor.hoverBlue};
	`}
`;

const InnerBox = styled.div`
	width: 24px;
	height: 24px;
	border-radius: 2px;
	font-size: 12px;
	border: 1px solid rgba(4, 69, 175, 0.6);
	margin: 0 8px 0 4px;
	display: flex;
	justify-content: center;
	align-items: center;
	${props => props.hoverEffect && css`
		width: 51.68px;
		position: absolute;
		left: -24.68px;
		top: 50%;
		transform: translateY(-50%);
	`}
	${props => props.selected ? css`
		background-color: ${globalStyleDef.color.mainBlue};
		color: white;
		width: 51.68px;
		position: absolute;
		left: -24.68px;
		top: 50%;
		transform: translateY(-50%);
	` : css`
		background-color: white;
		color: ${globalStyleDef.color.mainBlue};
	`}
`;

const CheckerWrapper = styled.div`
	right: 0;
	padding: 0 12px 0 20px;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
`;