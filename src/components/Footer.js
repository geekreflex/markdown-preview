import React from "react";
import styled from "styled-components";
import LineCol from "./LineCol";
import { useSelector } from "react-redux";

const Footer = () => {
  const len = useSelector((state) => state.mark.editor.length);

  return (
    <Wrapper>
      <Container>
        <div>
          Characters: <span>{len}</span>
        </div>
        <LineCol />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  width: 100%;
  background: ${({ theme }) => theme.colors.secondary};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const Container = styled.div`
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
  height: 20px;
`;

export default Footer;
