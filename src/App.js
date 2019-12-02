import React from "react";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Editor />
      <Previewer />
    </div>
  );
}

export default App;
