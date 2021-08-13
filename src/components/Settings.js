import React from "react";
import Appearance from "./Appearance";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Settings = ({ setter }) => {
  const dispSet = useSelector((state) => state.mark.dispSet);

  return (
    <Wrapper style={{ display: dispSet ? "" : "none" }}>
      <Container>
        <h1>Settings</h1>
        <Appearance setter={setter} />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.fade};
  position: fixed;
  bottom: 20px;
  left: 200px;
  z-index: 1000;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 6px;
  padding: 10px 0;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
`;

const Container = styled.div`
  h1 {
    margin-left: 20px;
  }
`;

export default Settings;
