import React from "react";
import { IoExpandSharp, IoContractSharp } from "react-icons/io5";
import styled from "styled-components";

const Expand = () => {
  return (
    <Icon>
      <IoExpandSharp />
    </Icon>
  );
};

const Icon = styled.div`
  position: absolute;
  right: 30px;
  top: 20px;
  z-index: 1000;
  color: ${({ theme }) => theme.colors.icon.color1};
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.icon.color2};
    background: ${({ theme }) => theme.colors.icon.color3};
  }
`;

export default Expand;
