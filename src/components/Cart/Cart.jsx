

import React, { useEffect } from 'react'
import { CartContainer } from './CartStyled'
import CardsContainer from './CardsContainer'
import HeaderCart from './HeaderCart'
import BuyCartSection from './BuyCartSection'
import { useSelector } from 'react-redux'

const Cart = () => {

  const {hidden} = useSelector(state => state.cart)

  /* Esconder scroll del body al abrir Carrito */
  useEffect(() => {
    if(hidden)document.body.style.overflow =  'hidden';
    else document.body.style.overflow ='unset';
 }, [ hidden ]);

  return (

    <>

      { hidden &&
  
        <CartContainer>
          
          <HeaderCart/>
          <CardsContainer/> 
          <BuyCartSection/>
          
        </CartContainer>
  
      }
    </>

    
  )
}

export default Cart
