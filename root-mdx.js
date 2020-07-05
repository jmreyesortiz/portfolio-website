import React from "react"
import { MDXProvider } from "@mdx-js/react"
import {
  PrismWrapper,
  Headings,
  Code,
  BlockQuote,
} from "./src/components/Complete"

const components = {
  h2: Headings.myH2,
  h4: Headings.myH4,
  inlineCode: Code,
  blockquote: BlockQuote,
  pre: PrismWrapper,
}

export const wrapMDX = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}
