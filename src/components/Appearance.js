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
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: 20px;
  width: 500px;
`;

export default Appearance;
