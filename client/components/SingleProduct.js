import React from 'react'

const dummyData = {
  id: 1,
  productName: 'Chocolate Frogs',
  description:
    'Chocolate frogs are a very popular sweet made from chocolate in the form of a frog. They come with a collectible card of a famous witch or wizard in each pack. The frogs are made of seventy percent Croakoa. Presumably, this substance is what allows them to act like an actual frog.',
  imageUrl:
    'https://cdn.shopify.com/s/files/1/0221/1146/products/ChocolateFrogPin1_large.png?v=1579875491',
  price: 4.5,
}

export class SingleProduct extends React.Component {
  constructor() {
    super()
  }

  render() {
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
