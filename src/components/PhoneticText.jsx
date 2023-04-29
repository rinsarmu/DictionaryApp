import React from 'react'

const PhoneticText = ({phonetics}) => {
    let phoneticText =''
    phonetics.map(phonetic=>{
        phoneticText = phonetic['text']
    })

  return (
    <p>{phoneticText}</p>
      
  )
}

export default PhoneticText
