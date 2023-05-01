import React from 'react'

const Synonyms = ({synonyms,handleSearch, keyword, setKeyword}) => {

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
        className='pl-2 text-[#ddd] underline decoration-slate-500' 
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
