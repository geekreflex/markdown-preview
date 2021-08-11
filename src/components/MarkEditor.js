import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/markdown/markdown";

import { Controlled as ControlledEditor } from "react-codemirror2";

const MarkEditor = ({ markdown, setMarkdown }) => {
  const handleChange = (editor, data, value) => {
    setMarkdown(value);
    console.log(data);
  };

  return (
    <div className="pane editor-pane">
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
  );
};

export default MarkEditor;
