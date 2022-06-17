import React from 'react'
import Pokemon from './Pokemon'

function MenuPokemon(props) {
return (
    <div className='flex justify-around flex-wrap'>
        {props.arregloPokemons?.map((pokemon) => (
            <Pokemon data={pokemon}/>
        ))}
    </div>
)
}

export default MenuPokemon