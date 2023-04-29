import React from 'react'
import { Children } from 'react'

const MyButton = ({children}) => {
  console.log(children)
  return (
    <button className='text-white text-2xl'>
      {children}
    </button>
  )
}

export default MyButton
