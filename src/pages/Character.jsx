import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { useCharacter } from '../hooks/useCharacter'
import './Character.css'

const Character = () => {
  const {id} = useParams()
  const {data, loading, error} = useCharacter(id)
  
  if (loading) return <p>Loading...</p>
  if (error) return <p>Something went wrong</p>

  return (
    <div className='Character'>
      <div className='left'>
        <Link to={"/"}>Click To back</Link>
        <h1>{data.character.name}</h1>
        <img src={data.character.image} alt={data.character.name}/>
      </div>
      <div className='Character-content'>
        <h2>Episode :</h2>
        <div className='Character-episode'>
          {data.character.episode.map((episode) => (
            <div>
              {episode.name} - <b>{episode.episode}</b>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Character