import React,{useEffect, useState} from 'react'
import {MdArrowDropDown} from 'react-icons/md'
import { useTheme } from './DarkMode/ThemeContext';

const Meaning = ({meaning,item}) => {
    const [show, setShow] = useState(false)
    const { isDarkMode, toggleTheme } = useTheme();

    let text =''
    const {partOfSpeech, synonyms, definitions} = meaning

    let newDefinition = definitions.map((definition, item)=>{
        // console.log(definition.definition)
        return <li className='mt-2'>{item+1}. {definition.definition}</li>
    })

    useEffect(()=>{
        if(item ===0){
            setShow(prev=>prev=true)
        }
    },[])
   
    return (
        <div  className='m-4'>
            
            <div className='flex items-center '> 
            <h1 
                className={`${isDarkMode ? '' : " text-[#0e1621]"} text-3xl mb-4 capitalize`}
                onClick={e=>setShow(prev=>!prev)}>
                    {partOfSpeech}  
            </h1>
            {!show && <MdArrowDropDown onClick={e=>setShow(prev=>!prev)} />}
            </div>
           

            {show && <ol className={`${isDarkMode ? 'cardDarkMode' : "bg-gray-200 text-black"} p-8 rounded-2xl shadow-sm shadow-gray-800`}>
                {newDefinition}
            </ol>}
        </div>
    )
}

export default Meaning
