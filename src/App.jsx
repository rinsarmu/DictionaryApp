import { useState, useMemo, useEffect, useCallback } from 'react'
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
  const [keyword, setKeyword] = useState('word')
  const [result, setResult] = useState(null)
  const [load, setLoad] = useState(true)
  const [error, setError] = useState(null)
  const api = "https://api.dictionaryapi.dev/api/v2/entries/en";
  const { isDarkMode, toggleTheme,showSlide,handleToggleMenu } = useTheme();

  const handleSearch = async (e) => {
    e.preventDefault()
    console.log("NEw kkkkkkkkk", keyword)
    setLoad(true)
    setResult(null)
    setError('')
    try {
      const res = await axios.get(`${api}/${keyword}`)
      console.log(res.data)
      setResult(res.data[0])
      setLoad(false)
      setError('')
    } catch (e) {
      console.error(e)
      setLoad(false)
      setError(`We're sorry, the word you entered "${keyword}" is not in our dictionary.`)
    }
  }

  const detailsComponent = useMemo(() => {
    return <Details result={result} keyword={keyword} setKeyword={setKeyword} handleSearch={handleSearch} />
  }, [result]);

  const handleKeywordChange = useCallback((newKeyword) => {
    setKeyword(newKeyword)
    if (newKeyword.trim().length > 0) {
      handleSearch({ preventDefault: () => {} })
    }
  }, [handleSearch]);

  const handleToggleTheme = () => {
    toggleTheme();
  };

  return (
    <WrapComponent>
      <div className={` ${isDarkMode ? 'darkMode' : "bg-[#F7F7F9] transition ease-out duration-1000"}  w-screen h-screen overflow-y-scroll flex flex-col items-center  text-lg relative `}>
        <Navigation keyword={keyword} setKeyword={setKeyword} handleToggleTheme={handleToggleTheme} handleSearch={handleSearch} />
        {load && <Spinning />}
        {!load && !error && detailsComponent}
        {error && <Warning errorText={error} />}
      </div>
      {showSlide && <BackDrop />}
    </WrapComponent>
  )
}

export default App


