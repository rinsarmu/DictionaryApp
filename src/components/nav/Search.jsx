import React from 'react'
import {FaSearch} from'react-icons/fa'
import { useTheme } from '../DarkMode/ThemeContext';


const Search = ({keyword, setKeyword, handleSearch}) => {
  const {isSmallScreen,RemoveToggleMenu } = useTheme();

  const handleChange =(e)=>{
    setKeyword(e.target.value)
    RemoveToggleMenu()

  }


  return (
    <form onSubmit={handleSearch} onClick={RemoveToggleMenu} className={`p-4   flex gap-2 items-center ${isSmallScreen ? 'w-full' : 'w-3/5' } relative pb-3 appearance-none focus:outline-none border-none`}>

      <input type="search" value={keyword} onChange={handleChange} className='p-2 px-5 rounded-3xl w-full searchDarkMode appearance-none focus:outline-none border-none bg-gray-200 text-black'  />
      <button type='submit' className=' p-1 absolute top-6 right-8'>

      <FaSearch className=' ' />
      </button>
      
    </form>
  )
}

export default Search
