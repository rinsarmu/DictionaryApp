import React from 'react'
import MyButton from './MyButton'
import {MdDarkMode} from 'react-icons/md'
import {FaGithub} from 'react-icons/fa'
import {BsFillBookmarkStarFill} from 'react-icons/bs'
import {FiSun} from 'react-icons/fi'
import Search from './Search'
import { useTheme } from './DarkMode/ThemeContext'

const Navigation = ({keyword, setKeyword, handleSearch, handleToggleTheme}) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className='flex  w-full justify-around items-center py-2 mb-4 border-b border-gray-700 '>
      <h2>MeaningApp</h2>
      <Search keyword={keyword} setKeyword={setKeyword} handleSearch={handleSearch}/> 
      <div className='flex space-x-8'>
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
        <a href="">
         <FaGithub />

        </a>
      </MyButton>
      </div>
     
    </div>
  )
}

export default Navigation
