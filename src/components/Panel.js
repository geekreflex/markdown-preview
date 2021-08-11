import React, { useEffect, useRef } from "react";
import MarkEditor from "./MarkEditor";
import MarkPreview from "./MarkPreview";
import { splitPane } from "../helper/splitPane";
import { autoScroll } from "../helper/autoScroll";
import useLocalStorage from "../hooks/useLocalStorage";

const Panel = () => {
  const [markdown, setMarkdown] = useLocalStorage("markdown", "");

  const editorPane = useRef(null);
  const previewPane = useRef(null);
  const resizer = useRef(null);

  useEffect(() => {
    console.log(editorPane, previewPane);
    autoScroll(editorPane.current, previewPane.current);
  });

  useEffect(() => {
    splitPane(resizer.current, "H", editorPane.current, previewPane.current);

    window.addEventListener("resize", () => {
      editorPane.style.width = "100%";
      previewPane.style.width = "100%";
    });
  }, []);

  return (
    <div className="panel">
      <MarkEditor
        editorPane={editorPane}
        markdown={markdown}
        setMarkdown={setMarkdown}
      />
      <div className="resizer" ref={resizer}></div>
      <MarkPreview previewPane={previewPane} markdown={markdown} />
    </div>
  );
};

export default Panel;
