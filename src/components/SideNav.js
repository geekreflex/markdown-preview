import React from "react";
import styled from "styled-components";

import { IoSettingsOutline } from "react-icons/io5";

const SideNav = () => {
  const handleSettings = () => {
    //
  };

  return (
    <Wrapper>
      <Container>
        <div className="">t</div>
        <div className="">
          <div className="icon" onClick={handleSettings}>
            <IoSettingsOutline />
          </div>
        </div>
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
  padding: 20px 0;

  .icon {
    font-size: 25px;
    cursor: pointer;
    padding: 5px;
    color: #999;
  }
  .icon:hover {
    color: #fff;
  }
`;

export default SideNav;
