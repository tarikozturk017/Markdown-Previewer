import React from "react"

const Editor = (props) => {

    function wrapHandleChange(event) {
        props.handleChange(event)
    }

    return (
        <div className="editorWrap">
            <div class="toolbar"><i class="fa fa-free-code-camp" title="no-stack-dub-sack"></i>Editor<i class="fa fa-arrows-alt"></i></div>
            <textarea id={"editor"} value={props.text} onChange={wrapHandleChange}/>
            
        </div>
    )
}

export default Editor;