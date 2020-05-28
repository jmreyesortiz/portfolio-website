import React from "react"
import styled from "styled-components"
import { func, string } from "prop-types"

const Button = styled.button`
  background: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.6rem;
`

export const Toggle = ({ theme, toggleTheme }) => {
  return <Button onClick={toggleTheme}>Clickerino</Button>
}

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}
