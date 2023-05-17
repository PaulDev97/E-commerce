import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";



export const FooterSectionContainer = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

`

export const FooterContainer = styled.footer`
  width: 96%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 40px;
  gap: 20px;


  @media screen and (max-width: 320px) {
    
    margin-top: none;
    flex-direction: column;
    gap: 46px;
  }

  @media screen and (min-width: 321px) and (max-width:640px) {
    margin-top: none;
    flex-direction: column;
    gap: 46px;
  }

  @media screen and (min-width: 1150px){
    max-width: 1100px;
  }


`



export const BoxLeftFooter = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    color: var( --text-color);
    font-family: var( --text-fonts);
  }
  
`

export const LogoFooter = styled.div `
  width: 150px;
  height: 162px;
  
  img {
    width: 100%;
    height: 100%;
  }

`

export const MiddleFooter = styled.div `
  

  h3 {
    background-clip: text;
    background: #E8B81C;
    background: linear-gradient(to right, #E8B81C 0%, #EB1405 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

`


export const BoxItemsFooter = styled.div `
  display: flex;
  flex-direction: column;
  gap: 10px;

  div {
    display: flex;
    
    align-items: center;
    gap: 10px;
  }

  span {
    color: var( --text-color);
  }

  @media screen and (max-width: 320px) {
    span {
    font-size: 14px;
    
  }
}

  @media screen and (min-width: 321px) and (max-width:640px) {
    span {
    font-size: 15px;
  }
  }

`


export const IconFooter = styled(FontAwesomeIcon)`
  color: var(--orange-color);
`


export const BoxAppsImg = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`

export const PlayStore = styled.div `
  width: 120px;
  height: 70px;
  border-radius: 5px;

  img {
    width: 100%;
    height: 100%;
    
    border-radius: 5px;
  }
`

export const Play = styled.div `
   width: 116px;
  height: 70px;
  border-radius: 5px;
  border: 3px solid white;
  border-radius: 5px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
`