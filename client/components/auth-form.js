import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

/**
 * COMPONENT
 */
const AuthForm = (props) => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <Container className="my-3">
      {name === 'signup' ? (
        <h4 className="text-center my-3">
          Welcome to Quaffle House! Please fill out the forms below to create an
          account
        </h4>
      ) : null}
      <Row>
        <Col md={{span: 6, offset: 3}}>
          <Form onSubmit={handleSubmit} name={name}>
            <Form.Control name="email" placeholder="Email" type="email" />
            <Form.Control
              name="password"
              placeholder="Password"
              type="password"
            />
            {/* Only show if signing up */}
            {name === 'signup' ? (
              <>
                <Form.Control
                  name="firstName"
                  placeholder="First Name"
                  type="text"
                />
                <Form.Control
                  name="lastName"
                  placeholder="Last Name"
                  type="text"
                />
                <Form.Control as="select" name="house">
                  <option value="Gryffindor">Gryffindor</option>
                  <option value="Slytherin">Slytherin</option>
                  <option value="Ravenclaw">Ravenclaw</option>
                  <option value="Hufflepuff">Hufflepuff</option>
                </Form.Control>
                <Form.Control
                  name="phone"
                  placeholder="Phone Number"
                  type="phone"
                />
              </>
            ) : null}
            <div className="d-flex justify-content-center">
              <Button type="submit">{displayName} with Email</Button>
              {error && error.response && <div> {error.response.data} </div>}
              <Button variant="danger">
                <a href="/auth/google" style={{color: '#FFF'}}>
                  {displayName} with Google
                </a>
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = (state) => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error,
  }
}

const mapSignup = (state) => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error,
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name

      const submitData = {}
      for (let i = 0; i < evt.target.length - 1; i++) {
        submitData[evt.target[i].name] = evt.target[i].value
      }
      dispatch(auth(submitData, formName))
    },
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object,
}
