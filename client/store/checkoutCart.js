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
export const gotCheckout = (checkout) => ({type: GOT_CHECKOUT, checkout})

/**
 * THUNK CREATORS
 */
export const getCheckout = (checkout) => async (dispatch) => {
  try {
    const {data: checkoutInfo} = await axios.post('/api/addresses', checkout)
    dispatch(gotCheckout(checkoutInfo))
  } catch (error) {
    console.error(error)
  }
}

/**
 * REDUCER
 */
export default function (state = defaultCheckout, action) {
  switch (action.type) {
    case GOT_CHECKOUT:
      return [...state, action.checkout]
    default:
      return state
  }
}
