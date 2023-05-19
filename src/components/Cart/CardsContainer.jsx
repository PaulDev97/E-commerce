
import { CardsProductsContainer, NotProduct } from './CartStyled'
import Card from './Card'
import { useSelector } from 'react-redux'



const CardsContainer = () => {

  const {cartItems} = useSelector(state => state.cart)
 
  
  return (
    <CardsProductsContainer>

      {
        cartItems.length ? (
          cartItems.map(item =>(
            <Card key={item.id} {...item}/>
            
          ))
        )
        :<NotProduct>No hay productos</NotProduct>
        
      }


      
    </CardsProductsContainer>
  )
}

export default CardsContainer
