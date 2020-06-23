import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"

const contact = () => {
  return (
    <FormLayout>
      <div data-sal="zoom-out" data-sal-duration="1000">
        <ContactPage>
          <ContactForm>
            <Heading>Get in Touch!</Heading>
            <FormGroup action="https://formspree.io/xgenzowp" method="POST">
              <FormContent>
                <InputText
                  name="name"
                  type="text"
                  placeholder="name"
                ></InputText>
                <EmailText
                  name="email"
                  type="email"
                  placeholder="email"
                ></EmailText>
                <TextArea name="message" placeholder="message" rows="5" />
                <SubmitButton type="submit">Submit Here</SubmitButton>
              </FormContent>
            </FormGroup>
          </ContactForm>
        </ContactPage>
      </div>
    </FormLayout>
  )
}

const Heading = styled.h3`
  font-family: ${({ theme }) => theme.primaryFont};
  padding-top: 1.25rem;
  color: ${({ theme }) => theme.text};
`

const FormLayout = styled(Layout)``

const ContactPage = styled.section`
  display: grid;
  place-items: center;
  padding: 5rem 0;
  background: ${({ theme }) => theme.colorGrey10};
`
const ContactForm = styled.form`
  background: ${({ theme }) => theme.colorWhite};
  border-radius: ${({ theme }) => theme.radius};
  text-align: center;
  box-shadow: ${({ theme }) => theme.lightShadow};
  transition: ${({ theme }) => theme.transition};
  width: 90vw;
  max-width: 35rem;
  :hover {
    box-shadow: ${({ theme }) => theme.darkShadow};
  }
`
const FormGroup = styled.form`
  padding: 1rem 1.5rem;
`
const FormContent = styled.div`
  padding: 1rem 1.5rem;
`
const InputText = styled.input`
  ::placeholder {
    color: ${({ theme }) => theme.text};
  }
  color: ${({ theme }) => theme.text};
  font-family: ${({ theme }) => theme.primaryFont};
  display: block;
  width: 100%;
  padding: 0.75rem 1rem;
  border: none;
  margin-bottom: 1.25rem;
  background: ${({ theme }) => theme.colorGrey10};
  border-radius: ${({ theme }) => theme.radius};
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.spacing};
`
const EmailText = styled(InputText)`
  color: ${({ theme }) => theme.text};
  ::placeholder {
    color: ${({ theme }) => theme.text};
  }
`
const TextArea = styled.textarea`
  color: ${({ theme }) => theme.text};
  ::placeholder {
    color: ${({ theme }) => theme.text};
  }
  font-family: ${({ theme }) => theme.primaryFont};
  display: block;
  width: 100%;
  padding: 0.75rem 1rem;
  border: none;
  margin-bottom: 1.25rem;
  background: ${({ theme }) => theme.colorGrey10};
  border-radius: ${({ theme }) => theme.radius};
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.spacing};
`

const SubmitButton = styled.button`
  display: block;
  width: 100%;
  padding: 1rem;
  margin-left: 1rem;
  border-bottom-left-radius: ${({ theme }) => theme.radius};
  border-bottom-right-radius: ${({ theme }) => theme.radius};
  border-top-right-radius: 0;
  border-top-left-radius: 0;
`
export default contact