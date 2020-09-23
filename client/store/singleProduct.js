import axios from 'axios'

//ACTION TYPE
export const SET_SINGLE_PRODUCT = 'SET_SINGLE_PRODUCT'

//ACTION CREATOR
export const setSingleProduct = (product) => ({
  type: SET_SINGLE_PRODUCT,
  product,
})
