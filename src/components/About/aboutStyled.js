import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";


export const ContainerSection = styled.section `
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const AboutContainer = styled.div `
  width: 70%;
  margin-top: 150px;
`


export const BoxIconTextFont = styled.div `
  display: flex;
  align-items: center;
  
  gap: 10px;
  position: relative;
`

export const IconCheck = styled(FontAwesomeIcon) `
  font-size: 18px;
  color: greenyellow;
`