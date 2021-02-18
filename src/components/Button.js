import styled from "styled-components";
import React from "react";
import { globalStyleDef } from "../styles/CommonStyleDefine"

const Button = (props) => {
  const { content } = props;

  return <BlueBtn>{content}</BlueBtn>;
};

export default Button;

const BlueBtn = styled.button`
  min-height: 48px;
  padding: 8px 18px;
  background: ${globalStyleDef.color.mainBlue};
  border: 1px solid transparent;
  border-radius: 4px;
  color: white;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
`;
