import styled, { css } from "styled-components";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import ListCom from "./ListComponent";
import { globalStyleDef } from "../../../styles/CommonStyleDefine"

const QuestionFrame = (props) => {
  const [firstOption, setFirstOption] = useState(false);
  const [secondOption, setSecondOption] = useState(false);
  const { number, aQuestion, bQuestion, aAddress, bAddress } = props;
  const history = useHistory();

  const timeOut = (address) => {
    setTimeout(() => {
      history.push(address);
    }, 900);
  };

  return (
    <div>
      <AlignDiv firstOption={firstOption} secondOption={secondOption}>
        <QuestionNum>{number}</QuestionNum>
        <div>
          <TitleDiv>둘 중 어느 쪽에 더 가까우신가요?</TitleDiv>
          <ul>
            <div onClick={() => timeOut(aAddress)}>
              <ListCom
                selected={firstOption}
                unselect={secondOption}
                setSelected={setFirstOption}
                setOtherFalse={setSecondOption}
                number={"A"}
                quotes={aQuestion}
              />
            </div>
            <div onClick={() => timeOut(bAddress)}>
              <ListCom
                selected={secondOption}
                unselect={firstOption}
                setSelected={setSecondOption}
                setOtherFalse={setFirstOption}
                number={"B"}
                quotes={bQuestion}
              />
            </div>
          </ul>
        </div>
      </AlignDiv>
    </div>
  );
};

export default QuestionFrame;

const AlignDiv = styled.div`
  max-width: 720px;
  height: 210px;
  display: flex;
  margin: 0 auto;
  ${(props) =>
    (props.firstOption || props.secondOption) &&
    css`
      transition: transform 600ms ease 0.5s, opacity 300ms ease 0.5s;
      opacity: 0;
      transform: translateY(-100vh);
    `}
`;

const QuestionNum = styled.span`
  padding: 4px 12px;
  color: ${globalStyleDef.color.mainBlue};
  font-size: 16px;
`;

const TitleDiv = styled.div`
  font-size: 24px;
  margin-bottom: 32px;
`;
