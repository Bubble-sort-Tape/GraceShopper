import React from 'react'
import {CartItem} from './CartItem'

const dummyData = [
  {
    id: 1,
    name: 'beans',
    price: '1',
    imageUrl: 'https://i.imgur.com/DLrwUP7.png',
  },
  {
    id: 2,
    name: 'a wand',
    price: '10',
    imageUrl: 'https://i.imgur.com/jim3MSJ.png',
  },
]

export const Cart = () => {
  const products = dummyData
  return (
    <div>
      <h3>Cart</h3>
      {products.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
      <div>$$$Cart Total$$$</div>
      <button type="submit">Checkout</button>
    </div>
  )
}

export default Cart
