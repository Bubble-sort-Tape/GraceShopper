import React from 'react'

import {Navbar} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div style={{backgroundColor: '#E6E6E6', fontFamily: 'fantasy'}}>
      <Navbar />
      <Routes />
    </div>
  )
}

export default App
