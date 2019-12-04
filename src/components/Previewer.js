import React from "react";
import marked from "marked";

const Previewer = ({ markdown }) => {
  marked.setOptions({
    breaks: true,
    gfm: true
  });
  return (
    <div id="preview" dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
  );
};

export default Previewer;
