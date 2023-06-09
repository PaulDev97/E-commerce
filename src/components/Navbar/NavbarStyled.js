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
  background-image: linear-gradient(to right bottom, #0c0646, #000f3f, #001133, #001125, #000f17, #000e15, #000c14, #000b12, #000c1c, #000b25, #00082d, #080232);


  @media screen and (min-width: 1150px){
    max-width: 1100px;
  }

`


export const LogoContainer = styled.div`
  
  width: 130px;
  height: 100px;

  img {
    width: 100%;
    height: 100%;
    cursor: pointer;
    
  }
`

export const Menu = styled.nav `


display: flex;
justify-content: start;
align-items: center;

margin-right: 100px;
  
  @media screen and (max-width: 320px) {
  width: 100%;
  background-color:rgba(5,8,12,0.97);
  height: 140px;
  position: absolute;
  top: 101px;
  justify-content: center;
  display: ${({showMenu}) => showMenu ? 'flex': 'none'};
  height: 260px;
   
  }

  @media screen and (min-width: 321px) and (max-width:480px) {
   
  width: 100%;
  background-color:rgba(5,8,12,0.97);
  height: 260px;
  position: absolute;
  top: 101px;
  justify-content: center;
  display: ${({showMenu}) => showMenu ? 'flex': 'none'};
   
  }

  @media screen and (min-width: 481px) and (max-width:768px) {
   
   width: 100%;
   background-color:rgba(5,8,12,0.97);
   height: 260px;
   position: absolute;
   top:101px;
   justify-content: center;
   display: ${({showMenu}) => showMenu ? 'flex': 'none'};
    
   }
   
   
 

`

export const UlLinks = styled.ul `
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
  
  list-style: none;


  @media screen and (max-width: 320px) {

  width:80% ;
  height:80% ;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  }

  @media screen and (min-width: 321px) and (max-width:480px) {
  width:80% ;
  height:80% ;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  }

  @media screen and (min-width: 481px) and (max-width:768px) {

  width:80% ;
  height:80% ;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    gap: 24px;
  }

`

export const NavLinks = styled(NavLink) `
  color: white;
  text-decoration: none;
  font-size: 18px;
  transition: all 0.4s;
  &:hover {
    background-clip: text;
    background: #E8B81C;
    background: linear-gradient(to right, #E8B81C 0%, #EB1405 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    
  }
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

  @media screen and (min-width: 481px) and (max-width:768px) {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
  }

  
`


export const BarsIcon = styled(FontAwesomeIcon) `
  
  display: none;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: var(--orange-color);
  }

  @media screen and (max-width: 320px) {
    
    display: block;
    font-size: 20px;
  }

  @media screen and (min-width: 321px) and (max-width:480px) {
    display: block;
    font-size: 20px;

  }

  @media screen and (min-width: 481px) and (max-width:768px) {
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

  @media screen and (min-width: 481px) and (max-width:768px) {
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
  font-size: 20px;
  
  transition: 0.3s;

  &:hover {
    color: var(--orange-color);
  }
  @media screen and (max-width: 320px) {
    margin-top: 0;
  
  }

  @media screen and (min-width: 321px) and (max-width:480px) {
    margin-top: 0;
  }

  @media screen and (min-width: 481px) and (max-width:768px) {
    margin-top: 0;
  }

  

`

export const BubbleIcon = styled.span `
  background-color: #182334;
  border-radius: 5px;
  width: 20px;
  border: var( --orange-color) 1px groove;
  display: ${({show}) => show ? 'flex': 'none'}; 
  justify-content: center;
  align-items: center;
  
  font-size: 13px;
  color: var(--white-color);
  font-family: var(--text-fonts);
  position: absolute;
    top: 16px;
    right: 16px;

  @media screen and (max-width: 320px) {
    position: absolute;
    top: 8px;
    right: 60px;
    font-size: 12px;
    
    display: ${({show}) => show ? 'flex': 'none'}; 
    justify-content: center;
    align-items: center;
  }


  @media screen and (min-width: 321px) and (max-width:480px) {
    position: absolute;
    top: 8px;
    right: 60px;
    font-size: 12px;
    
    display: ${({show}) => show ? 'flex': 'none'}; 
    justify-content: center;
    align-items: center;
  }


  @media screen and (min-width: 481px) and (max-width:768px) {
    position: absolute;
    top: 12px;
    right: 60px;
    font-size: 12px;

    display: ${({show}) => show ? 'flex': 'none'}; 
    justify-content: center;
    align-items: center;
  }
`

