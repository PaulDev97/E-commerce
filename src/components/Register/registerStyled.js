import styled from "styled-components";


export const BoxBtnRegister = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
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
	  padding:10px;
	  text-decoration:none;
	  text-shadow:0px 1px 0px #1b51db;
    font-size: 14px;
  }
`