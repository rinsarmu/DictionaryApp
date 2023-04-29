import React from 'react'
import{AiFillSound} from'react-icons/ai'


const PlayAudio = ({phonetics}) => {
    const playAudio =()=>{
        const audio = new Audio(phonetics[0].audio)
        audio.play()
    }
    
  return (
    <div>
        <button onClick={playAudio} className='bg-blue-300 p-2 rounded-xl'>
            <AiFillSound />
        </button>
    </div>
  )
}

export default PlayAudio
