# Quaffle House
_Quaffle House is a fictional ecommerce site that sells items from the Wizarding World of Harry Potter._

## How to Use Quaffle House 
Quaffle House is deployed here: http://quaffle-house.herokuapp.com/

After going to the link provided, the user is first directed to a page that lists all products. A user can browse through the different products that are provided. If a user sees a product they are interested in, they can click on the individual product and be brought to the single product page. Here they can decide if they want to put the item in their cart or not. They can choose to from a quantity of 1-10 when adding into the cart. 

A user can browse through all products and add as many products as they want to. When they are ready to check-out, they can click the check-out button shown in the cart page. The user will be redirected to a page with a form for a shipping address, billing address, and credit card information. At this moment, the form is pre-filled out with fake data for the user Harry Potter. The user can then press the 'order now!' button. They will then be redirected to a confirmation page that has a confirmation message along with pictures of owls. 

Users can 'shop' in Quaffle House as either a guest or a logged in user. At the top right, within the navigation bar, there is an option to either Sign Up or Log in. A user can sign up for account, if they don't have one. They will be asked to provide basic information along with their Hogwarts Wizard House. After signing up, a user can log in with their email and password at any time from any device. There is also an option to sign up with a google account. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Set-Up

Quaffle House runs in a Node environment and requires a postgreSQL database named “quaffle-house”. You’ll also need to create a database for testing called “quaffle-house-test.”

Fork and/or clone this repository to create your own local copy and follow the instructions below.

### Installation

Install dependencies for the project with

```
npm install
```

And run the seed file with

```
npm run seed
```

## Deployment
Quaffle House is deployed on Heroku, as shown from the link provided above. 

## Built With

Technology | Description
------------ | -------------
[React](https://reactjs.org/) | Used to build main components
[React-Redux](https://react-redux.js.org/) | Used to store state
[Node.js](https://www.npmjs.com/) | Runtime environment and npm package manager
[Express](https://expressjs.com/) | The web framework used
[PostgreSQL](https://postgresapp.com/) | Relational database
[Sequelize](http://docs.sequelizejs.com/) | promise-based ORM 


## Authors 

[Danielle Arquisola](https://github.com/daniellearquisola), [Xander Bakx](https://github.com/xanderbakx), [David Moon](https://github.com/moondrek)
