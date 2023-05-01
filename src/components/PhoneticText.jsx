import React from 'react'
import { useTheme } from './DarkMode/ThemeContext';

const PhoneticText = ({phonetics}) => {
  const { isDarkMode, toggleTheme } = useTheme();

    let phoneticText =''
    phonetics.map(phonetic=>{
        phoneticText = phonetic['text']
    })

  return (
    <p className={`${isDarkMode ?'text-[#7e868e]':' text-black' } text-2xl `}>{phoneticText}</p>
      
  )
}

export default PhoneticText
