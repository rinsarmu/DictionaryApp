import React from 'react'
import { useTheme } from '../DarkMode/ThemeContext';

const BackDrop = () => {
  const { isDarkMode, handleToggleMenu,isSmallScreen } = useTheme();

  const toggleMenu = () => {
    handleToggleMenu();
    // document.body.classList.toggle("dark");
  };
  return (
    <div className='w-full h-screen  cursor-pointer top-0 left-0 z-4   opacity-50 overflow-hidden fixed backdrop' onClick={toggleMenu}>
    </div>
  )
}

export default BackDrop
