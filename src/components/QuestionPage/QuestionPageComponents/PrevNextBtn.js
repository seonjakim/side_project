import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import { globalStyleDef, Strong } from "../../../styles/CommonStyleDefine";

const PrevNextBtn = (props) => {
  const { prevLink, nextLink } = props;

  return (
    <div>
      <WrapperBtns>
        <a href="https://github.com/seonjakim" target="_blank" rel="noopener noreferrer">
          <CreatorBtn>
            Powered by&nbsp;<Strong>Seokim</Strong>
          </CreatorBtn>
        </a>
        <BtnDivider />
        <Link to={prevLink}>
          <CommonBtn>
            <svg fill="white" height="9" width="14">
              <path d="M11.996 8.121l1.414-1.414L6.705 0 0 6.707l1.414 1.414 5.291-5.293z"></path>
            </svg>
          </CommonBtn>
        </Link>
        <BtnDivider />
        <Link to={nextLink}>
          <NextBtn>
            <svg fill="white" height="9" width="14">
              <path d="M12.293.293l1.414 1.414L7 8.414.293 1.707 1.707.293 7 5.586z"></path>
            </svg>
          </NextBtn>
        </Link>
      </WrapperBtns>
    </div>
  );
};

export default PrevNextBtn;

const WrapperBtns = styled.div`
  display: flex;
`;

const CreatorBtn = styled.div`
  background-color: ${globalStyleDef.color.mainBlue};
  color: white;
  border-radius: 4px 0 0 4px;
  padding: 2px 12px;
  min-height: 32px;
  display: flex;
  align-items: center;
  font-size: 14px;
`;

const CommonBtn = styled.button`
  width: 36px;
  height: 32px;
  padding: 0px;
  margin: 0px;
  border: ${globalStyleDef.color.transBorder};
  background-color: ${globalStyleDef.color.mainBlue};
`;

const NextBtn = styled(CommonBtn)`
  border-radius: 0 4px 4px 0;
`;

const BtnDivider = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  width: 1px;
  height: 32px;
`;
