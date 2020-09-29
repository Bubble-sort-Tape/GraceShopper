import React from 'react'
import {Link} from 'react-router-dom'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

export const Confirmation = (props) => {
  return (
    <>
      <Jumbotron fluid>
        <div
          style={{padding: '30px', textAlign: 'center'}}
          className="confirmation-text"
        >
          You have successfully submitted your order! Keep an eye out for one of
          our carrier owl with a Quaffle House ribbon to arrive soon with your
          order. Click <Link to="/">HERE</Link> to return to the home page. Have
          a magical day!
        </div>
      </Jumbotron>
      <Container className="owls">
        <div style={{textAlign: 'center'}}>Our friendly carrier owls!</div>

        <Row>
          <Col xs={6} md={4}>
            <Image
              src="https://ogden_images.s3.amazonaws.com/www.lockhaven.com/images/2019/12/27162258/Owl1-560x840.jpg"
              rounded
              fluid
            />
          </Col>
          <Col xs={6} md={4}>
            <Image
              src="https://cdn.theatlantic.com/assets/media/img/photo/2020/02/photos-superb-owl-sunday-iv/s01_1103328920/main_1500.jpg"
              rounded
              fluid
            />
          </Col>
          <Col xs={6} md={4}>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bengalese_Eagle_Owl.jpg/1200px-Bengalese_Eagle_Owl.jpg"
              rounded
              fluid
            />
          </Col>
        </Row>

        {/* <img
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
        /> */}
      </Container>
    </>
  )
}
