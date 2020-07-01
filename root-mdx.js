import "./src/css/main.css"
import React from "react"
import { MDXProvider } from "@mdx-js/react"

const myH2 = props => {
  if (props.title) {
    return (
      <h2 {...props} style={{ fontSize: "2rem", color: "red" }}>
        {props.children}
      </h2>
    )
  }
  return (
    <h2 {...props} className="code">
      {props.children}
    </h2>
  )
}

const components = {
  h2: myH2,
}

export const wrapMDX = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}
