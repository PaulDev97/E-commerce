import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";


export const ContainerSectionContact = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  
`

export const ContactContainer = styled.section `
  width:66%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 120px auto;
  background-color: rgba(5,7,12,0.89);
  border-radius: 10px;
  padding-top: 50px;
  
  

  @media screen and (max-width: 320px) {
   width: 80%;
   
   padding: 50px 20px ;
  }

  @media screen and (min-width: 321px) and (max-width:480px) {
    width: 80%;
    padding: 50px 16px ;
    
  }

  @media screen and (min-width: 1150px){
    max-width: 900px;
  }

  
`

export const BoxTitleContact = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  h2 {
    font-size: 28px;
    font-family: var(--text-fonts);
    color: var(--title-color);
  }

  span {
    font-size: 18px;
    font-family: var(--text-fonts);
    color: var(--text-color);
  }

  @media screen and (max-width: 320px) {
    
    h2 {
      font-size: 20px;
    }

    span {
      font-size: 14px;
    }
  }

  @media screen and (min-width: 321px) and (max-width:480px) {
    h2 {
      font-size: 22px;
    }

    span {
      font-size: 16px;
    }
  }
    
 
`


export const IconsContactContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 40px;
  
  width: 100%;

  @media screen and (max-width: 320px) {
    gap: 50px;
  }

  @media screen and (min-width: 321px) and (max-width:480px) {
    gap: 50px;
  }
`

export const DateContactContainer = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;


  span {
    color: var(--text-color);

  }

  @media screen and (max-width: 320px) {
   span {
    font-size: 14px;
  }
  }

  @media screen and (min-width: 321px) and (max-width:480px) {
    span {
    font-size: 16px;
  }
  }
`

export const IconContact = styled(FontAwesomeIcon)`
  font-size: 26px;
  color: var(--orange-color);
`


export const FormContactContainer = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  margin-top: 60px;

  h3 {
    background-clip: text;
    background: #E8B81C;
    background: linear-gradient(to right, #E8B81C 0%, #EB1405 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 24px;
    font-family: var(--text-fonts);
  }

  @media screen and (max-width: 320px) {
    h3 {
      font-size: 20px;
    }
  }

  @media screen and (min-width: 321px) and (max-width:480px) {
    h3 {
      font-size: 22px;
    }
  }
`


export const FormContact = styled.form `
  display: flex;
  flex-direction: column;
  width: 70%;



  button {
    width: 40%;
    margin: 30px auto;
  color: var( --white-color);
  font-family: var(--text-fonts);
  box-shadow: 0px 0px 0px 2px #485475;
	background:linear-gradient(to bottom, #657a9e 5%, #000000 100%);
	background-color:#657a9e;
	border-radius:5px;
	border:1px solid #030303;
	cursor:pointer;
	padding:5px;
	text-decoration:none;
	text-shadow:0px 1px 0px #1b51db;
  font-size: 12px;
  }

  @media screen and (max-width: 320px) {
    width: 100%;
  }

  @media screen and (min-width: 321px) and (max-width:480px) {
    width: 100%;
  }
`

export const BoxLabelInput = styled.div `
  display: flex;
  flex-direction: column;
  gap: 10px;

  label {
    font-family: var(--text-fonts);
    font-size: 18px;
    margin-top: 10px;
  }

  input {
    outline: none;
    background-color: #111;
    border-radius: 5px;
    padding: 10px;
    color: white;
    
    border: 2px solid #111;
  }




  textarea {
    resize: none;
    outline: none;
    background-color: #111;
    border-radius: 5px;
    padding: 10px;
    color: white;
    
    border: 2px solid #111;
  }


  @media screen and (max-width: 320px) {
   
    label {
      font-size: 16px;
    }

    input, textarea {
      width: 90%;
    }
  }

  @media screen and (min-width: 321px) and (max-width:480px) {
    label {
      font-size: 16px;
    }

    input, textarea {
      width: 90%;
    }
  }


  

`