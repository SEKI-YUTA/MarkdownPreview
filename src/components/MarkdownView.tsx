import React, { memo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface IProps {
  markdown: string;
  style: any;
}

const MarkdownView: React.FC<IProps> = memo(({ markdown, style }) => {
  //   const markdown = `A paragraph with *emphasis* and **strong importance**.

  // > A block quote with ~strikethrough~ and a URL: [URL](https://reactjs.org)

  // * Lists
  // * [ ] todo
  // * [x] done

  // A table:

  // | name | age |
  // | ---- | --- |
  // | yuta | 19  |
  // `;
  return (
    <div style={{ ...style }}>
      <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
    </div>
  );
});

export default MarkdownView;
