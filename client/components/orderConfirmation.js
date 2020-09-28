import React from 'react'
import {Link} from 'react-router-dom'

export const Confirmation = (props) => {
  return (
    <div className="confirmation">
      <div className="confirmation-text">
        You have successfully submitted your order! Keep an eye out for one of
        our carrier owl with a Quaffle House ribbon to arrive soon with your
        order. Click <Link to="/">HERE</Link> to return to the home page. Have a
        magical day!
      </div>
      <div className="owls">
        Our friendly carrier owls!
        <img
          height="330"
          width="300"
          src="https://ogden_images.s3.amazonaws.com/www.lockhaven.com/images/2019/12/27162258/Owl1-560x840.jpg"
        />
        <img
          height="330"
          width="300"
          src="https://cdn.theatlantic.com/assets/media/img/photo/2020/02/photos-superb-owl-sunday-iv/s01_1103328920/main_1500.jpg"
        />
        <img
          height="330"
          width="300"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bengalese_Eagle_Owl.jpg/1200px-Bengalese_Eagle_Owl.jpg"
        />
        <img
          height="330"
          width="300"
          src="https://www.allaboutbirds.org/guide/assets/photo/71540321-480px.jpg"
        />
      </div>
    </div>
  )
}
