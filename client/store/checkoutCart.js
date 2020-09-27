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
    const data = {
      shippingAddress: {
        address1: checkout.addressShip1,
        address2: checkout.addressShip2,
        city: checkout.cityShip,
        zip: checkout.zipShip,
        country: checkout.countryShip,
      },
      billingAddress: {
        address1: checkout.addressBill1,
        address2: checkout.addressBill2,
        city: checkout.cityBill,
        zip: checkout.zipBill,
        country: checkout.countryBill,
      }, //test // test ..test .. test

      paymentMethod: String(checkout.creditCard),
    }

    const {data: checkoutInfo} = await axios.post('/api/addresses', data)
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
