import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/vsDark"

export const Example = props => {
  const exampleCode = `
(function someDemo() {
  var test = "Hello World!";
  console.log(test);
})();`

  const className = props.children.props.className
  const language = className.replace(/language-/, "")

  return (
    <Highlight
      {...defaultProps}
      language={language}
      code={props.children.props.children.trim()}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
