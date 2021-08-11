import React from "react";
import MarkEditor from "./MarkEditor";
import MarkPreview from "./MarkPreview";

const Panel = () => {
  return (
    <div>
      <div>
        <MarkEditor />
        <div className="resizer"></div>
        <MarkPreview />
      </div>
    </div>
  );
};

export default Panel;
