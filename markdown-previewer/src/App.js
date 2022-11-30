import React, {useState} from "react"
import {initialText} from "./initialText"
import "./style.css"

import Editor from "./components/Editor";
import Preview from "./components/Preview";

function App() {
  const [text, setText] = useState(initialText);

  function handleChange(event) {
    setText(event.target.value)
  }

  return (
    <div className="App">
      <Editor handleChange={handleChange} text={text}/>
      <Preview text={text}/>
    </div>
  );
}


export default App;
