import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {fetchSingleProduct} from '../store/singleProduct'
import {addCartItem} from '../store/cart'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Form from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'

export class SingleProduct extends React.Component {
  constructor() {
    super()
    this.state = {
      quantity: 1,
    }

    this.handleAddCartItem = this.handleAddCartItem.bind(this)
    this.handleQtyChange = this.handleQtyChange.bind(this)
  }
  componentDidMount() {
    this.props.fetchSingleProduct(this.props.match.params.productId)
  }

  handleAddCartItem(event) {
    event.preventDefault()
    this.props.addCartItem(
      this.props.match.params.productId,
      this.state.quantity
    )
  }

  handleQtyChange(event) {
    this.setState({quantity: Number(event.target.value)})
  }

  render() {
    const {product} = this.props

    return (
      <>
        <CardGroup style={{display: 'flex'}}>
          <Card
            className="m-auto"
            style={{
              textAlign: 'center',
              backgroundColor: '#1F4666',
              color: 'white',
            }}
          >
            <Card.Img
              variant="top"
              className="d-block mx-auto img-fluid w-50"
              src={product.imageUrl}
              style={{width: '25rem', verticalAlign: 'middle'}}
            />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>Price: {product.price} Sickles</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Text>
                <b>About this product:</b>
                <br />
                {product.description}
              </Card.Text>
              {/* <Form onSubmit={this.handleAddCartItem}>
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
                <Button type="submit" variant="success">
                  Add To Cart
                </Button>
              </Form> */}
            </Card.Body>
          </Card>
        </CardGroup>

        {/* // <div className="Product-right">
        //   <div>About this product: {product.description}</div>
        //   <div>
        //     <form onSubmit={this.handleAddCartItem}>
        //       <label>
        //         Quantity
        //         <select
        //           name="quantity"
        //           defaultValue="1"
        //           onChange={this.handleQtyChange}
        //         >
        //           <option>1</option>
        //           <option>2</option>
        //           <option>3</option>
        //           <option>4</option>
        //           <option>5</option>
        //           <option>6</option>
        //           <option>7</option>
        //           <option>8</option>
        //           <option>9</option>
        //           <option>10</option>
        //         </select>
        //       </label>
        //       <input type="submit" value="Add To Cart" />
        //     </form>
        //   </div>
        // </div> */}
      </>
    )
  }
}

SingleProduct.propTypes = {
  products: PropTypes.object,
}

const mapState = (state) => ({
  product: state.singleProduct,
})

const mapDispatch = (dispatch) => ({
  fetchSingleProduct: (id) => {
    dispatch(fetchSingleProduct(id))
  },
  addCartItem: (id, quantity) => {
    dispatch(addCartItem(id, quantity))
  },
})

export default connect(mapState, mapDispatch)(SingleProduct)

{
  /* <div className="Product-left">
<img className="Product-image" src={product.imageUrl} />
<div>{product.name}</div>
<div>Price: {product.price} Sickles</div>
</div>
<div className="Product-right">
<div>About this product: {product.description}</div>
<div>
  <form onSubmit={this.handleAddCartItem}>
    <label>
      Quantity
      <select
        name="quantity"
        defaultValue="1"
        onChange={this.handleQtyChange}
      >
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
      </select>
    </label>
    <input type="submit" value="Add To Cart" />
  </form>
</div>
</div> */
}
