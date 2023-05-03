import React from 'react'
import MyButton from '../MyButton'
import AppLogo from '../AppLogo'
import { BsFillBookmarkStarFill } from 'react-icons/bs'
import {MdDarkMode} from 'react-icons/md'
import {FiSun} from 'react-icons/fi'
import {FaGithub} from 'react-icons/fa'

import WrapComponent from '../../hoc/WrapComponent'
import { useTheme } from '../DarkMode/ThemeContext'


const SlideShowScreen = () => {
  const { isDarkMode,toggleTheme, isSmallScreen,handleToggleMenu,showSlide } = useTheme();

  const handleToggleTheme = () => {
    toggleTheme();
    // document.body.classList.toggle("dark");
  };

  return (
    <WrapComponent>
      {isSmallScreen && <div className={`flex flex-col w-3/6 ${ isDarkMode? 'darkMode': 'bg-gray-100'} opacity-85 p-3 rounded-xl absolute top-24  z-10 left-0 h-screen space-y-4`}>
      <AppLogo />
      <div>
        <div className='flex space-x-4 mb-2 items-center'>
          <MyButton>
            <BsFillBookmarkStarFill />

          </MyButton>
          <p>Bookmarks</p>
        </div>
        <div className='flex space-x-4 mb-2 items-center' onClick={handleToggleTheme}>
        <MyButton>
        { isDarkMode ?
          <FiSun  /> :
          <MdDarkMode />
          
        }
      </MyButton>
          <p>
          { isDarkMode ?
          'Light Mode' :
          "Dark Mode"
          
        }
          </p>
        </div>

        <div className='flex space-x-4 mb-2 items-center'>
        <MyButton>
        <a href="https://github.com/rinsarmu/DictionaryApp" target='_blank'>
         <FaGithub />

        </a>
      </MyButton>
          <p>Project</p>
        </div>
      </div>

    </div>}
    </WrapComponent>
  )
}

export default SlideShowScreen
