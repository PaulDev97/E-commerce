import React from 'react'

import { BoxDetails, BoxDetailsContainer, BtnBuyDetail, CardDetails, ContainerDetails, ContainerDetailsData, ContainerLink, DetailsItems, DetailsTitle, IconDetails, ImgCarDetail, ImgDetailsContainer, InfoDetailsContainer, Line, LinkProduct, LogoCarDetails, NameDetailCart, PriceDetailContainer } from './detailsStyled'
import { useParams } from 'react-router-dom'
import { cars } from '../../data/cars'
import { addProduct } from '../../Redux/Cart/cartSlice'
import { useDispatch, useSelector } from 'react-redux'







const DetailsProducts = () => {

  const { products } = useParams() 
  

  const { name, speed, year, price, img_details, color, logo, img, id,category} = cars.find(item => item.id === products * 1 )

  const dispatch = useDispatch()
  
  const {isLogin} = useSelector((state) => state.user)

  return (
    <>
    <ContainerDetails>

      <CardDetails>

        <ImgDetailsContainer>
        <ImgCarDetail src={img_details} alt="error" ></ImgCarDetail>
        </ImgDetailsContainer>

        <InfoDetailsContainer>

          <ContainerLink>
            <LinkProduct to='/products'>Products </LinkProduct><span>/ {category}</span>
          </ContainerLink> 
        
          <ContainerDetailsData>

            <div >
              <NameDetailCart >{name}</NameDetailCart>
            </div>

            <Line></Line>

            <BoxDetailsContainer>
              <DetailsTitle>Details</DetailsTitle>
              
              <DetailsItems>
                
              <BoxDetails>
                <IconDetails src="../assets/cars/speed.png" alt="" />
                <span>{speed}</span>
              </BoxDetails>

              <BoxDetails>
                <IconDetails src="../assets/cars/calendar.png" alt="" />
                <span>{year}</span>
              </BoxDetails>

              <BoxDetails>
                <IconDetails src="../assets/cars/paint.png" alt="" />
                <span>{color}</span>
              </BoxDetails>
                
                
              </DetailsItems>

            </BoxDetailsContainer>

            <PriceDetailContainer>
              <div>
                <h3>Price: </h3>
                {isLogin ? <span><del desc={isLogin ? 1 : undefined}> ${price}</del>  ${price - 500}</span>  : <span>${price}</span>
           }
              </div>
              
            </PriceDetailContainer>

            <BtnBuyDetail onClick={() => dispatch(addProduct({img,name,price,id}))}>Comprar</BtnBuyDetail>
            
          </ContainerDetailsData>

        </InfoDetailsContainer>

        <LogoCarDetails>
          <img src={logo} alt="error" />
        </LogoCarDetails>

      </CardDetails>
      
      
    </ContainerDetails>
    
    </>
  )
}

export default DetailsProducts
