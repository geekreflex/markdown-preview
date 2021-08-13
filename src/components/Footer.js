import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper className="ftMain">
      <Container className="ftWrap">
        <div className="ftLeft">footer left</div>
        <div className="ftRight">footer right</div>
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
  justify-content: space-between;
  align-items: center;
`;

export default Footer;
