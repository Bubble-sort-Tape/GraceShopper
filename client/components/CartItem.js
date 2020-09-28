import React from 'react'
import {editCartItem, removeCartItem} from '../store/cart'
import {connect} from 'react-redux'

import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

export const CartItem = (props) => {
  const {product} = props

  const handleQtyChange = (event) => {
    props.editCartItem(product.id, event.target.value)
  }

  const handleRemove = () => {
    props.removeCartItem(product.id)
  }

  return (
    <Card className="align-items-center" style={{width: '20rem'}}>
      <Card.Img variant="top" src={product.imageUrl} style={{maxWidth: 200}} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.price} Sickles</Card.Text>
        <Card.Subtitle>Qty: {product.OrderItem.quantity}</Card.Subtitle>
        <Form inline>
          <Form.Group>
            <Form.Label className="my-1 mr-2">Quantity</Form.Label>
            <Form.Control
              className="my-1 mr-sm-2"
              as="select"
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
            <Button className="my-1" type="button" onClick={handleRemove}>
              Remove
            </Button>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  )
}

const mapDispatch = (dispatch) => ({
  editCartItem: (id, quantity) => dispatch(editCartItem(id, quantity)),
  removeCartItem: (id) => dispatch(removeCartItem(id)),
})

export default connect(null, mapDispatch)(CartItem)
