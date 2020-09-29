/**
 * ACTION TYPES
 */
const HIDE_TOAST = 'HIDE_TOAST'

/**
 * INITIAL STATE
 */
const initialToasts = []

/**
 * ACTION CREATORS
 */
export const hideToast = (id) => ({
  type: HIDE_TOAST,
  id,
})

/**
 * REDUCER
 */

let id = 1

export default function (state = initialToasts, action) {
  switch (action.type) {
    case HIDE_TOAST:
      return state.map((toast) => {
        if (toast.id === action.id) {
          return {...toast, show: false}
        } else {
          return toast
        }
      })
    case 'UPDATED_CART':
      return [
        ...state,
        {
          id: id++,
          header: 'Cart now contains:',
          body: `${action.item.OrderItem.quantity} ${action.item.name}`,
          show: true,
        },
      ]

    default:
      return state
  }
}
