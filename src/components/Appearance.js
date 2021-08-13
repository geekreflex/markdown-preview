import React from "react";
import ThemeSelector from "./ThemeSelector";
import styled from "styled-components";

const Appearance = ({ setter }) => {
  return (
    <Wrapper>
      <h2>Appearance</h2>
      <ThemeSelector setter={setter} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;
  background: ${({ theme }) => theme.colors.fade};
  position: fixed;
  bottom: 0;
  left: 200px;
  z-index: 1000;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 6px;
  padding: 20px;
`;

export default Appearance;
