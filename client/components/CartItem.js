import React from 'react'

export const CartItem = (props) => {
  const {product} = props
  return (
    <div>
      <img src={product.imageUrl} width="200" height="200" />
      <h3>{product.name}</h3>
      <h3>{product.price}</h3>
      <form>
        <label>
          Quantity
          <select>
            <option defaultValue value="1">
              1
            </option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </label>
        <button type="submit">Remove</button>
      </form>
    </div>
  )
}

export default CartItem
