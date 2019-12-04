import React, { Component } from "react";
import Pane from "./components/Pane/Pane";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      markdown: defaultMarkdown
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

const defaultMarkdown = `

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

Another Heading 1 Style
=======

Sub-heading another Heading 2 style
-----------
 
Hint enter or return for line break

Text formatting
 _italic_ or *another italic*, 
 **bold**, 
 ~~strikethrough~~.

Front end technologies
  * HTML
  * CSS
  * JavaScript

Front end Libraries:

  1. Bootstrap
  2. React.js
  3. Vue.js

>You can learn all of these and more at freeCodeCamp.

Inline oce \`<div></div>\`

\`\`\`
// block code
function enjoyCoding(){
  if(youEnjoyCoding){
    return 'Keep coding!';
  }
}
\`\`\`

![Coding](https://cdn.pixabay.com/photo/2017/08/10/08/47/code-2620118_960_720.jpg)

 *[GitHub repo for this project](https://github.com/Cyph09/markdow-previewer.git)*
`;

export default App;
