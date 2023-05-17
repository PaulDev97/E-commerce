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
 
  background-image: linear-gradient(to right bottom, #01011f, #020521, #040a22, #050e24, #071125, #071125, #081226, #081226, #071025, #070d25, #070a24, #070723);
  box-shadow: 0 8px 32px 0 rgba(0,0,0,0.80);
  border-radius: 10px;
  border: 2px groove black;
  padding: 28px 20px;

  @media screen and (min-width: 1150px){
    max-width:900px;
  } 
`


export const BoxTitleAbout = styled.div `
  font-family: var(--text-fonts);

  h3{
    font-size: 28px;
    color: var(--title-color);
  }

  span {
    font-size: 18px;
    color: var( --orange-color);
  }


  @media screen and (max-width: 320px) {
    
    h3 {
      font-size: 20px;
    }

    span {
      font-size: 16px;
    }
    
  }

  @media screen and (min-width: 321px) and (max-width:480px) {
     
    h3 {
      font-size: 20px;
    }

    span {
      font-size: 16px;
    }
  }

`

export const TextAbout = styled.div `
  p {
    color: var(--text-color);
  }


  @media screen and (max-width: 320px) {
    
   p {
    font-size: 13px;
   }
    
  }

  @media screen and (min-width: 321px) and (max-width:480px) {
    
    p{
      font-size: 14px;
    }
    
   }
`

export const SealContainer = styled.div `
  display: flex;
  
  justify-content: end;
  align-items: center;
  height: 120px;
  gap: 20px;
`

export const BoxSignature = styled.div `
  width: 150px;
  height: 50%;

  @media screen and (max-width: 320px) {
    
     width: 120px;
     height: 25%;
  }

  @media screen and (min-width: 321px) and (max-width:480px) {
     
    width: 120px;
    height: 30%;
     
  }
`

export const SignatureImg = styled.img`
  width: 100%;
  height: 100%;
`

export const DividingLine = styled.div `

  border: 1px solid gray;
  height: 35px;

  @media screen and (max-width: 320px) {
    
    display: none;
 }

 @media screen and (min-width: 321px) and (max-width:480px) {
    
   display: none;
    
 }
`

export const PresidentNameBox = styled.div `
  height: 100%;
  

  h3 {
    background-clip: text;
    background: #E8B81C;
    background: linear-gradient(to right, #E8B81C 0%, #EB1405 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 20px;
  }

  span {
    color: var(--text-color);
  }


  @media screen and (max-width: 320px) {
    
    h3 {
      font-size: 14px;
    }
 }

 @media screen and (min-width: 321px) and (max-width:480px) {
    
  h3 {
      font-size: 16px;
  }
  

  span {
    font-size: 14px;
  }
  
  
    
 }

`









export const BoxIconTextFont = styled.div `
  display: flex;
  align-items: center;
  
  gap: 10px;
  position: relative;

  
  @media screen and (max-width: 320px) {
    
    p{
      font-size: 13px;
    }
     
  }
 
   @media screen and (min-width: 321px) and (max-width:480px) {
     
    p{
      font-size: 14px;
    }
     
     
    }
`

export const IconCheck = styled(FontAwesomeIcon) `
  font-size: 18px;
  color: greenyellow;

  @media screen and (max-width: 320px) {
    
    font-size: 16px;
     
    
  }



  
`