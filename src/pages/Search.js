import React from 'react'
import { useGoogleSearch } from '../Hooks/useGoogleSearch'
import { useContextValue } from '../StateProvider/StateProvider'

function Search() {
  
  const [{term}, dispatch] = useContextValue(); 
  const {data} = useGoogleSearch(term)

  console.log(data);

  return (
    <div>Search</div>
  )
}

export default Search