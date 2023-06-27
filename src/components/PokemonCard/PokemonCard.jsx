import style from './style.module.css'
import { usePokemonDetails } from '../../hooks/usePokemonDetails'

export function PokemonCard(props) {
  const {pokemon} = props

  const details = usePokemonDetails(pokemon.url)

  return (
    <div>
      <h2>{pokemon.name}</h2>
      <img
        src={details.sprites.front_default}
        alt=""
      />
    </div>
  )
}