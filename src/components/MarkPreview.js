import React from "react";
import marked from "marked";

const MarkPreview = ({ markdown, previewPane }) => {
  const markedText = marked(markdown);

  return (
    <div className="pane preview-pane" ref={previewPane}>
      <div
        className="output"
        dangerouslySetInnerHTML={{ __html: markedText }}
      ></div>
    </div>
  );
};

export default MarkPreview;
