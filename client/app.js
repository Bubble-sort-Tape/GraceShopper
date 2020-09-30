import React from 'react'

import {Navbar} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div
      style={{
        backgroundColor: '#B9B7C6',

        fontFamily: 'fantasy',
      }}
    >
      <Navbar />
      <Routes />
    </div>
  )
}

export default App
