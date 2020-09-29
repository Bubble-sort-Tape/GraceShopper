import React from 'react'
import {editCartItem, removeCartItem} from '../store/cart'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'

export const CartItem = (props) => {
  const {product} = props
  console.log(product)
  const handleQtyChange = (event) => {
    props.editCartItem(product.id, event.target.value)
  }

  const handleRemove = () => {
    props.removeCartItem(product.id)
  }

  return (
    <tr height="75">
      <td className="align-middle" data-label="Product">
        <Row>
          <Col>
            <Button
              type="button"
              variant="outline-danger"
              size="sm"
              onClick={handleRemove}
            >
              <span className="px-1" aria-hidden="true">
                &times;
              </span>
            </Button>
          </Col>
          <Col>
            <Link to={`/products/${product.id}`}>
              <Image src={product.imageUrl} style={{maxWidth: 50}} />
            </Link>
          </Col>
          <Col xs={6}>
            <Link to={`/products/${product.id}`}>
              <div>{product.name}</div>
            </Link>
          </Col>
        </Row>
      </td>
      <td data-label="Price">{product.price} Sickles</td>
      <td data-label="Quantity">
        <Form.Control
          as="select"
          className="mx-2 s-50"
          onChange={handleQtyChange}
        >
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
        </Form.Control>
      </td>
      <td data-label="Total">
        {product.price * product.OrderItem.quantity} Sickles
      </td>
    </tr>
  )
}

const mapDispatch = (dispatch) => ({
  editCartItem: (id, quantity) => dispatch(editCartItem(id, quantity)),
  removeCartItem: (id) => dispatch(removeCartItem(id)),
})

export default connect(null, mapDispatch)(CartItem)
