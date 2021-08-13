import React, { useEffect, useRef } from "react";
import MarkEditor from "./MarkEditor";
import MarkPreview from "./MarkPreview";
import { splitPane } from "../helper/splitPane";
import useLocalStorage from "../hooks/useLocalStorage";
import styled from "styled-components";
import SideNav from "./SideNav";
import { ScrollBarStyles } from "../theme/GlobalStyles";

const Panel = ({ themeName }) => {
  const [markdown, setMarkdown] = useLocalStorage("markdown", "");

  const editorPane = useRef(null);
  const previewPane = useRef(null);
  const resizer = useRef(null);

  useEffect(() => {
    splitPane(resizer.current, "H", editorPane.current, previewPane.current);
    window.addEventListener("resize", () => {
      editorPane.current.style.width = "50%";
      previewPane.current.style.width = "50%";
    });
  }, []);

  return (
    <PanelMain>
      <ScrollBarStyles />
      <SideNav />
      <MarkEditor
        editorPane={editorPane}
        markdown={markdown}
        setMarkdown={setMarkdown}
        themeName={themeName}
      />
      <Resizer ref={resizer} />
      <MarkPreview previewPane={previewPane} markdown={markdown} />
    </PanelMain>
  );
};

const PanelMain = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 60px);
  justify-content: space-between;
  box-sizing: border-box;
`;

const Resizer = styled.div`
  width: 10px !important;
  height: 100%;
  background: ${({ theme }) => theme.colors.secondary};
  cursor: col-resize;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  box-shadow: inset 0 0 2px #000000;
`;

export default Panel;
