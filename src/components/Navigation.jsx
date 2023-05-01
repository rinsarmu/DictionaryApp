import React from 'react'
import MyButton from './MyButton'
import {MdDarkMode} from 'react-icons/md'
import {FaGithub} from 'react-icons/fa'
import {BsFillBookmarkStarFill} from 'react-icons/bs'
import Search from './Search'
import { useTheme } from './DarkMode/ThemeContext'

const Navigation = ({keyword, setKeyword, handleSearch, handleToggleTheme}) => {

  return (
    <div className='flex  w-full justify-around items-center py-2 mb-4 border-b border-gray-700 '>
      <h2>MeaningApp</h2>
      <Search keyword={keyword} setKeyword={setKeyword} handleSearch={handleSearch}/> 
      <div className='flex space-x-8'>
      <MyButton>
        <BsFillBookmarkStarFill />
      </MyButton>
      <MyButton>
        <MdDarkMode onClick={handleToggleTheme}/>
      </MyButton>
      <MyButton>
        <FaGithub />
      </MyButton>
      </div>
     
    </div>
  )
}

export default Navigation
