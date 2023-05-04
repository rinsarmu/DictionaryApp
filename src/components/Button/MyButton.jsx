// import React from 'react'
// import { Children } from 'react'
// import { useTheme } from './DarkMode/ThemeContext';

// const MyButton = ({children}) => {
//   const { isDarkMode, toggleTheme } = useTheme();

//   return (
//     <button className={`${isDarkMode ?'hover:text-gray-700':'hover:text-gray-600 text-black' } text-2xl border-spacing-0 border-red-500 p-4`}>
//       {children}
//     </button>
//   )
// }

// export default MyButton

import React from 'react'
import { Children } from 'react'
import { useTheme } from '../DarkMode/ThemeContext';

const MyButton = ({children}) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
   
  
    <button className={`${isDarkMode ?'hover:text-gray-100' :'hover:text-gray-800'} text-2xl `}>
      {children}
    </button>
  )
}

export default MyButton
