import React from "react";
import styled from "styled-components";
import LineCol from "./LineCol";
import CharWord from "./CharWord";

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <CharWord />
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
