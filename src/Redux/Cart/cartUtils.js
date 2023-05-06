

export const addProductToCart = (cartProducts, product ) => {

  const productInCart = cartProducts.find(item => item.id === product.id)

  if(productInCart) {
    return cartProducts.map(item =>{
      return item.id === productInCart.id
      ? {...item, quantity: item.quantity + 1 }
      : item;
    })
  }

  return [...cartProducts, {...product, quantity: 1 }]
}



export const deleteProductFromCart = (cartProducts, idProduct) => {

  const removeProduct = cartProducts.find(item => item.id === idProduct)

  if(removeProduct.quantity > 1) {
    return cartProducts.map(item =>{
      return item.id === removeProduct.id
      ? {...item, quantity: item.quantity - 1 }
      : item;
    })
  }

  return cartProducts.filter(items => items.id !== removeProduct.id)
}