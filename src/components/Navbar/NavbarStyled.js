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
  
  @media screen and (max-width: 320px) {
  width: 100%;
  background-color:rgba(5,8,12,0.97);
  height: 140px;
  position: absolute;
  top: 76px;
  justify-content: center;
  display: ${({showMenu}) => showMenu ? 'flex': 'none'};
   
  }

  @media screen and (min-width: 321px) and (max-width:480px) {
   
  width: 100%;
  background-color:rgba(5,8,12,0.97);
  height: 140px;
  position: absolute;
  top: 76px;
  justify-content: center;
  display: ${({showMenu}) => showMenu ? 'flex': 'none'};
   
  }
   
   
 

`

export const UlLinks = styled.ul `
  display: flex;
  gap: 10px;
  
  list-style: none;
  @media screen and (max-width: 320px) {

  width:80% ;
  height:80% ;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  }

  @media screen and (min-width: 321px) and (max-width:480px) {
  width:80% ;
  height:80% ;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  }

`

export const NavLinks = styled(NavLink) `
  color: white;
  text-decoration: none;

  @media screen and (max-width: 320px) {
    width: 40%;
    display: flex;
    align-items: center;
    
  }
  @media screen and (min-width: 321px) and (max-width:480px) {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
  }

  
`


export const BarsIcon = styled(FontAwesomeIcon) `
  
  display: none;

  @media screen and (max-width: 320px) {
    
    display: block;
    font-size: 20px;
  }

  @media screen and (min-width: 321px) and (max-width:480px) {
    display: block;
    font-size: 20px;

  }


`



export const BoxBubbleCartIcon = styled.div `
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  align-items: center;
  @media screen and (max-width: 320px) {
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 30px;
    

  }

  @media screen and (min-width: 321px) and (max-width:480px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }

  

`

export const CartIcon = styled(FontAwesomeIcon) `
  margin-top: 3px;
  cursor: pointer;

  @media screen and (max-width: 320px) {
    margin-top: 0;
  
  }

  @media screen and (min-width: 321px) and (max-width:480px) {
    margin-top: 0;
  }

  

`

export const BubbleIcon = styled.span `
  background-color: #182334;
  border-radius: 5px;
  width: 20px;
  border: var( --orange-color) 1px groove;
  display: ${({show}) => show ? 'block': 'none'}; 
  justify-content: center;
  align-items: center;
  
  font-size: 13px;
  color: var(--white-color);
  font-family: var(--text-fonts);

  @media screen and (max-width: 320px) {
    position: absolute;
    top: 8px;
    right: 60px;
    font-size: 12px;
    display: flex;
   
  }
  @media screen and (min-width: 321px) and (max-width:480px) {
    position: absolute;
    top: 8px;
    right: 60px;
    font-size: 12px;
    display: flex;
  }
`

