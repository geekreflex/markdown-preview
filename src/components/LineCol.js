import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const LineCol = () => {
  const { selLen, cursorPos } = useSelector((state) => state.mark.editor);

  return (
    <Wrapper>
      {cursorPos && (
        <Container>
          <div>
            Ln <span>{cursorPos.line + 1 || 0},</span>
          </div>
          <div>
            Col <span>{cursorPos.ch + 1 || 0}</span>
          </div>
          {selLen > 0 && <div>({selLen} Selected)</div>}
        </Container>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Container = styled.div`
  display: flex;
  font-size: 12px;
  & div {
    margin-left: 10px;
  }
`;

export default LineCol;
