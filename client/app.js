import React from 'react'
import {Navbar, ToastList} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div
      style={{
        backgroundColor: '#B9B7C6',
        fontFamily: 'fantasy',
      }}
    >
      <ToastList />
      <Navbar />
      <Routes />
    </div>
  )
}

export default App
