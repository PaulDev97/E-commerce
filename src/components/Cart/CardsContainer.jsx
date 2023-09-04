
import { CardsProductsContainer, NotProduct } from './CartStyled'
import Card from './Card'
import { useSelector } from 'react-redux'




const CardsContainer = () => {

  

  const {cartItems} = useSelector(state => state.cart)
  const { successPurchase } = useSelector(state => state.cart)
 
  console.log( 'cambio',successPurchase)


  
  return (
    <CardsProductsContainer>

      {
        cartItems.length > 0 && (
          cartItems.map(item =>(
            <Card key={item.id} {...item}/>
            
          ))
        )
        
      }

      {
        (successPurchase === false && cartItems.length === 0) && <NotProduct>No hay productos</NotProduct>
      }

      {
        successPurchase && <NotProduct>Compra exitosa</NotProduct>
      }
      


      
    </CardsProductsContainer>
  )
}

export default CardsContainer
