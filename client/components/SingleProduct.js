import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {fetchSingleProduct} from '../store/singleProduct'
import {addCartItem} from '../store/cart'
const dummyData = [
  {
    id: 1,
    name: 'beans',
    price: '$1',
    imageUrl: 'https://i.imgur.com/DLrwUP7.png',
  },
  {
    id: 2,
    name: 'a wand',
    price: '$10',
    imageUrl: 'https://i.imgur.com/jim3MSJ.png',
  },
]

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
    const {product} = this.props || dummyData
    //console.log('\n\n\nprops\n\n\n', this.props)
    // let {productId} = props.match.params
    // let products = props.products
    // let product = products.find((obj) => {
    //   return obj.id === Number(productId)
    // })

    return (
      <div className="Product">
        <div className="Product-left">
          <img className="Product-image" src={product.imageUrl} />
          <div>{product.name}</div>
          <div>Price: ${product.price}</div>
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
        </div>
      </div>
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
