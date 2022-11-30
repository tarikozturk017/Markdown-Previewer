import React from "react"
import Markdown from 'marked-react';


const Preview = (props) => {
    return (
        <div id={"preview"}>
            <Markdown breaks={true}>
                {props.text}
            </Markdown>

        </div>
    )
}



export default Preview;