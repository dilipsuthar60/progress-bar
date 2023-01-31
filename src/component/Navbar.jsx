import React from 'react'
import Bottom from './Bottom'
import Question from './Question'
import Topbar from './Topbar'

const Navbar = () => {
  return (
    <div className ='main'>
      <Topbar/>
      <Question/>
      <Bottom/>
    </div>
  )
}

export default Navbar