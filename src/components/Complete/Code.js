import React from "react"
export const Code = ({ children }) => {
  return (
    <code
      style={{
        background: "#FB8C00",
        color: "#ff7043",
        padding: "1rem",
        borderRadius: "0.25rem",
      }}
    >
      {children}
    </code>
  )
}
