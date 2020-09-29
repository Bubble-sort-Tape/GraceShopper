import React from 'react'

import {Navbar} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div style={{backgroundColor: '#A4A4A4', fontFamily: 'fantasy'}}>
      <Navbar />
      <Routes />
    </div>
  )
}

export default App
