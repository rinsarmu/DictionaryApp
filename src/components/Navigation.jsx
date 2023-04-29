import React from 'react'
import MyButton from './MyButton'
import {MdDarkMode} from 'react-icons/md'
import {FaGithub} from 'react-icons/fa'
import Search from './Search'

const Navigation = ({keyword, setKeyword, handleSearch}) => {
  return (
    <div className='flex  w-full justify-around items-center pt-5 mb-3 border-b border-blue-500 '>
      <h2>MeaningApp</h2>
      <Search keyword={keyword} setKeyword={setKeyword} handleSearch={handleSearch}/> 
      <div className='flex gap-3'>
      <MyButton>
        <MdDarkMode />
      </MyButton>
      <MyButton>
        <FaGithub />
      </MyButton>
      </div>
     
    </div>
  )
}

export default Navigation
