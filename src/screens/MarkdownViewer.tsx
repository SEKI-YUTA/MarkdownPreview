import React, { useRef, useState, useEffect } from "react";
import MarkdownView from "../components/MarkdownView";
import CSS from "csstype";

const styles: {
  container: CSS.Properties;
  rightItem: CSS.Properties;
  leftItem: CSS.Properties;
} = {
  container: {
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rightItem: {
    display: "flex",
    justifyContent: "center",
    width: "50%",
    height: "100vh",
  },
  leftItem: {
    width: "50%",
    height: "100vh",
  },
};

const MarkdownViewer = () => {
  const inputAreaRef = useRef<HTMLTextAreaElement>(null!);
  const [input, setInput] = useState("please input markdown text");
  useEffect(() => {}, []);

  // const markdown = `A paragraph with *emphasis* and **strong importance**.

  // > A block quote with ~strikethrough~ and a URL: [URL](https://reactjs.org)

  // * Lists
  // * [ ] todo
  // * [x] done

  // A table:

  // | name | age |
  // | ---- | --- |
  // | yuta | 19  |
  // `;

  const updated = (event: React.FormEvent<HTMLTextAreaElement>) => {
    setInput(event.currentTarget.value);
  };
  return (
    <div style={styles.container}>
      <div style={styles.leftItem}>
        <MarkdownView style={{ width: "100%" }} markdown={input} />
      </div>
      {/* <input type="text" ref={inputAreaRef} onChange={updated} /> */}
      <div style={styles.rightItem}>
        <textarea
          ref={inputAreaRef}
          onChange={updated}
          style={{ display: "block", width: "100%" }}
        />
      </div>
    </div>
  );
};

export default MarkdownViewer;
