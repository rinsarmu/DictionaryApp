import { useState, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'
import Details from './components/details'
import Spinning from './components/spinning'
import Search from './components/Search';
import Navigation from './components/Navigation';
import Warning from './components/Warning'

function App() {
  const [count, setCount] = useState(0)
  const[keyword, setKeyword] = useState('')
  const [result, setResult] = useState(null)
  const [load, setLoad] = useState(true)
  const [error, setError] = useState(null)
  const api = "https://api.dictionaryapi.dev/api/v2/entries/en";
  
  const handleSearch= async(e)=>{
    e.preventDefault()
    console.log(keyword)
    if(keyword.length > 0) {
      console.log("loading...")
      setLoad(true)
      setResult(null)
      setError('')
    }
    try {
      const res = await axios.get(`${api}/${keyword}`)
      console.log(res.data)
      setResult(res.data[0])
      setLoad(false)
      setError('')

      console.log(res)

    } catch(e){
      console.error(e)
      setLoad(false)
      setError(`We're sorry, the word you entered is not in our dictionary.`)

    }

  }

  const detailsComponent = useMemo(() => {
    return  <Details result={result} keyword={keyword} setKeyword={setKeyword} handleSearch={handleSearch}/>
  }, [result]);

  return (
  <div className=' darkMode w-screen h-full flex flex-col items-center justify-center text-lg'>
    <Navigation keyword={keyword} setKeyword={setKeyword} handleSearch={handleSearch} />
    {/* <Search keyword={keyword} setKeyword={setKeyword} handleSearch={handleSearch}/> */}
    {load && < Spinning />}
    {!load && !error && detailsComponent }
    {/* {error} */}
    {error && <Warning errorText={error} />}
   
  </div>
  )
}

export default App

  