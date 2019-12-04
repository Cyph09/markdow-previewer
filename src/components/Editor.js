import React from "react";

const Editor = props => {
  return <textarea id="editor" value={props.value} onChange={props.changed} />;
};
export default Editor;
