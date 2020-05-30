import React from "react"
import styled from "styled-components"
import { func, string } from "prop-types"

const DarkModeToggle = styled.div`
  display: flex;
  margin: 0 auto;
  & > button {
    font-size: 1.2em;
    background: none;
    border: none;
    color: ${({ theme }) => theme.colorSun};
    cursor: pointer;
    transition: color 0.3s ease;
    &:last-child {
      color: ${({ theme }) => theme.colorMoon};
    }
    &:focus {
      outline: none;
    }
  }
`

const ToggleControl = styled.span`
  position: relative;
  padding: 0 4px;
  display: flex;
  align-items: center;
`

const ToggleCheckbox = styled.input`
  width: 40px;
  height: 10px;
  background: #555;
  position: relative;
  border-radius: 5px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  vertical-align: 2px;
  outline: none;

  &:checked + label {
    left: 30px;
  }

  &:focus-visible {
    outline: solid 2px white;
  }

  & + label {
    display: inline-block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    transition: all 0.3s ease;
    cursor: pointer;
    position: absolute;
    left: 2px;
    background: #fff;
    opacity: 0.9;
    background-color: #f6f6f6;
  }
`

const ToggleLabel = styled.label``
const SunIcon = styled.button``
const MoonIcon = styled.button``

export const Toggle = ({ theme, toggleTheme }) => {
  return (
    <>
      <DarkModeToggle>
        <SunIcon>☀</SunIcon>
        <ToggleControl>
          <ToggleCheckbox
            type="checkbox"
            checked={theme === "light" ? false : true}
            onChange={toggleTheme}
            id="dmcheck"
          ></ToggleCheckbox>
          <ToggleLabel htmlFor="dmcheck" />
        </ToggleControl>
        <MoonIcon>☾</MoonIcon>
      </DarkModeToggle>
    </>
  )
}

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}
