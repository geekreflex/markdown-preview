import React from "react";
import marked from "marked";
import styled from "styled-components";
import Expand from "./Expand";

const MarkPreview = ({ markdown, previewPane }) => {
  const markedText = marked(markdown);

  return (
    <Wrapper className="pane preview preview-pane" ref={previewPane}>
      <Expand pane={previewPane} />
      <Container dangerouslySetInnerHTML={{ __html: markedText }}></Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: calc(50% - 5px);
  min-width: 100px;
  background: ${({ theme }) => theme.colors.primary};
`;

const Container = styled.div`
  overflow-y: auto;
  padding: 0 20px;
  height: 100%;
  & img {
    margin: 0;
    border: 0;
  }

  & p {
    margin: 1em 0;
  }

  & a {
    color: ${({ theme }) => theme.colors.link.text};
  }

  & a:visited {
    color: ${({ theme }) => theme.colors.link.visited};
    background-color: transparent;
  }

  & a:active {
    color: ${({ theme }) => theme.colors.link.active};
    background-color: transparent;
  }

  & a:hover {
    text-decoration: none;
  }

  & p img {
    border: 0;
    margin: 0;
  }

  & h1,
  & h2,
  & h3,
  & h4,
  & h5,
  & h6 {
    color: ${({ theme }) => theme.colors.text};
    background-color: transparent;
    margin: 1em 0;
    font-weight: normal;
  }

  & h1 {
    font-size: 180%;
  }

  & h2 {
    font-size: 160%;
  }

  & h3 {
    font-size: 140%;
  }

  & h4 {
    font-size: 110%;
  }

  & h5 {
    font-size: 105%;
  }

  & h6 {
    font-size: 100%;
  }

  & dt {
    font-style: italic;
  }

  & dd {
    margin-bottom: 1.5em;
  }

  & li {
    line-height: 1.5em;
  }

  & code {
    padding: 0.1em;
    font-size: 14px;
    font-family: "Menlo", monospace;
    background-color: ${({ theme }) => theme.colors.textbg};
    border: 1px solid ${({ theme }) => theme.colors.border};
  }

  & pre {
    font-family: "Menlo", monospace;
    background-color: ${({ theme }) => theme.colors.secondary};
    padding: 0.5em;
    line-height: 1.25em;
    // border: 1px solid #efefef;
    // border-bottom: 1px solid #ddd;
  }

  & pre code {
    background-color: transparent;
    border-width: 0;
    white-space: pre-wrap;
  }

  & blockquote {
    padding-left: 20px;
    border-left: 5px solid ${({ theme }) => theme.colors.textbg};
  }

  & table {
    border-collapse: collapse;
    border: 1px solid #efefef;
    border-bottom: 1px solid #ddd;
    -webkit-box-shadow: 0 1px 3px 0 #eee;
    -moz-box-shadow: 0 1px 3px 0 #eee;
    -ms-box-shadow: 0 1px 3px 0 #eee;
    box-shadow: 0 1px 3px 0 #eee;
  }

  & td,
  & th {
    border: 1px solid #ddd;
    padding: 0.5em;
  }

  & th {
    background-color: transparent;
  }
`;

export default MarkPreview;
