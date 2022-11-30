import React from "react"

const Editor = (props) => {

    return (
        <div>
            <textarea id={"preview"} value={props.text} onChange={() => props.handleChange()}/>
            
        </div>
    )
}

export default Editor;