import React from 'react'
import {editCartItem, removeCartItem} from '../store/cart'
import {connect} from 'react-redux'

export const CartItem = (props) => {
  const {product} = props

  const handleQtyChange = (event) => {
    props.editCartItem(product.id, event.target.value)
  }

  const handleRemove = () => {
    props.removeCartItem(product.id)
  }

  return (
    <div>
      <img src={product.imageUrl} width="200" height="200" />
      <h3>{product.name}</h3>
      <h3>${product.price}</h3>
      <h3>Qty: {product.OrderItem.quantity}</h3>
      <form>
        <label>
          Quantity
          <select onChange={handleQtyChange}>
            <option value="1">1</option>
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
        <button type="button" onClick={handleRemove}>
          Remove
        </button>
      </form>
    </div>
  )
}

const mapDispatch = (dispatch) => ({
  editCartItem: (id, quantity) => dispatch(editCartItem(id, quantity)),
  removeCartItem: (id) => dispatch(removeCartItem(id)),
})

export default connect(null, mapDispatch)(CartItem)
