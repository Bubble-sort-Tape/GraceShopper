import React from 'react'
import {Link} from 'react-router-dom'

export const Confirmation = (props) => {
  return (
    <div className="confirmation">
      <div>
        Congrats! You have successfully submitted your order! Keep an eye out
        for an owl with a Quaffle House ribbon to arrive soon with your order.
        Click <Link to="/">HERE</Link> to return to the home page. Have a
        magical day!{' '}
      </div>
    </div>
  )
}
