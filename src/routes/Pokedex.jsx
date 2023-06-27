import style from './style.module.css'
import { usePokemonListData } from '../hooks/usePokemonListData'
import { PokemonCard } from '../components/PokemonCard/PokemonCard'

export function Pokedex() {
  const { pokemons } = usePokemonListData()

  return (
    <div className={style['page']}>
      <header className={style['header']}>
        <h1>Pokedex</h1>
      </header>

        {/* Liste over alle pokemon */}
      <main className={style['main']}>
        <ul>
          {
            pokemons &&
            pokemons.map((pokemon)=> {
              return (
                <li key={pokemon.name}>
                  <PokemonCard pokemon={pokemon} />
                </li>
              )
            })
          }
        </ul>
      </main>

      <footer className={style['footer']}>
        &copy; Lars Gunnar
      </footer>
    </div>
  )
}