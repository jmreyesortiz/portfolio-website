import React, { Component } from "react"
import { withTheme } from "styled-components"

class colors extends Component {
  render() {
    const { theme } = this.props
    console.log("Current theme: ", theme)
    return <div></div>
  }
}
export default withTheme(colors)
