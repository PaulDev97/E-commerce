import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const HeaderStyled = styled.header `
  width: 100%;
  border-bottom: 2px solid gray;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: #000016;



`

export const Menu = styled.nav `
  background-color: red;
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


export const CartIcon = styled(FontAwesomeIcon) `
  margin-top: 3px;
  cursor: pointer;
`

export const BubbleIcon = styled.span `
  background-color: #182334;
  border-radius: 5px;
  width: 20px;
  border: var( --orange-color) 1px groove;
  display: ${({show}) => show ? 'flex': 'none'}; 
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 30px;
  top: 10px;
  font-size: 13px;
  color: var(--white-color);
  font-family: var(--text-fonts);
`

