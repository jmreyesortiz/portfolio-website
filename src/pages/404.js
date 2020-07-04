import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <Layout>
      <SEO title="Error -> 404: Not found | Juan M. Reyes Ortiz "></SEO>
      <ErrorPage>
        <div>
          <h1>404 not found</h1>
          <Link to="/">
            <button>Back Home</button>
          </Link>
        </div>
      </ErrorPage>
    </Layout>
  )
}

export const Button = styled.button`
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.text};
`
export const ErrorPage = styled.main`
  height: 667px;
  min-height: 100px;
  display: grid;
  place-items: center;
  background: ${({ theme }) => theme.colorPrimary10};
  text-align: center;
`
export const H1 = styled.h1`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colorPrimary1};
  margin-bottom: 2rem;
`
export default Error
