import React from 'react'
import Meaning from './Meaning';
import PlayAudio from './PlayAudio';
import ShowMeaning from './ShowMeaning';
import PhoneticText from './PhoneticText';
import Synonyms from './Synonyms';
import MyButton from './MyButton';
import {BsFillBookmarkStarFill} from 'react-icons/bs'
import WrapComponent from '../hoc/WrapComponent';
import Toast from './Toast';
import { useState } from 'react';


const details = ({result,keyword,setKeyword,handleSearch}) => {
    const { word, phonetics, meanings } = result;
    const [showToast, setShowToast] = useState(false);

    const {partOfSpeech, synonyms, definitions} = meanings[0]
    // console.log("ss", synonyms)

    let newData =meanings.map((meaning,item)=> <Meaning meaning={meaning} item={item}/>)

    function handleClick() {
        setShowToast(prev=>true);
        console.log("toast")
      }

    return (
        <WrapComponent>
        <div className='w-3/5'>
           <div className='flex gap-4 space-x-3'>
                <div className='flex items-center pt-4 space-x-4'>
                    <h1 className='text-3xl '>{word}</h1>
                    <PlayAudio phonetics={phonetics}/>
                    <PhoneticText phonetics={phonetics} />
                    <div className=''>
                        
                    <MyButton >
                        <BsFillBookmarkStarFill onClick={handleClick} />
                    </MyButton>
                    <button className='' onClick={handleClick}>gg</button>
                    </div>

                </div>
            </div> 
            <ShowMeaning newData={newData} />
            <Synonyms  synonyms={synonyms} keyword={keyword} setKeyword={setKeyword} handleSearch={handleSearch}/>
            
        </div>
        {showToast && <Toast message="The word has been added to bookmarks!"  />}
 
        </WrapComponent>
    )
}

export default details
