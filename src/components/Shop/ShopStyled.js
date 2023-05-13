import styled from "styled-components";

export const ShopContainer = styled.section `
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  
`


/* Title section */
export const TitleSection = styled.div `
  width: 92%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`


export const SubHeadingShop = styled.span `
  color: var( --orange-color);
  position: absolute;
  top: 2px;
  font-size: 14px;
`

export const TitleHeadingShop = styled.h2 `
  color: var( --title-color);
  font-size: 30px;
`



/* Filter Buttons */

export const ContainerProvisorio = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;

  
`

export const BtnCategory = styled.button `
  width: 70px;
  height: 60px;
  border: 2px solid ${({selected}) => selected ? 'var( --orange-color)': '#182334'};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  border-radius: 10px;
  background-color:#182334;
  font-size: 18px;
  color: var(--white-color);
  font-family: var(--text-fonts);
  
  box-shadow: 0 8px 32px 0 rgba(0,0,0,0.90);
  
  `


export const ImgLogoBtn = styled.img `
  width:  75%;
  height: 75%;
  
 
`

/* Cards Products */

export const CardsProductsContainer = styled.div `

  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top:40px;
  gap: 20px;
`


export const GridCardsProducts = styled.div `
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;


`


/* Card */

export const Card = styled.div `
  background-image: linear-gradient(to right bottom, #01011f, #020521, #040a22, #050e24, #071125, #071125, #081226, #081226, #071025, #070d25, #070a24, #070723);
  box-shadow: 0 8px 32px 0 rgba(0,0,0,0.70);
  padding: 10px;
  border-radius: 15px;

  
`


export const NameCarContainer = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;

  
`

export const CarBrand = styled.h3 `
  color: var( --white-color);
  font-family: var(--text-fonts);
`

export const NameCar = styled.span `
  color: var(--text-color);
  font-family: var(--text-fonts);

`


export const ImgCarCard = styled.img `
  width: 180px;
  height: 160px;
  
`


export const DetailsCard = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  
 
`

export const BoxDeatails = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  span {
    font-size: 14px;
    
  }
`

export const YearDetail = styled.div `
  border-left: 1px groove gray;
  border-right: 1px groove gray;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
`


