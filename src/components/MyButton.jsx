import React from 'react'
import { Children } from 'react'

const MyButton = ({children}) => {
  return (
    <button className='hover:text-white text-2xl'>
      {children}
    </button>
  )
}

export default MyButton
