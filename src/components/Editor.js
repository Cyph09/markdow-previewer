import React from "react";

const Editor = ({ value, changed }) => {
  return <textarea id="editor" value={value} onChange={changed} />;
};
export default Editor;
