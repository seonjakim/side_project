import styled from "styled-components";
import React from "react";

const Button = () => {
	return (
    <BlueBtn>hello I am a blue btn</BlueBtn>
	);
}

export default Button;

//font는 import해서 사용하는 곳에서 설정해서 쓸 수 있게 설정

const BlueBtn = styled.button`
  min-height: 48px;
  padding: 8px 18px;
  background: blue;
  border: 1px solid transparent;
  border-radius: 4px;
  color: white;
`;