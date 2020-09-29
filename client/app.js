import React from 'react'
import {Navbar, ToastList} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <ToastList />
      <Navbar />
      <Routes />
    </div>
  )
}

export default App
