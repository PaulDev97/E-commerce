import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";


export const CartContainer = styled.div `
  width: 60vh;
  height: 80vh;
  margin: auto;
  display: flex;
  flex-direction: column;

  align-items: center;
  margin-bottom: 40px;
  background-color:#17141d;
  position: absolute;
  right: 0;
  z-index: 2;

  @media screen and (max-width: 320px) {
   width: 100%;
   height: 100vh;
   top: 0;
   margin: none;
   margin-bottom: none;
   right: none;
   z-index: none;
  }

`

export const HeadingCart = styled.div `
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    
background-clip: text;
background: #E8B81C;
background: linear-gradient(to right, #E8B81C 0%, #EB1405 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;



  }
`



/* Cards Container*/

export const CardsProductsContainer = styled.div `
  width: 80%;
  display: flex;
  flex-direction: column;
  
  align-items: center;
  color: white;
  gap: 12px;
  overflow-y: auto;
  overflow-x: hidden;
  height: 65%;
  position: relative;

  @media screen and (max-width: 320px) {
    width: 95%;
    
  }


  
  &::-webkit-scrollbar-thumb {
  
	background:linear-gradient(to bottom, #657a9e 5%, #000000 100%);
  background-color: #657a9e;
  border-radius: 10px;
  }

  &::-webkit-scrollbar {
  width: 10px;
  background-color: none;
  border: 2px solid #f1f2f3;
  border-radius: 10px;

  @media screen and (max-width: 320px) {
    width: 8px;
    
  }





}
`

/* No hay producto */
export const NotProduct = styled.p `
  position: absolute;
  top: 45%;
  font-size: 18px;
  box-shadow: black 1px 0px 10px 1px;

backdrop-filter: blur(7px) saturate(200%);
--webkit-backdrop-filter: blur(7px) saturate(200%);
background-color: rgba(3, 5, 10, 0.84);
border-radius: 12px;
border: 1px solid rgba(255, 255, 255, 0.125);
padding: 10px;
`


/* Card */

export const CardProductStyled = styled.div `
  width: 320px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  box-shadow: black 1px 0px 10px 1px;

  backdrop-filter: blur(7px) saturate(200%);
  --webkit-backdrop-filter: blur(7px) saturate(200%);
  background-color: rgba(3, 5, 10, 0.84);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);

  @media screen and (max-width: 320px) {
   width: 90%;
   padding: 4px;
  }
`



export const ImgProductContainer = styled.div `
  width: 150px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  

  img {
    width: 75%;
    height: 82%;
    margin-top: 20px;
  } 
`

export const DataCardCart = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: #fafafa;
  gap: 6px;
  width: 60%;
  
  h3 {
    font-size: 14px;
    
  }
  span {
    
    font-size: 12px;
    
    
    color: greenyellow;

  }

  @media screen and (max-width: 320px) {
    h3{
      margin-top: 1px;
    }
  }


`

export const LineDataCard = styled.div `
  width: 30%;
  position: relative;
  bottom:10px;
  border: 1px groove gray;
`

export const BtnsCardCartContainer = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;
  button {
    background-color: black;
    border: 1px groove gray;
    cursor: pointer;
    padding: 2px 6px;
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border-radius: 4px;
    font-size: 10px;
  }
`
export const TrashIcon = styled(FontAwesomeIcon) `
  transition: all 0.3s;
  font-size: 14px;
  &:hover {
    color: red;
  }
`


export const BoxBuyCart = styled.div `
  display: flex;
  align-items: center;
  gap: 80px;


  span {
    font-size: 18px;
    font-family: var(--text-fonts);
  }

  button {
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
  font-size: 16px;
  }


  @media screen and (max-width: 320px) {
    margin-top: 10px;
    
    button {
      font-size: 14px;
    }

    span {
      font-size: 16px;
    }
  }

`