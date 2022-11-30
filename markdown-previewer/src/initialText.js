export const initialText = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.
There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

\`\`\`
\/\/ this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == \'\`\`\`\' && lastLine == \'\`\`\`\') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

        1. And there are numbered lists too.
        1. Use just 1s if you want!
        1. And last but not least, let's not forget embedded images:
        
        ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

`