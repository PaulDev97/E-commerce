import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const HeroContainer = styled.section `
  width: 100%;
  /* background-color: grey; */
  display: flex;
  justify-content: center; 
  
`



/* Left Side */

export const HeroLeftContainerStyled = styled.div `
  width: 46%;
  margin-top: 51px;

  @media screen and (max-width: 320px) {
    width: 90%;
    margin-top: 20px;
  }

  @media screen and (min-width: 321px) and (max-width:480px) {
    width: 90%;
    margin-top: 20px;
  }

`

export const HeadingHero = styled.span `
  font-size: 14px;
  font-family: var(--text-fonts);
  color: var( --orange-color);
`

export const TittleHero = styled.h2 `
  font-size:48px;
  font-family:var(--title-font);
  color: var(--title-color);
  
  width: 110%;

  @media screen and (max-width: 320px) {
    font-size: 30px;
    width: 100%;
  }

  @media screen and (min-width: 321px) and (max-width:480px) {
    font-size: 30px;
    width: 100%;
  }



`
export const TittleHero2 = styled.span `
  font-size:40px;
  font-family:var(--text-fonts);
  @media screen and (max-width: 320px) {
   font-size: 25px;
  }

  @media screen and (min-width: 321px) and (max-width:480px) {
    font-size: 25px;
  }

`

export const SubtitleHero = styled.p `
  font-size: 14px;
  color: var( --text-color);
  font-family:var(--text-fonts);

`

export const ShopButton = styled(NavLink) `
  width: 150px;
  padding: 10px 18px;
  background-color:#1F2937;;
  color: black;
  font-size: 16px;
  font-family: Poppins;
  border-radius: 10px 10px 10px 25px;
  border:2px solid black;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 25px 0px rgba(20,7,20,1);
  margin-top: 50px;

  /* ---- */
  box-shadow: 0px 0px 0px 2px #485475;
	background:linear-gradient(to bottom, #657a9e 5%, #000000 100%);
	background-color:#657a9e;
	border-radius: 10px 10px 10px 25px;
	border:1px solid #030303;
	cursor:pointer;
  color: #fafafa;
  text-decoration: none;

  @media screen and (max-width: 320px) {
   padding: 6px 10px;
   width: 120px;
  }

  @media screen and (min-width: 321px) and (max-width:480px) {
    padding: 6px 10px;
    width: 120px;
  }



`

export const BoxStatsHero = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  width: 60%;
  margin-top: 25px;

  @media screen and (max-width: 320px) {
    width: 100%;
    margin-top: 30px;
  }

  @media screen and (min-width: 321px) and (max-width:480px) {
    width: 88%;
    margin-top: 30px;
  }


`

export const ContainerBoxStats = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
 
  
`


export const NumbersHero = styled.span `
  font-size: 25px;
  font-weight: 600;
  font-family:var(--text-fonts);
  color: #fafafa;
  display: flex;
  justify-content:flex-start;
  gap: 5px;
  align-items: center;

  span {
    color: var( --orange-color);
    font-size: 30px;
  }
  
  
`

export const TextBoxStats = styled.span `
  color: var(--text-color);
  font-size: 14px;
  font-family:var(--text-fonts);

  
`

export const LineDivideStats = styled.span `
  width: 2px;
  height: 40px;
  border-radius: 2px;
  background-color: var(--text-color);
  color:var(--text-color);
  font-size: 1px;
  margin-top: 10px;
` 


/* Right Side */

export const HeroRightContainerStyled = styled.div `
  width: 46%;
  height: 100%;
  /* background-color: green; */
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;


  @media screen and (max-width: 320px) {
    display: none;
  }

  @media screen and (min-width: 321px) and (max-width:480px) {
    display: none;
  }

  `

export const ImgHeroRigth = styled.div `
  
    width: 280px;
    height: 510px;
    background-image: url(../assets/mainImg/lamboMain.jpg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 120% 120%;
    border-radius: 10px 10px 65px 10px;
    border: 8px solid #202020;
    box-shadow: black 2px 2px 10px 2px;
    margin-top: 68px;

`

export const DataHeroDiv = styled.div `
  width: 120px;
  height: 120px;
  position: absolute;
  top: 65%;
  left: 20%;
  border-radius: 55px 10px 10px 10px;;
  border: 2px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  box-shadow: 0 8px 32px 0 rgba(0,0,0,0.90);
  
  
`

export const DataImgHero = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: #fafafa;
  background-color: #182334;
  border-radius: 55px 10px 10px 10px;
  box-shadow: black 3px 3px 8px 1px;
  
 
`



export const PointsStar = styled.div `
  font-size: 25px;
   
  span {
    margin-right: 20px;
  }
`


export const TextImgPoints = styled.div `
  font-size: 16px;
`

export const LineImgPoint = styled.span `
  width: 30px;
  border: 2px solid white;
  margin-right: 54px;
`