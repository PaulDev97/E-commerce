import styled from "styled-components";



export const BenefitsContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 120px;
`

export const BoxTitlesSection = styled.div `
  
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    font-size: 18px;
    font-family: var(--text-fonts);
    color: orange;
    
  }

  h3 {
    font-size: 28px;
    font-family: var(--text-fonts);
    position: relative;
    top: -20px;
    color: var(--title-color);
  }

  @media screen and (max-width: 320px) {
    span {
      font-size: 16px;
    }

    h3 {
      font-size:26px
    }
  }

  @media screen and (min-width: 321px) and (max-width:480px) {
    width: 100%;
  }

`



export const BenefitsCardContainer = styled.div `
  width: 92%;
  
  display: grid;
  grid-template-columns: repeat(auto-fill,380px);
  grid-template-rows: auto;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 25px;
  
  @media screen and (max-width: 320px) {
    width: 100%;
    grid-template-columns: repeat(auto-fill,86%);
  }

  @media screen and (min-width: 321px) and (max-width:480px) {
    width: 100%;
    grid-template-columns: repeat(auto-fill,86%);
  }


`

export const CardBenefit = styled.div `
  padding: 20px;
  border-radius: 10px;
  position: relative;
  height: 120px;
  background: rgba(5,7,12,0.80);
  border: 2px solid black;
  box-shadow: 0 8px 32px 0 rgba(0,0,0,0.70);

  h2 {
    
    font-size: 24px;
    background-clip: text;
background: #E8B81C;
background: linear-gradient(to right, #E8B81C 0%, #EB1405 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;

  }

  p {
    color: var( --text-color);
  }


  @media screen and (max-width: 320px) {



    h2 {
      font-size: 18px;
      margin-top: 26px;
    }

    p {
      font-size: 16px;
    }
  }

  



`

export const ImgBackground = styled.img `
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 10px;
  z-index: -1;
`