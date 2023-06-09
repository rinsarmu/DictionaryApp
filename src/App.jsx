import { useState, useMemo, useEffect, useCallback } from 'react'
// import spellchecker from 'spell-checker';
// import Typo from 'typo-js';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'
import Details from './components/Meaning/details'
import Spinning from './components/Loader/spinning'
import Search from './components/nav/Search';
import Navigation from './components/nav/Navigation';
import Warning from './components/Alert/Warning'
import WrapComponent from './hoc/WrapComponent'
import { useTheme } from './components/DarkMode/ThemeContext'
import BackDrop from './components/ui/BackDrop'

function App() {
  const [count, setCount] = useState(0)
  const [keyword, setKeyword] = useState('word')
  const [result, setResult] = useState(null)
  const [load, setLoad] = useState(true)
  const [error, setError] = useState(null)
  const [suggestions, setSuggestions] = useState([])
  const api = "https://api.dictionaryapi.dev/api/v2/entries/en";
  const { isDarkMode,addingWord, toggleTheme,showSlide,handleToggleMenu } = useTheme();
  // const dictionary = new Typo('en_US');



  const handleSearch = async (e) => {
    e.preventDefault()
    console.log("NEw kkkkkkkkk", keyword)
    setCount(prev => prev + 1)
    console.log(count)
    if (keyword.length > 0) {
      console.log("loading...")
      // var is_spelled_correctly = dictionary.check("mispelld");
      // console.log("checking spell \n\n", is_spelled_correctly)
      setLoad(true)
      setResult(null)
      setError('')
    }
    try {

      // Check the spelling of the keyword using cspell-api
      // const misspelledWords = await spellchecker.checkText(keyword);
      // console.log(misspelledWords);
      // if (misspelledWords.length > 0) {
      //   // If there are misspelled words, suggest corrections
      //   const suggestions = await spellchecker.getCorrections(misspelledWords[0].text);
      //   console.log(suggestions);
      //   setSuggestions(suggestions);
      // } else {
      //   setSuggestions([]);
      // }

      const res = await axios.get(`${api}/${keyword}`)
      console.log(res.data)
      setResult(res.data[0])
      setLoad(false)
      setError('')

      console.log(res)

    } catch (e) {
      console.error(e)
      setLoad(false)
      setError(`We're sorry, the word you entered "${keyword}" is not in our dictionary.`)
      setResult(null)

    }

  }

  const detailsComponent = useMemo(() => {
    return <Details result={result} keyword={keyword} setKeyword={setKeyword} handleSearch={handleSearch} />
  }, [result]);

  useEffect(() => {
    console.log(keyword);
  }, [count]);

  useEffect(() => {
    const syntheticEvent = {
      preventDefault: () => { },
      target: { value: "blu" }
    };
    handleSearch(syntheticEvent);
  }, [keyword]);

  const handleKeywordChange = useCallback((newKeyword) => {
    setKeyword(newKeyword)
  }, [])

  const handleToggleTheme = () => {
    toggleTheme();
    // document.body.classList.toggle("dark");
  };

  return (
    <WrapComponent>
      <div className={` ${isDarkMode ? 'darkMode' : "bg-[#F7F7F9] transition ease-out duration-1000"}  w-screen h-screen overflow-y-scroll flex flex-col items-center  text-lg relative `}>
        <Navigation keyword={keyword} setKeyword={setKeyword} handleToggleTheme={handleToggleTheme} handleSearch={handleSearch} />
        
        {/* <Search keyword={keyword} setKeyword={setKeyword} handleSearch={handleSearch}/> */}
        {load && < Spinning />}
        {!load && !error && detailsComponent}
        {/* {error} */}
        {error && <Warning errorText={error} />}
        

      </div>
      {showSlide && <BackDrop />}
      </WrapComponent>
  )
}

export default App

