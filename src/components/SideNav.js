import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { displaySettings } from "../redux/markSlice";

import { IoSettingsOutline, IoExpandSharp } from "react-icons/io5";

const SideNav = () => {
  const dispatch = useDispatch();
  const [fullscreen, setFullscreen] = useState(false);

  const handleSettings = () => {
    dispatch(displaySettings());
  };

  const toggleFullscreen = () => {
    const elem = document.documentElement;
    if (fullscreen) {
      setFullscreen(false);
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        /* IE11 */
        document.msExitFullscreen();
      }
    } else {
      setFullscreen(true);
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        /* IE11 */
        elem.msRequestFullscreen();
      }
    }
  };

  return (
    <Wrapper>
      <Container>
        <div className="">
          <div className="icon" onClick={toggleFullscreen}>
            <IoExpandSharp />
          </div>
        </div>
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
    color: ${({ theme }) => theme.colors.icon.color1};
  }
  .icon:hover {
    color: ${({ theme }) => theme.colors.icon.color2};
  }
`;

export default SideNav;
