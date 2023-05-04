import React from 'react'
import{AiFillSound} from'react-icons/ai'
import { useTheme } from '../DarkMode/ThemeContext';


const PlayAudio = ({phonetics}) => {
  const { isDarkMode, toggleTheme } = useTheme();

    const playAudio =()=>{
        const audio = new Audio(phonetics[0].audio)
        audio.play()
    }
    
  return (
    <div>
        <button onClick={playAudio} className={`${isDarkMode ? 'bg-black p-3': ''}p-2 rounded-xl`}>
            <AiFillSound />
        </button>
    </div>
  )
}

export default PlayAudio
