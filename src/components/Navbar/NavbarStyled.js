import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const HeaderStyled = styled.header `
  width: 92%;
  border-bottom: 1px groove gray;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const UlLinks = styled.ul `
  display: flex;
  gap: 10px;
  
  list-style: none;
  `

export const NavLinks = styled(NavLink) `
  color: white;
  text-decoration: none;
`

