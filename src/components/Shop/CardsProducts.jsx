


import React from 'react'
import { BoxDeatails, CarBrand, Card, DetailsCard, ImgCarCard, NameCar, NameCarContainer, YearDetail} from './ShopStyled'



const CardsProducts = ({id, category, name, img, speed, year, price}) => {
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

        <button>Comprar</button>
        
      </div>

    </Card>
  )
}

export default CardsProducts
