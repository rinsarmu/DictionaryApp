import React from 'react'
import {FaSearch} from'react-icons/fa'


const Search = ({keyword, setKeyword, handleSearch}) => {


  return (
    <form onSubmit={handleSearch} className='p-4   flex gap-2 items-center w-3/5  relative pb-3 appearance-none focus:outline-none border-none'>

      <input type="search" value={keyword} onChange={e=>setKeyword(e.target.value)} className='p-2 px-5 rounded-3xl w-full searchDarkMode appearance-none focus:outline-none border-none bg-gray-200 text-black' />
      <button type='submit' className=' p-1 absolute top-6 right-8'>

      <FaSearch className=' ' />
      </button>
      
    </form>
  )
}

export default Search
