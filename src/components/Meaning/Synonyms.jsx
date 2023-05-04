import React from 'react'
import { useTheme } from '../DarkMode/ThemeContext';

const Synonyms = ({synonyms,handleSearch, keyword, setKeyword}) => {

  const { isDarkMode, toggleTheme } = useTheme();

    function handleSynonymClick(synonym) {
      const syntheticEvent = {
        preventDefault: () => {},
        target: { value: "blu" }
      };
      setKeyword(prev=>prev=synonym);
      handleSearch(syntheticEvent);
    }
    
    let listSynonym = synonyms.map(synonym=><button 
        type="submit" 
        className={`${isDarkMode ?"text-[#ddd]" : 'text-black'} pl-2  underline decoration-slate-500`}
        onClick={(e)=>handleSynonymClick(synonym)}
      >
        {synonym}
        </button>)
  return (
    <div>
       { listSynonym.length > 0 && <h2>Synonyms</h2>}
      {listSynonym}
    </div>
  )
}

export default Synonyms
