import React, { Component } from "react";
import Pane from "./components/Pane/Pane";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      markdown: "Initial value"
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ markdown: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <h2 className="AppHeader">Markdown Previewer</h2>
        <div className="AppMain">
          <Pane title="Editor">
            <Editor value={this.state.markdown} changed={this.handleChange} />
          </Pane>
          <Pane title="Preview">
            <Previewer markdown={this.state.markdown} />
          </Pane>
        </div>
      </div>
    );
  }
}

export default App;
