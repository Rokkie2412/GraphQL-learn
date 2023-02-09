import React, { useState } from 'react'
import { useLazyQuery } from '@apollo/client'
import './Search.css'
import { GET_CHARACTER_SEARCH_LOC } from '../hooks/useSearch'

const Search = () => {
  const [name, setName] = useState('')

  const [getLocations, {loading, error, data}] = useLazyQuery(GET_CHARACTER_SEARCH_LOC, {
    variables: {name}
  })

  return (
    <div className='search-container'>
        <div className='search-input'>
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Search" />
          <button onClick={() => getLocations()}>Search</button>
        </div>
        {loading && <p>Loading...</p>}
        {error && <p>Something went wrong</p>}
        <br/>
        {data && data.characters.results.map((character) => {
          return (
            <div className='realm'>
              <pre>{character.location.name} Realm</pre>
            </div>
          )
        })}
    </div>
  )
}

export default Search