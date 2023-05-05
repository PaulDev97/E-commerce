import { CardsProductsContainer, GridCardsProducts } from './ShopStyled'
import CardsProducts from './CardsProducts'
import { useSelector } from 'react-redux'
import { useState } from 'react'



const ShopCardsContainer = () => {


  
  let products = useSelector((state) => state.products.cars)
  
  const categorySelected = useSelector((state) => state.categories.categorySelected)

  console.log(categorySelected)

  
  
  const [limit, setLimit] = useState(3)
  
  
  if(categorySelected){
    
    products = categorySelected === 'All' ?  [...products]
    :products.filter(car => car.category === categorySelected) 

    
    

  }

  console.log(products.filter(item => item.category === categorySelected).length)
  

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

       (categorySelected === 'All' || products.filter(car => car.category === categorySelected).length >=3) &&
     <div>
        <button 
          onClick={() => setLimit(preventLimit => preventLimit - 3) }
          disabled={3 === limit}
        >
         Ver menos
        </button>

        <button 
        
          onClick={() => setLimit(preventLimit => preventLimit + 3)}
        
          disabled={products.length<= limit} 
        >
          Ver mas
        </button> 

    
        
      </div>
      
    }


    </CardsProductsContainer>
  )
}

export default ShopCardsContainer
