import React from 'react'
import MyButton from '../Button/MyButton'
import AppLogo from '../nav/AppLogo'
import { BsFillBookmarkStarFill } from 'react-icons/bs'
import {MdDarkMode} from 'react-icons/md'
import {FiSun, } from 'react-icons/fi'
// import {} from 'react-icons/fa'
import {FaGithub, FaRandom, FaHistory} from 'react-icons/fa'
import {BiNotepad} from 'react-icons/bi'

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
      {isSmallScreen && <div className={`flex flex-col w-7/12 border-r border-gray-800 ${ isDarkMode? 'darkMode': 'bg-white'} opacity-85 p-3  fixed top-[88px]  z-30 left-0 h-screen space-y-4 cursor-pointer transform ease-in duration-1000`}>
      <AppLogo />
      <div>
        <div className={`flex space-x-4 mb-2 items-center ${isDarkMode ?'hover:text-gray-100' :'hover:text-gray-800'} `}>
          <MyButton>
            <BsFillBookmarkStarFill />

          </MyButton>
          <p>Bookmarks</p>
        </div>

        <div className={`flex space-x-4 mb-2 items-center ${isDarkMode ?'hover:text-gray-100' :'hover:text-gray-800'} `}>
          <MyButton>
            <FaHistory />

          </MyButton>
          <p>History</p>
        </div>

        <div className={`flex space-x-4 mb-2 items-center ${isDarkMode ?'hover:text-gray-100' :'hover:text-gray-800'} `}>
          <MyButton>
            <FaRandom />

          </MyButton>
          <p>Random</p>
        </div>

        <div className={`flex space-x-4 mb-2 items-center ${isDarkMode ?'hover:text-gray-100' :'hover:text-gray-800'} `}>
          <MyButton>
            <BiNotepad />

          </MyButton>
          <p > Note</p>
        </div>

        <div className={`flex space-x-4 mb-2 items-center ${isDarkMode ?'hover:text-gray-100' :'hover:text-gray-800'} `}onClick={handleToggleTheme}>
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

        <div className={`flex space-x-4 mb-2 items-center ${isDarkMode ?'hover:text-gray-100' :'hover:text-gray-800'} `}>
        <MyButton>
        <a href="https://github.com/rinsarmu/DictionaryApp" target='_blank'>
         <FaGithub />

        </a>
      </MyButton>
      <a href="https://github.com/rinsarmu/DictionaryApp" target='_blank'>
        <p>Project</p>
        </a>

        </div>
      </div>

    </div>}
    </WrapComponent>
  )
}

export default SlideShowScreen
