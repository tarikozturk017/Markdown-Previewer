import React from "react"
import Markdown from 'marked-react';


const Preview = (props) => {
    return (
        <div className="preview-container">
            <div className="toolbar prev-toolbar"><i class="fa fa-free-code-camp" title="no-stack-dub-sack"></i>Previewer<i class="fa fa-arrows-alt"></i></div>

            <div id={"preview"}>
                <Markdown breaks={true}>
                    {props.text}
                </Markdown>

            </div>
        </div>
    )
}



export default Preview;