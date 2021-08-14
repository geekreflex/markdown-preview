import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper className="hdMain">
      <Container className="hdWrap">
        <div className="logo">
          <b>#Markdown#</b> Preview
        </div>
        <div className="git-link">
          <a href="https://github.com/geekreflex/markdown-preview">Github</a>
        </div>
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

  .git-link a {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.link.text};
  }

  .logo {
    color: inherit;
  }
`;

export default Header;
