import axios from 'axios'

//ACTION TYPE
export const SET_SINGLE_PRODUCT = 'SET_SINGLE_PRODUCT'

//ACTION CREATOR
export const setSingleProduct = (product) => ({
  type: SET_SINGLE_PRODUCT,
  product,
})

//THUNK CREATOR
export const fetchSingleProduct = (id) => async (dispatch) => {
  try {
    const {data: oneProduct} = await axios.get(`/api/products/${id}`)
    dispatch(setSingleProduct(oneProduct))
  } catch (error) {
    console.error(error)
  }
}

export default function singleProductReducer(state = null, action) {
  switch (action.type) {
    case SET_SINGLE_PRODUCT:
      return action.product
    default:
      return state
  }
}
