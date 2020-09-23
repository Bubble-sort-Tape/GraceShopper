import React from 'react'

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
  constructor(props) {
    super()
  }

  render() {
    let {productId} = this.props.match.params
    let products = this.props.products || dummyData
    let product = products.find((obj) => {
      return obj.id === Number(productId)
    })

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
            <form>
              <label>
                Quantity
                <select>
                  <option selected value="one">
                    1
                  </option>
                  <option value="two">2</option>
                  <option value="three">3</option>
                  <option value="four">4</option>
                  <option value="five">5</option>
                  <option value="six">6</option>
                  <option value="seven">7</option>
                  <option value="eight">8</option>
                  <option value="nine">9</option>
                  <option value="ten">10</option>
                </select>
              </label>
              <input type="submit" value="Checkout" />
            </form>
          </div>
        </div>
      </div>
    )
  }
}
