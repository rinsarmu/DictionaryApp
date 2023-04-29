import React from 'react'
import {FaSearch} from'react-icons/fa'


const Search = ({keyword, setKeyword, handleSearch}) => {

  async function handleInputChange(event) {
    const word = event.target.value.trim();

    if (keyword !== "") {
      const url = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${keyword}?key=your_api_key`;
      const response = await fetch(url);
      const data = await response.json();

      // Filter out non-words and limit the suggestions to 5
      const words = data.filter((result) => typeof result === "string").slice(0, 5);

      // Update the suggestions
      setSuggestions(words);
    } else {
      setSuggestions([]);
    }

    setInputValue(word);
  }

  return (
    <form onSubmit={handleSearch} className='p-4  flex gap-2 items-center w-3/5  relative pb-3 appearance-none focus:outline-none border-none'>

      <input type="search" value={keyword} onChange={e=>setKeyword(e.target.value)} className='p-2 px-5 rounded-3xl w-full searchDarkMode appearance-none focus:outline-none border-none' />
      <button type='submit' className=' p-1 absolute top-6 right-8'>

      <FaSearch className=' ' />
      </button>
      
    </form>
  )
}

export default Search
