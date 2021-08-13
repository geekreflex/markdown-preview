import React, { useEffect } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material-palenight.css";
import "codemirror/theme/eclipse.css";
import "codemirror/mode/markdown/markdown";
import styled from "styled-components";
import { getFromLS } from "../utils/storage";

import { Controlled as ControlledEditor } from "react-codemirror2";

const MarkEditor = ({ markdown, setMarkdown, editorPane }) => {
  const handleChange = (editor, data, value) => {
    setMarkdown(value);
  };

  const t = getFromLS("theme");
  console.log(t);

  return (
    <Wrapper className="pane editor-pane" ref={editorPane}>
      <Container className="editor-pane-inner">
        <ControlledEditor
          onBeforeChange={handleChange}
          value={markdown}
          className="code-mirror-wrapper"
          options={{
            lineWrapping: true,
            mode: "markdown",
            lineNumbers: true,
            theme: t.name === "Dark" ? "material-palenight" : "eclipse",
          }}
        />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  width: calc(50% - 5px);
  min-width: 100px;
  overflow-y: auto;
`;

const Container = styled.div`
  height: 100%;
`;

export default MarkEditor;
