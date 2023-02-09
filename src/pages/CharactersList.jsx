import React from 'react'
import './CharactersList.css'
import { Link } from 'react-router-dom'
import { useCharacters } from '../hooks/useCharatcers'
import Search from './Search'



const CharactersList = () => {

  const {error, data, loading} = useCharacters()

  console.log("Error: ", error)
  console.log("Data: ", data);
  console.log("Loading: ", loading);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Something went wrong</p>

  return (
    <div className='CharacterList-container'>
      <h1>Rick and Morty Character List</h1>
      <div className='CharacterList'>
          {data.characters.results.map((character) => {
              return <Link className='button' to={`/${character.id}`}>
                  <img src={character.image} alt={character.name}/>
                  <h2>{character.name}</h2>
                  <br/>
              </Link>
          })}
      </div>
      <div className='search-content'>
        <h1>Search Character Realms</h1>
        <Search/>
      </div>
    </div>
  )
}

export default CharactersList