import React from 'react'
import Meaning from './Meaning';
import PlayAudio from './PlayAudio';
import ShowMeaning from './ShowMeaning';
import PhoneticText from './PhoneticText';
import Synonyms from './Synonyms';
import MyButton from '../Button/MyButton';
import {BsFillBookmarkStarFill} from 'react-icons/bs'
import WrapComponent from '../../hoc/WrapComponent';
import Toast from '../Alert/Toast';
import { useState } from 'react';
import { useTheme } from '../DarkMode/ThemeContext';


const details = ({result,keyword,setKeyword,handleSearch}) => {
    const { word, phonetics, meanings } = result;
    const [showToast, setShowToast] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();


    const {partOfSpeech, synonyms, definitions} = meanings[0]
    // console.log("ss", synonyms)

    let newData =meanings.map((meaning,item)=> <Meaning meaning={meaning} item={item}/>)

    function handleClick() {
        setShowToast(prev=>true);
        console.log("toast")
      }

    return (
        <WrapComponent>
        <div className='sm:w-3/5 mediaQuery absolute top-24 px-[5px]'>
           <div className='flex gap-4 space-x-3'>
                <div className='flex items-center pt-4 space-x-4'>
                    <h1 className={`${isDarkMode ?'text-[#7e868e]':' text-black' } text-3xl `}>{word}
                    </h1>
                    <PlayAudio phonetics={phonetics}/>
                    <PhoneticText phonetics={phonetics} />
                    <div className=''>
                        
                    <MyButton >
                        <BsFillBookmarkStarFill onClick={handleClick} />
                    </MyButton>
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
