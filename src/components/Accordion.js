import React, { useState } from "react"
import styled from "styled-components"
import { FaWrench, FaLink, FaUniversity } from "react-icons/fa"

const Acc = ({ children, title }) => {
  const [isActive, setIsActive] = useState(false)

  const titleSelect = (title) => {
    if (title === "Skills")
      return (
        <div>
          Skills <FaWrench></FaWrench>
        </div>
      )
    else if (title === "Education")
      return (
        <div>
          Education <FaUniversity></FaUniversity>
        </div>
      )
    else if (title === "Links")
      return (
        <div>
          More Links <FaLink></FaLink>
        </div>
      )
  }
  return (
    <Accordion>
      <AccordionItem>
        <AccordionTitle isActive  = {isActive} onClick={() => setIsActive(!isActive)}>
          <SkillText>{titleSelect(title)}</SkillText>
          <PlusSign>{isActive ? "-" : "+"}</PlusSign>
        </AccordionTitle >
        {isActive && <AccordionContent>{children}</AccordionContent>}
      </AccordionItem>
    </Accordion>
  )
}

const SkillText = styled.h3`
  /* margin: 0 auto; */
  /* color: ${({ theme }) => theme.colorPrimary5};  */
  color: black;
  margin-top: 0;
  margin-bottom: 0;
  justify-self: left;
  font-family: ${({ theme }) => theme.secondaryFont};
  /* margin-bottom: 3rem; */
  font-size: 1.5rem;
`

const PlusSign = styled.h3`
  margin-top: 0;
  margin-bottom: 0;
`


const Accordion = styled.div`
margin-top: 1rem;
  max-width: 700px;
  justify-self: left;
  @media screen and (max-width: 700px) {
    width: 90%;
  }
`
const AccordionItem = styled.div`
`
const AccordionTitle = styled.div`
  background-color: ${props => !props.isActive? 'white':({ theme }) => theme.colorPrimary5 };
  border: .2rem solid black;
  padding: .5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  /* background-color: ${({ theme }) => theme.colorPrimary5}; */
  /* background-color: white; */
  :hover {
    background-color: black;
    h3{
        color: white;
    }
  }
`
const AccordionContent = styled.div`
  border: 1rem black;
  padding: 1rem;
`

export default Acc
