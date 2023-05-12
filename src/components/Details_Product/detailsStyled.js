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
  
`


export const BoxDetailsContainer = styled.div `
  display: flex;
  gap: 20px;
`


export const BoxDetails = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  span {
    color: var(--text-color);
    font-family: var(--text-fonts);
    font-size: 15px;
  }
`

export const IconDetails = styled.img `
  width: 25px;
  height: 30px;
`

export const PriceDetailContainer = styled.div `
  display: flex;
  align-items: center;
  gap: 10px;

  span {
    font-size: 20px;
    color: orange;
  }
`




export const BtnBuyDetail = styled.button `
  width: 120px;
  background-color:black;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 18px;
  cursor: pointer;
  color: var( --white-color);
  font-family: var(--text-fonts);
  font-weight: bold;
  transition: 0.3s;
  position: relative;
  box-shadow: black 2px 2px 10px 1px ;

 
  @keyframes glowing {
  0% {
    background-position: 0 0;
  }

  50% {
    background-position: 200% 0;
  }

  100% {
    background-position: 0 0;
  }
}

  &:hover {
    
  }

`


export const LogoCarDetails = styled.div `
  width: 60px;
  height: 60px;
  position: absolute;
  right: 10px;
  img {
    width: 100%;
    height: 100%;
  }
`