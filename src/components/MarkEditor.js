import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/markdown/markdown";

import { Controlled as ControlledEditor } from "react-codemirror2";

const MarkEditor = ({ markdown, setMarkdown, editorPane }) => {
  const handleChange = (editor, data, value) => {
    setMarkdown(value);
  };

  return (
    <div className="pane editor-pane" ref={editorPane}>
      <div className="editor-pane-inner">
        <ControlledEditor
          onBeforeChange={handleChange}
          value={markdown}
          className="code-mirror-wrapper"
          options={{
            lineWrapping: true,
            mode: "markdown",
            lineNumbers: true,
          }}
        />
      </div>
    </div>
  );
};

export default MarkEditor;
