import { Link } from "react-router-dom";
import styled from "styled-components";


export const ContainerDetails = styled.div `
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px auto;
  
  
`

export const CardDetails = styled.div `
  width: 80%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
  position: relative;
  
  background-image: linear-gradient(to right bottom, #01011f, #020521, #040a22, #050e24, #071125, #071125, #081226, #081226, #071025, #070d25, #070a24, #070723);
  box-shadow: 0 8px 32px 0 rgba(0,0,0,0.80);
  border-radius: 10px;
  border: 2px groove black;
`


/* Img Car */
export const ImgDetailsContainer =styled.div `
  width: 45%;
  height: 500px;
  overflow: hidden;
  border-radius: 10px 0 0 10px;
`

export const ImgCarDetail = styled.img `
  width: 100%;
  height: 100%;
  transition: 0.8s;
  

  &:hover {
    transform: scale(1.2);

  }
`



/* Info car */

export const InfoDetailsContainer = styled.div `
  width: 55%;
  background:linear-gradient(rgba(5,7,12,0.80),rgba(5,7,12,0.70)),
  url(../assets/details-cars/background_details.jpg);
  background-position: center;
  background-size: cover;
  border-radius: 0 10px 10px 0;

 
`

export const ContainerLink = styled.div `
  margin: 10px 12px;
  font-size: 14px;

`

export const LinkProduct = styled(Link) `
  color: orange;
  text-decoration: none;
`


export const ContainerDetailsData = styled.div `
  margin-left: 10px;
`

export const NameDetailCart = styled.div `
  font-size: 32px;
  font-family: var(--title-color);
  
  
`

export const Line = styled.div `
  border: 1px groove gray;
  width: 78%;
  margin-top: 16px;
`


export const DetailsTitle = styled.h3 `
  font-size: 18px;
  color: var(--text-color);
  font-family: var( --text-fonts);
  
`


export const BoxDetailsContainer = styled.div `
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  

`

export const DetailsItems = styled.div `
  display: flex;
  gap: 20px;
`

export const BoxDetails = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  span {
    color: grey;
    font-family: var(--text-fonts);
    font-size: 18px;
    margin-top: 6px;
  }
`

export const IconDetails = styled.img `
  width: 25px;
  height: 30px;
`

export const PriceDetailContainer = styled.div `
  margin-top: 55px;
  gap: 10px;
  
  color: var(--text-color);
  font-family: var(--text-fonts);
  div {
    
    display: flex;
    gap: 10px;
    align-items: center;
  }
  span {
    font-size: 25px;
    color: orange;
  }
`




export const BtnBuyDetail = styled.button `
  width: 120px;
  background-color:#111;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 18px;
  cursor: pointer;
  color: var( --white-color);
  font-family: var(--text-fonts);
  font-weight: bold;
  margin-top: 20px;
  box-shadow: black 2px 2px 10px 1px ;
  position: absolute;
  right: 15px;
 
 

`


export const LogoCarDetails = styled.div `
  width: 60px;
  height: 60px;
  position: absolute;
  top: 15px;
  right: 15px;
  img {
    width: 100%;
    height: 100%;
  }
`