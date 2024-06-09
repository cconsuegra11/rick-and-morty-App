import './App.css'
import { useEffect, useRef, useState } from 'react'
import useFetch from './hooks/useFetch'
import LocationCard from "./components/LocationCard"
import ResidentCard from "./components/ResidentCard"

/* ============= PARTE FUNCIONAL ==================*/
function App() {

  const randomId = Math.floor( Math.random(1) * 126 )
  const [inputValue, setinputValue] = useState(randomId)
  const [ location, getLocation, isloading, hasError ] = useFetch()
  
  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/location/${inputValue}`
    getLocation(url)
  }, [inputValue])

  const textInput = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    setinputValue(textInput.current.value.trim().toLowerCase())
    textInput.current.value = ""
  }

  
/* ============= PARTE VISUAL ==================*/
  return (
    <div className='app'>
      {
        isloading ?
        <h2> Loading... </h2> :
        <>
          <div className='app_banner'>.</div>

          <form className='app_form' onSubmit={ handleSubmit }>
            <input className='app_form-input' ref={ textInput } type='number'/>
            <button className='app_form-button'> Search </button>
          </form>

          {
            hasError ? 
            <h2> 🚫 Hey! You must enter an ID between 1 to 126 👌 </h2> :
            <>
            <div className='app_cards'>
              <LocationCard 
                info = { location } />
              <div className='app_container'>
                {
                  location?.residents.map( ( character ) => ( 
                    <ResidentCard 
                      key={ character } 
                      info = { character }   
                    /> 
                  ))
                }
              </div>
            </div>
            </>
          }
        </>
      }
      
    </div>
  )
}

export default App
