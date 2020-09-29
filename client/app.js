import React from 'react'
import {Navbar, ToastList} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div style={{backgroundColor: '#A4A4A4', fontFamily: 'fantasy'}}>
      <ToastList />
      <Navbar />
      <Routes />
    </div>
  )
}

export default App
