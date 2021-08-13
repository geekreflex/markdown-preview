import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper className="hdMain">
      <Container className="hdWrap">
        <div className="hdLeft">left stuffs</div>
        <div className="hdRight">right stuffs</div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  width: 100%;
  background: ${({ theme }) => theme.colors.secondary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Container = styled.div`
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
  height: 40px;
`;

export default Header;
