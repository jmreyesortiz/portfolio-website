import { createGlobalStyle } from "styled-components"
export const GlobalStyles = createGlobalStyle`

::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

p{
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
}

nav{
  background: ${({ theme }) => theme.colorNav};
  background-color: ${({ theme }) => theme.colorNav};

}
body {
    line-height: 1.5;
    font-size: 0.875rem;
    margin-top: 0rem;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: ${({ theme }) => theme.primaryFont};
    margin-left:0;
    margin-bottom:0;
    margin-right:0;
}
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
}
h1,
h2,
h3,
h4 {
  letter-spacing: ${({ theme }) => theme.spacing};
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
  font-family: ${({ theme }) => theme.primaryFont};
  color: ${({ theme }) => theme.text};

}
h1 {
  font-size: 3rem;
}
h2 {
  font-size: 1.5rem;
}
h3 {
  font-size: 1.25rem;
}
h4 {
  font-size: 0.875rem;
}

p {
  margin-bottom: 1.25rem;
  font-family: ${({ theme }) => theme.primaryFont};
}

ul{
  list-style-type: none;
}
a {
  text-decoration: none;
}


footer{
  place-items: center;
  height: rem;
  background: #222;
  text-align: center;
  display: grid;
  
}
footer h4 {
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.colorWhite};
  font-weight: normal;
  text-transform: uppercase;
}

footer h4 span{
 color: ${({ theme }) => theme.colorPrimary5};
}

@media screen and (min-width: 800px) {
  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 1.75rem;
  }
  h4 {
    font-size: 1rem;
  }
  body {
    font-size: 1rem;
  }
  h1,
  h2,
  h3,
  h4 {
    letter-spacing: ${({ theme }) => theme.spacing};
    text-transform: capitalize;
    line-height: 1.25;
    margin-bottom: 0.75rem;
    font-family: ${({ theme }) => theme.primaryFont};
  }
}

button{
text-transform: uppercase;
  font-family: ${({ theme }) => theme.secondaryFont};
  background: ${({ theme }) => theme.colorPrimary5};
  color: ${({ theme }) => theme.text};
  padding: 0.375rem 0.75rem;
  letter-spacing: ${({ theme }) => theme.spacing};
  display: inline-block;
  font-weight: 800;
  -webkit-transition: ${({ theme }) => theme.transition};
  transition: ${({ theme }) => theme.transition};
  font-size: 0.975rem;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: ${({ theme }) => theme.radius};
  :hover {
  color: ${({ theme }) => theme.buttonTxtColor};
  background: ${({ theme }) => theme.buttonColor};
}
.section {
  padding: 5rem 0;
}
}



`
