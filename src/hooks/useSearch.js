import { gql } from '@apollo/client'


export const GET_CHARACTER_SEARCH_LOC = gql`
    query GetCharacterLocations($name: String!){
      characters(filter: {name: $name}) {
        results {
          location {
            name
          }
        }
      }
    }
`
