import React from "react";
import marked from "marked";

const MarkPreview = ({ markdown }) => {
  const markedText = marked(markdown);

  return (
    <div className="pane preview-pane">
      <div
        className="output"
        dangerouslySetInnerHTML={{ __html: markedText }}
      ></div>
    </div>
  );
};

export default MarkPreview;
