import React, {useState} from "react"
import {initialText} from "./initialText"

import Editor from "./components/Editor";
import Preview from "./components/Preview";

function App() {
  const [text, setText] = useState(initialText);

  function handleChange(event) {
    setText(event.target.value)
  }

  return (
    <div className="App">
      <Preview text={text}/>
      <Editor handleChange={handleChange} text={text}/>
    </div>
  );
}


export default App;
