import { createGlobalStyle } from "styled-components"

import StaatlichesRegular from "../fonts/Staatliches-regular.ttf"
import StaatlichesWoff from "../fonts/staatliches-regular-webfont.woff"
import StaatlichesWoff2 from "../fonts/staatliches-regular-webfont.woff2"

export default createGlobalStyle`

@font-face {

    font-family: "Staatliches-regular";
    src: local("Staatliches-regular"),
      url(${StaatlichesRegular}) format("truetype"),
      url(${StaatlichesWoff}) format("woff"),
      url(${StaatlichesWoff2}) format("woff2");
        font-weight: 800;
        font-style: normal;
  }

body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
}



`
