import React from 'react'
import {MdWarning} from 'react-icons/md'

const Warning = ({errorText}) => {
  return (
    <div className='bg-[#1C2331] p-5 text-white rounded-2xl flex gap-2 absolute top-36 mx-3'>
        <MdWarning />
        <p>
            {errorText}
        </p>
    </div>
  )
}

export default Warning
