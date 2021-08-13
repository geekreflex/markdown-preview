import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const CharWord = () => {
  const len = useSelector((state) => state.mark.markdown);

  const charlen = len.replace(/\s/g, "").length;
  const wordlen = len.trim().split(/\s+/).length;
  return (
    <Wrapper>
      {len && (
        <Container>
          <div>
            Characters: <span>{charlen}</span>
          </div>
          <div>
            Words: <span>{wordlen}</span>
          </div>
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
    margin-right: 10px;
  }
`;

export default CharWord;
