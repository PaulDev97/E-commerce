

import { useDispatch, useSelector } from 'react-redux'
import { BoxBuyCart } from './CartStyled'
import { buyProducts } from '../../Redux/Cart/cartSlice'


const BuyCartSection = () => {
  const {cartItems} = useSelector(state => state.cart)

  const dispatch = useDispatch()
  const {isLogin} = useSelector((state) => state.user)

  

  const totalPrice = cartItems.reduce((acc, item) => {

    return isLogin ? (acc += (item.price-500)  * item.quantity) : (acc += item.price * item.quantity)

  },0)

  
  

  const ShoppingSuccess = () => {
    dispatch(buyProducts(true))
    
    
  }

  return (
    <BoxBuyCart>
      <span>Total: ${totalPrice}</span>
      <button onClick={()=>ShoppingSuccess()}>Comprar</button>
    </BoxBuyCart>
  )
}

export default BuyCartSection
