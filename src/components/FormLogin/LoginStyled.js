import { NavLink } from "react-router-dom";
import styled from "styled-components";




export const FormContainerSection = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`


export const FormContainer = styled.form `
  width:40%;
  
  display: flex;
  flex-direction: column;
  
  align-items: center;
  
  background-color: rgba(5,7,12,0.89);
  border: 2px groove gray;
  border-radius: 10px;
  padding-top: 50px;
  gap: 26px;
  margin-top: 40px;
  margin-bottom: 60px;


  h2 {
    background-clip: text;
    background: #E8B81C;
    background: linear-gradient(to right, #E8B81C 0%, #EB1405 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 24px;
  }

  input {
    width: 140px;
    border: none;
    padding: 10px;
  }


  button {
    width: 100px;
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
    font-size: 14px;
  }


  @media screen and (max-width: 320px) {
   width: 80%;
   
   padding: 50px 20px ;
  }

  @media screen and (min-width: 321px) and (max-width:480px) {
    width: 80%;
    padding: 50px 16px ;
    
  }

  @media screen and (min-width: 481px) and (max-width:768px) {
    width: 50%;
    padding: 50px 16px ;
    
  }

  @media screen and (min-width: 1150px){
    max-width: 500px;
  }



`



export const BoxInput = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  input {
    outline: none;
    background-color: #111;
    border-radius: 5px;
    padding: 10px;
    color: white;
    
    border: 2px solid #111;
  }

  span {
    color: red;
    font-size: 13px;
  }
`
export const BoxButn = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  
`

export const LinkRegister = styled(NavLink)`
   width: 100px;
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
    font-size: 14px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`
