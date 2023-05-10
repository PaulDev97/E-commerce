


import React from 'react'
import { BoxDeatails, CarBrand, Card, DetailsCard, ImgCarCard, NameCar, NameCarContainer, YearDetail} from './ShopStyled'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../Redux/Cart/cartSlice'
import { useNavigate } from 'react-router-dom'




const CardsProducts = ({id, category, name, img, speed, year, price}) => {

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
         
         {/* Kilometraje */}
          <BoxDeatails>
            <span>{speed}</span>
          </BoxDeatails>

          {/* Año */}
          <YearDetail>
            <span>{year}</span>
          </YearDetail>

          
          {/* Precio */}
          <BoxDeatails>
           <span>{price}</span>
          </BoxDeatails>


        </DetailsCard>

        <button onClick={() => dispatch(addProduct({img,name,price,id}))}>Comprar</button>
        <button onClick={() => navigate(`${id}`)}>info</button>
        
      </div>

    </Card>
  )
}

export default CardsProducts
