
import React from 'react'
import { BtnsCardCartContainer, CardProductStyled, DataCardCart, ImgProductContainer, LineDataCard, TrashIcon } from './CartStyled'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, deleteProduct } from '../../Redux/Cart/cartSlice'

import { faTrash } from '@fortawesome/free-solid-svg-icons'


const Card = ({id, img, name, price, quantity }) => {

  const dispatch = useDispatch()

  const { isLogin } = useSelector(state => state.user)


  return (
    <CardProductStyled >
      <ImgProductContainer>
        <img src={img} alt={name} />
      </ImgProductContainer>

      <DataCardCart>
        <h3>{name}</h3>
        <LineDataCard></LineDataCard>
        {
          isLogin ? <span>${price - 500}</span>  : <span>${price}</span>
        }
      </DataCardCart>

      <BtnsCardCartContainer>
        {
          quantity === 1
          ? <TrashIcon icon={faTrash} onClick={() => dispatch(deleteProduct(id)) } /> 
         
          :<button onClick={() => dispatch(deleteProduct(id)) }>-</button>
        }
        <span>{quantity}</span>
        
        <button onClick={() => dispatch(addProduct({id, img, name, price}))}>+</button>
        
      </BtnsCardCartContainer>
    </CardProductStyled>
  )
}

export default Card
