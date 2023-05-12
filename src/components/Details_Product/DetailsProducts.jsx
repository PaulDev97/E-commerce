import React from 'react'

import { BoxDetails, BoxDetailsContainer, BtnBuyDetail, CardDetails, ContainerDetails, IconDetails, ImgCarDetail, ImgDetailsContainer, InfoDetailsContainer, LogoCarDetails, PriceDetailContainer } from './detailsStyled'
import { Link, useParams } from 'react-router-dom'
import { cars } from '../../data/cars'
import { addProduct } from '../../Redux/Cart/cartSlice'
import { useDispatch } from 'react-redux'







const DetailsProducts = () => {

  const { products } = useParams() 
  console.log(products)

  const { name, speed, year, price, img_details, category, color, logo, img, id} = cars.find(item => item.id === products * 1 )

  const dispatch = useDispatch()
  
  return (
    <>
    <ContainerDetails>

      <CardDetails>

        <ImgDetailsContainer>
        <ImgCarDetail src={img_details} alt="error" ></ImgCarDetail>
        </ImgDetailsContainer>

        <InfoDetailsContainer>
        <div>
          <Link to='/products'>Products </Link><span>/ {category}</span>
        </div> 
        
        <div>

          <div className="animate__flipInX">
            <h2 >{name}</h2>
            
          </div>

          <BoxDetailsContainer>
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

          </BoxDetailsContainer>

          <PriceDetailContainer>
            <h3>Price: </h3>
            <span>${price}</span> 
          </PriceDetailContainer>

          <BtnBuyDetail onClick={() => dispatch(addProduct({img,name,price,id}))}>Comprar</BtnBuyDetail>
        </div>
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
