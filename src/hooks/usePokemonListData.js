import { useEffect, useState } from "react"

export function usePokemonListData() {
  const [response, setResponse] = useState(null)

  useEffect(
    () => {
      fetch("https://pokeapi.co/api/v2/pokemon")
        .then(response => response.json())
        .then(data => setResponse(data))
    },
    []
  )
    
  return {
    pokemons: response?.results
  }
}