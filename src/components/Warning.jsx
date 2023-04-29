import React from 'react'
import {MdWarning} from 'react-icons/md'

const Warning = ({errorText}) => {
  return (
    <div className='bg-red-600 p-5 text-white rounded-2xl flex gap-2'>
        <MdWarning />
        <p>
            {errorText}
        </p>
    </div>
  )
}

export default Warning
