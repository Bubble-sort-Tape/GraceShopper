import axios from 'axios'

/**
 * ACTION TYPES
 */
const GOT_CHECKOUT = 'GOT_CHECKOUT'

/**
 * INITIAL STATE
 */
const defaultCheckout = []

/**
 * ACTION CREATORS
 */
export const gotProducts = (checkout) => ({type: GOT_CHECKOUT, checkout})

/**
 * THUNK CREATORS
 */

/**
 * REDUCER
 */
export default function (state = defaultCheckout, action) {
  switch (action.type) {
    default:
      return state
  }
}
