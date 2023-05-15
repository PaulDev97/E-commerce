import { BoxBtnPagination, BtnPagination, CardsProductsContainer, GridCardsProducts } from './ShopStyled'
import CardsProducts from './CardsProducts'
import { useSelector } from 'react-redux'
import { useState } from 'react'



const ShopCardsContainer = () => {


  
  let products = useSelector((state) => state.products.cars)
  
  const categorySelected = useSelector((state) => state.categories.categorySelected)

  
  
  const [limit, setLimit] = useState(6)
  
  
  if(categorySelected){
    
    products = categorySelected === 'All' ?  [...products]
    :products.filter(car => car.category === categorySelected) 

    
    

  }

 
  

  return (
    <CardsProductsContainer>
      <GridCardsProducts>
      {
  
        products.map((product, index) => {

          if(limit > index) {
    
            return <CardsProducts key={product.id} {...product}/> 
    
          }
          
          return null 
          
         
  
        })
      }

      </GridCardsProducts>

          
     { 

       (categorySelected === 'All' || products.filter(car => car.category === categorySelected).length >=6) &&
     <BoxBtnPagination>
        <BtnPagination 
          onClick={() => setLimit(preventLimit => preventLimit - 3) }
          disabled={6 === limit}
        >
         Ver menos
        </BtnPagination>

        <BtnPagination 
        
          onClick={() => setLimit(preventLimit => preventLimit + 3)}
        
          disabled={products.length<= limit} 
        >
          Ver mas
        </BtnPagination> 

    
        
      </BoxBtnPagination>
      
    }


    </CardsProductsContainer>
  )
}

export default ShopCardsContainer
