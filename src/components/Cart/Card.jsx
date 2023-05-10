
import React from 'react'
import { BtnsCardCartContainer, CardProductStyled, DataCardCart, ImgProductContainer } from './CartStyled'
import { useDispatch } from 'react-redux'
import { addProduct, deleteProduct } from '../../Redux/Cart/cartSlice'


const Card = ({id, img, name, price, quantity }) => {

  const dispatch = useDispatch()

  return (
    <CardProductStyled >
      <ImgProductContainer>
        <img src={img} alt={name} />
      </ImgProductContainer>

      <DataCardCart>
        <h3>{name}</h3>
        <span>${price}</span>
      </DataCardCart>

      <BtnsCardCartContainer>
        {
          quantity === 1
          ? <i className={"ph ph-trash"}  onClick={() => dispatch(deleteProduct(id)) }></i>
          :<button onClick={() => dispatch(deleteProduct(id)) }>-</button>
        }
        <span>{quantity}</span>
        
        <button onClick={() => dispatch(addProduct({id, img, name, price}))}>+</button>
        
      </BtnsCardCartContainer>
    </CardProductStyled>
  )
}

export default Card
