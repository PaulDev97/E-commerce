


import React from 'react'
import { BoxBtnCard, BoxDeatails, BtnCard, CarBrand, Card, DetailsCard, ImgCarCard, NameCar, NameCarContainer} from './ShopStyled'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../Redux/Cart/cartSlice'
import { useNavigate } from 'react-router-dom'




const CardsProducts = ({id, category, name, img, price}) => {

  const navigate = useNavigate()

  const dispatch = useDispatch()

  return (
    <Card>
      <NameCarContainer>
        <CarBrand>{category}</CarBrand>
        <NameCar>{name}</NameCar>
      </NameCarContainer>
      
      <div>

        {/* imagen de la carta */}
        <div>
          <ImgCarCard src={img} alt={category} />  
        </div>

          {/* Datos de la carta */}
        <DetailsCard>
          
          {/* Precio */}
          <BoxDeatails>
            <span>Price:</span>
           <span>${price}</span>
          </BoxDeatails>


        </DetailsCard>

        <BoxBtnCard>


        <BtnCard onClick={() => dispatch(addProduct({img,name,price,id}))}>Comprar</BtnCard>
        <BtnCard onClick={() => navigate(`${id}`)}>info</BtnCard>
        
        </BoxBtnCard>
      </div>

    </Card>
  )
}

export default CardsProducts
