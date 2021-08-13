import React from "react";
import marked from "marked";

import styled from "styled-components";

const MarkPreview = ({ markdown, previewPane }) => {
  const markedText = marked(markdown);

  return (
    <Wrapper className="pane preview-pane" ref={previewPane}>
      <div
        className="output"
        dangerouslySetInnerHTML={{ __html: markedText }}
      ></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  width: calc(50% - 5px);
  min-width: 100px;
  overflow-y: auto;
  padding: 0 20px;
  background: ${({ theme }) => theme.colors.primary};
`;

export default MarkPreview;
