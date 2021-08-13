import React from "react";
import styled from "styled-components";

const SideNav = () => {
  return (
    <Wrapper>
      <Container>
        <div className="">t</div>
        <div className="">b</div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 50px;
  background: ${({ theme }) => theme.colors.fade};
  height: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export default SideNav;
