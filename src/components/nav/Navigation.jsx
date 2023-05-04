import React, { useCallback, useEffect, useState } from 'react'
import MyButton from '../Button/MyButton'
import {MdDarkMode} from 'react-icons/md'
import {FiSun} from 'react-icons/fi'
import {FaGithub} from 'react-icons/fa'
import {BsFillBookmarkStarFill} from 'react-icons/bs'
import Search from './Search'
import { useTheme } from '../DarkMode/ThemeContext'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdClose} from 'react-icons/md'
import AppLogo from './AppLogo'
import WrapComponent from '../../hoc/WrapComponent'
import SlideShowScreen from '../ui/slideShowScreen'
import BackDrop from '../ui/BackDrop'

const Navigation = ({keyword, setKeyword, handleSearch, handleToggleTheme}) => {
  const { isDarkMode, isSmallScreen, handleToggleMenu,showSlide } = useTheme();


  useEffect(() => {
    console.log('screen', showSlide);
  }, [showSlide, handleToggleMenu]);
  return (
    <WrapComponent>
    <div className={`flex  w-full justify-around items-center py-2 mb-4 border-b border-gray-700 z-10 ${isDarkMode ? 'bg-[#0e1621]':'bg-white'} p-3 fixed top-0 left`}>
      {!isSmallScreen && <AppLogo />}
      {isSmallScreen && <MyButton>
        {showSlide ? <MdClose onClick={handleToggleMenu}  /> :
        <GiHamburgerMenu onClick={handleToggleMenu} />}
      </MyButton>}
      <Search keyword={keyword} setKeyword={setKeyword} handleSearch={handleSearch}/> 
      <div className='sm:flex space-x-8 nav--buttons '>
      <MyButton>
        <BsFillBookmarkStarFill />
      </MyButton>
      <MyButton>
        { isDarkMode ?
          <FiSun onClick={handleToggleTheme} /> :
          <MdDarkMode onClick={handleToggleTheme}/>
          
        }
      </MyButton>
      <MyButton>
        <a href="https://github.com/rinsarmu/DictionaryApp" target='_blank'>
         <FaGithub />

        </a>
      </MyButton>
      </div>
     
    </div>
    {showSlide && <SlideShowScreen />}
    {/* {showSlide && <BackDrop />} */}
    </WrapComponent>
  )
}

export default Navigation
