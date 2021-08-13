import React, { useEffect } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material-palenight.css";
import "codemirror/theme/eclipse.css";
import "codemirror/mode/markdown/markdown";
import styled from "styled-components";
import { getFromLS } from "../utils/storage";
import { useDispatch } from "react-redux";
import {
  editorCursorPos,
  editorSelLen,
  getMarkdownFromStorage,
} from "../redux/markSlice";
import Expand from "./Expand";
import { Controlled as ControlledEditor } from "react-codemirror2";

const MarkEditor = ({ markdown, setMarkdown, editorPane }) => {
  const dispatch = useDispatch();

  const handleChange = (editor, data, value) => {
    setMarkdown(value);
  };

  const editorChange = () => {
    console.log(1);
    dispatch(getMarkdownFromStorage());
  };

  const handleCursor = (editor, data) => {
    const pos = editor.getCursor();
    let cursor = {
      line: pos.line,
      ch: pos.ch,
    };
    dispatch(editorCursorPos(cursor));
  };

  const handleSelection = (editor, data) => {
    const sel = editor.getSelection();

    let len = sel.length;
    console.log(sel);
    dispatch(editorSelLen(len));
  };

  const t = getFromLS("theme");

  return (
    <Wrapper ref={editorPane}>
      <Expand />
      <Container className="editor-pane-inner">
        <ControlledEditor
          className="code-mirror-editor"
          onBeforeChange={handleChange}
          onKeyDown={editorChange}
          cursor={{ line: 5, ch: 10 }}
          selection={{
            ranges: [
              {
                anchor: { ch: 7, line: 15 },
                head: { ch: 7, line: 15 },
              },
            ],
            focus: true, // defaults false if not specified
          }}
          onCursor={handleCursor}
          onSelection={handleSelection}
          value={markdown}
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
  position: relative;
  height: 100%;
  width: calc(50% - 5px);
  min-width: 100px;
  overflow-y: auto;
`;

const Container = styled.div`
  height: 100%;
  .code-mirror-editor {
    height: 100% !important;
  }
`;

export default MarkEditor;
