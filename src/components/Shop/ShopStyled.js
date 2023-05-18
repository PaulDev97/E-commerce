import styled from "styled-components";

export const ShopContainer = styled.section `
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 160px;
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

  @media screen and (max-width: 320px) {
    font-size: 20px;
    margin-top: 25px;
  }

  @media screen and (min-width: 321px) and (max-width:480px) {
    font-size: 22px;
    margin-top: 25px;
  }

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
  display: grid;
  grid-template-columns: repeat(auto-fill,230px);
  grid-template-rows: auto;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;

  @media screen and (max-width: 320px) {
   gap: 20px;
  }

  @media screen and (min-width: 321px) and (max-width:480px) {
    gap: 20px;
  }


`


/* Card */

export const Card = styled.div `
 
  box-shadow: 0 8px 32px 0 rgba(0,0,0,0.70);
  padding: 10px;
  border-radius: 15px;


  width: 190px;
  background: rgb(40,40,55);
  background: linear-gradient(344deg, rgba(40,40,55,1) 0%, rgba(16,16,18,1) 50%);
  box-shadow: 4px 6px 14px #00000036;
 
  color: #F9F9F9;
  padding: 16px;
  
  
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
  color: orange;
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
    display: flex;
    gap: 10px;
  }

  del {
    color: ${({desc}) => desc ? 'orange': 'var( --text-color)'};
  }
`

export const BoxBtnCard = styled.div `
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
  
`

export const BtnCard = styled.button `
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

  
  
`


export const BoxBtnPagination = styled.div `
  display: flex;
  gap: 16px;
  margin-top: 40px;
  @media screen and (max-width: 320px) {
   margin-top: 20px;
  }

  @media screen and (min-width: 321px) and (max-width:480px) {
    margin-top: 20px;
  }
`


export const BtnPagination = styled.button `
  background-color:${({disabled}) => disabled ? 'gray': '#1F2937'};
  font-size: 16px;
  cursor: ${({disabled}) => disabled ? 'not-allowed': 'pointer'};
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  padding: 12px 20px;

  color: white;
  border: none;
  border-radius: 0.6em;

  @media screen and (max-width: 320px) {
    padding: 8px 10px;
    font-size: 14px;
  }

  @media screen and (min-width: 321px) and (max-width:480px) {
    padding: 8px 10px;
    font-size: 16px;
  }
`
