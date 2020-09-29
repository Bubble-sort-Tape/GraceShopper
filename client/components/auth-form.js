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
        <h4 className="text-center">
          Welcome to Quaffle House! Please fill out the forms below to create an
          account
        </h4>
      ) : null}

      <Form onSubmit={handleSubmit} name={name}>
        <Row>
          <Col>
            <Form.Control name="email" placeholder="Email" type="email" />
          </Col>
          <Col>
            <Form.Control
              name="password"
              placeholder="Password"
              type="password"
            />
          </Col>
        </Row>

        {/* Only show if signing up */}
        {name === 'signup' ? (
          <>
            <Row>
              <Col>
                <Form.Control
                  name="firstName"
                  placeholder="First Name"
                  type="text"
                />
              </Col>
              <Col>
                <Form.Control
                  name="lastName"
                  placeholder="Last Name"
                  type="text"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Control as="select" name="house">
                  <option value="Gryffindor">Gryffindor</option>
                  <option value="Slytherin">Slytherin</option>
                  <option value="Ravenclaw">Ravenclaw</option>
                  <option value="Hufflepuff">Hufflepuff</option>
                </Form.Control>
              </Col>
              <Col>
                <Form.Control
                  name="phone"
                  placeholder="Phone Number"
                  type="phone"
                />
              </Col>
            </Row>
          </>
        ) : null}
        <Button className="my-2" type="submit">
          {displayName} with Email
        </Button>
        {error && error.response && <div> {error.response.data} </div>}
      </Form>
      <Button variant="danger">
        <a href="/auth/google" style={{color: '#FFF'}}>
          {displayName} with Google
        </a>
      </Button>
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
