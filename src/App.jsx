import { useState } from 'react'
import CreateAndSell from './components/CreateAndSell'
import Header from './components/Header'
import Showcase from './components/Showcase'
import UserCount from './components/UserCount'
// import reactLogo from './assets/react.svg'

function App() {
  return (
   <>
   <Header/>
   <Showcase/>
   <UserCount/>
   <CreateAndSell/>
   </>
  )
}

export default App
