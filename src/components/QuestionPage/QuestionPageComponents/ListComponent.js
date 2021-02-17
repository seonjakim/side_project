import styled, { css } from "styled-components";
import React, { useState } from "react";
import { globalStyleDef, Strong } from "../../../styles/CommonStyleDefine";

const ListComponent = (props) => {
  const { selected, unselect, setSelected, setOtherFalse } = props;
  const [hoverEffect, setHoverEffect] = useState(false);

  return (
    <List
      selected={selected}
      onClick={() => {
        setSelected(!selected), unselect == true && setOtherFalse(!unselect);
      }}
      hoverEffect={hoverEffect}
      onMouseEnter={() => {
        setHoverEffect(true);
      }}
      onMouseLeave={() => {
        setHoverEffect(false);
      }}
    >
      <div style={{ width: "36px" }}>
        <InnerBox selected={selected} hoverEffect={hoverEffect}>
          {hoverEffect ? <span>Key&nbsp;&nbsp;</span> : ""}
          <Strong>{props.number}</Strong>
        </InnerBox>
      </div>
      <div>{props.quotes}</div>
      <div style={{ minWidth: "48px" }}>
        <CheckerWrapper>
          <svg
            fill={selected ? `${globalStyleDef.color.mainBlue}` : "transparent"}
            height="13"
            width="16"
          >
            <path d="M14.293.293l1.414 1.414L5 12.414.293 7.707l1.414-1.414L5 9.586z"></path>
          </svg>
        </CheckerWrapper>
      </div>
    </List>
  );
};

export default ListComponent;

const List = styled.li`
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
  background-color: ${globalStyleDef.color.boxBlue};
  cursor: pointer;
  border: 1px solid ${globalStyleDef.color.mainBlue};
  ${(props) =>
    props.selected &&
    css`
      box-shadow: rgb(4 69 175 / 80%) 0px 0px 0px 1px inset;
      border: 1px solid ${globalStyleDef.color.mainBlue};
      animation: blinker 0.25s 2 normal ease;
      @keyframes blinker {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0.3;
        }
        100% {
          opacity: 1;
        }
      }
    `}
  ${(props) =>
    props.hoverEffect &&
    css`
      background-color: ${globalStyleDef.hoverColor.hoverBlue};
    `}
`;

const InnerBox = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 2px;
  font-size: 12px;
  border: 1px solid rgba(4, 69, 175, 0.7);
  margin: 0 8px 0 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.hoverEffect &&
    css`
      width: 51.68px;
      position: absolute;
      left: -24px;
      top: 50%;
      transform: translateY(-50%);
    `}
  ${(props) =>
    props.selected
      ? css`
          background-color: ${globalStyleDef.color.mainBlue};
          color: white;
        `
      : css`
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
