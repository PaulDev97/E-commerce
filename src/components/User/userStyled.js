import styled from "styled-components";



export const UserContainerSection = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const UserContainer = styled.section `
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
  
  gap: 10px;

  margin: 40px 60px;

  
  div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  }


  button {
    width: 120px;
    background-color: #f42f17;
    border-radius:5px;
	  color: #fafafa;
    font-family: var(--text-font);
	  cursor:pointer;
	  padding:10px 8px;
	  border: none;
    color: white;
    font-size: 14px;
    border-radius: 10px 25px 10px 25px;
    
    cursor: pointer;
  }



  @media screen and (max-width: 320px) {
   width: 88%;
   margin: 40px 0px;
   padding: 50px 20px ;
  }

  @media screen and (min-width: 321px) and (max-width:480px) {
    width: 80%;
    margin: 40px 0px;
    padding: 50px 16px ;
    
  }

  @media screen and (min-width: 481px) and (max-width:768px) {
    width: 60%;
    padding: 50px 16px ;
    
  }

  @media screen and (min-width: 1150px){
    max-width: 500px;
  }

`

export const TextUser = styled.div `
  color: var( --text-color);

  @media screen and (max-width: 320px) {
   font-size: 12px;
  }

  @media screen and (min-width: 321px) and (max-width:480px) {
    font-size: 14px;
  }
`

export const UserIcon = styled.div `

  width: 150px;
  height: 100px;


  img {
    width: 100%;
    height: 100%;
  }

`

export const NameUser = styled.span `
   background-clip: text;
    background: #E8B81C;
    background: linear-gradient(to right, #E8B81C 0%, #EB1405 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding: 0 5px;
`