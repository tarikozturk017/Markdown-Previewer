import React from "react"

const Editor = (props) => {

    function wrapHandleChange(event) {
        props.handleChange(event)
    }

    return (
        <div>
            <textarea id={"editor"} value={props.text} onChange={wrapHandleChange}/>
            
        </div>
    )
}

export default Editor;