import React from 'react'
import UserContextProvider from './Context/UserContextProvider'

function App() {
  return (
    <UserContextProvider>
      <h1>Learning to use Context api</h1>
    </UserContextProvider>
  )
}

export default App