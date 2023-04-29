import React from 'react'

const Synonyms = ({synonyms,handleSearch, keyword, setKeyword}) => {
    // console.log(synonyms)
    const handleClickSearch=(synonym)=>{
      console.log(synonym)
      setKeyword(prev=>prev=synonym)
      console.log(keyword)
      console.log(handleSearch())
      return ()=>handleSearch
    }
    let listSynonym = synonyms.map(synonym=><span className='pl-2 text-[#ddd] underline decoration-slate-500' onClick={()=>handleClickSearch(synonym)}>{synonym}</span>)
  return (
    <div>
        <h2>Synonyms</h2>
      {listSynonym}
    </div>
  )
}

export default Synonyms
