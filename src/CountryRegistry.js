import axios from 'axios'
import React, { useState } from 'react'

export default function CountrRegistry() {
  let [keyword, steKeyword] = useState('France')
  let [results, setResults] = useState(null)
  let [loaded, setLoaded] = useState(false)
  let [capital, setCapital] = useState(null)

  function search() {
    let url = `https://restcountries.com/v3.1/name/${keyword}`

    axios.get(url).then(handleResponse)
  }

  function handleResponse(response) {
    console.log(response.data)
    setResults(response.data[0])
    setCapital(response.data[0].capital[0])
  }

  function handleSubmit(event) {
    event.preventDefault()
    search()
  }

  function handleWordChange(event) {
    event.preventDefault()
    steKeyword(event.target.value)
  }

  function load() {
    setLoaded(true)
    search()
  }

  if (loaded) {
    return (
      <div className="CountryRegistry">
        <section>
          <form className="form-group" onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Type country"
              onChange={handleWordChange}
            />
            <input type="submit" value="search" className="btn btn-primary" />
          </form>
        </section>
        <section>
          <p>{capital}</p>
        </section>
      </div>
    )
  } else {
    load()
    return 'Loading'
  }
}
