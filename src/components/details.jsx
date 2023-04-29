import React from 'react'
import Meaning from './Meaning';
import PlayAudio from './PlayAudio';
import ShowMeaning from './ShowMeaning';
import PhoneticText from './PhoneticText';
import Synonyms from './Synonyms';

const details = ({result,keyword,setKeyword,handleSearch}) => {
    const { word, phonetics, meanings } = result;
  
    const {partOfSpeech, synonyms, definitions} = meanings[0]
    // console.log("ss", synonyms)

    let newData =meanings.map((meaning,item)=> <Meaning meaning={meaning} item={item}/>)

    return (
        <div className='w-3/5'>
           <div className='flex gap-4 space-x-3'>
                <div className='flex gap-2 items-center pt-4 pl-2'>
                    <h1 className='text-3xl '>{word}</h1>
                    <PlayAudio phonetics={phonetics}/>
                    <PhoneticText phonetics={phonetics} />

                </div>
            </div> 
            <ShowMeaning newData={newData} />
            <Synonyms  synonyms={synonyms} keyword={keyword} setKeyword={setKeyword} handleSearch={handleSearch}/>
            
        </div>
    )
}

export default details
