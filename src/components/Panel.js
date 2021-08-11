import React, { useEffect } from "react";
import MarkEditor from "./MarkEditor";
import MarkPreview from "./MarkPreview";
import { splitPane } from "../helper/splitPane";
import useLocalStorage from "../hooks/useLocalStorage";

const Panel = () => {
  const [markdown, setMarkdown] = useLocalStorage("markdown", "");

  useEffect(() => {
    const resizer = document.querySelector(".resizer");
    const markEditor = document.querySelector(".editor-pane");
    const markPreview = document.querySelector(".preview-pane");

    splitPane(resizer, "H", markEditor, markPreview);

    window.addEventListener("resize", () => {
      markEditor.style.width = "100%";
      markPreview.style.width = "100%";
    });
  }, []);

  return (
    <div className="panel">
      <MarkEditor markdown={markdown} setMarkdown={setMarkdown} />
      <div className="resizer"></div>
      <MarkPreview markdown={markdown} />
    </div>
  );
};

export default Panel;
