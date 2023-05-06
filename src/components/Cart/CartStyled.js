import styled from "styled-components";


export const CartContainer = styled.div `
  width: 60%;
  border: 2px solid red;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  background-color:#000000;
`

export const HeadingCart = styled.div `
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`



/* Cards Container*/

export const CardsProductsContainer = styled.div `
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  
  /* border: 2px solid blue; */

`
/* Card */

export const CardProductStyled = styled.div `
  width: 350px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #111;
  padding: 5px;
  border-radius: 10px;
  border: 1px groove black;
  box-shadow: black 1px 0px 10px 1px;
  
`



export const ImgProductContainer = styled.div `
  width: 160px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  

  img {
    width: 80%;
    height: 90%;
    margin-top: 20px;
  } 
`

export const DataCardCart = styled.div `
  display: flex;
  flex-direction: column;
  color: #fafafa;
  
  
  h3 {
    font-size: 14px;
    border: 1px solid red;
  }
  span {
    border: 1px solid green;
    font-size: 12px;
    position: relative;
    bottom: 10px;
  }
`

export const BtnsCardCartContainer = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
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
    font-size: 12px;
  }
`
