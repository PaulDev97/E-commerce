

import { BoxContainerCart, CartContainer } from './CartStyled'
import CardsContainer from './CardsContainer'
import HeaderCart from './HeaderCart'
import BuyCartSection from './BuyCartSection'
import { useSelector } from 'react-redux'

const Cart = () => {

  const { hidden } = useSelector(state => state.cart)



  return (

    <>

      {hidden &&



        <BoxContainerCart>
          <CartContainer>

            <HeaderCart />
            <CardsContainer />
            <BuyCartSection />

          </CartContainer>


        </BoxContainerCart>





      }
    </>


  )
}

export default Cart
