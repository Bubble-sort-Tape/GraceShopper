import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {logout, fetchCartItems} from '../store'
import {Navbar, Nav, Badge} from 'react-bootstrap'

const navbar = ({handleClick, isLoggedIn, cart, getCartItems}) => {
  useEffect(() => {
    getCartItems()
  }, [])

  return (
    <Navbar bg="dark" variant="dark" className="justify-content-between">
      <div>
        <Navbar.Brand href="/">
          <img
            src="/quafflehouse.png"
            width="80"
            alt="Quaffle House Logo"
          ></img>
        </Navbar.Brand>
        <Navbar.Text>Fantastic deals and where to find them</Navbar.Text>
      </div>
      <Nav className="justify-content-end">
        {isLoggedIn ? (
          <>
            {/* The navbar will show these links after you log in */}
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="#" onClick={handleClick}>
              Logout
            </Nav.Link>
          </>
        ) : (
          <>
            {/* The navbar will show these links before you log in */}
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup">Sign Up</Nav.Link>
          </>
        )}
        <Nav.Link href="/cart">
          Cart
          <Badge className="mx-2" variant="light">
            {cart.reduce((acc, cur) => {
              acc = acc + cur.OrderItem.quantity
              return acc
            }, 0)}
          </Badge>
        </Nav.Link>
      </Nav>
    </Navbar>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id,
    cart: state.cart,
  }
}

const mapDispatch = (dispatch) => ({
  handleClick: () => dispatch(logout()),
  getCartItems: () => dispatch(fetchCartItems()),
})

export default connect(mapState, mapDispatch)(navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
}
