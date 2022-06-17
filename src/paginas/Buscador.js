import { useState,useEffect } from 'react'
import React from 'react'
import Nav from '../componentes/Nav';
import MenuPokemon from '../componentes/MenuPokemon';
import Header from '../componentes/Header';
function Buscador() {
const [pokemons,setPokemons] = useState([]);
const [busqueda, setBusqueda] = useState('');

useEffect (() => {
    fetchPokemons();
}, [])

const fetchPokemons = () => {
    fetch("https://us-central1-senpai-9b555.cloudfunctions.net/getFullList")
    .then(res => res.json())
    .then((pokemons) => {
        console.log(pokemons)
        setPokemons(pokemons);
    })

    .catch((error) => {
        console.log('error',error);
    })
}
console.log(busqueda)
return (
    <div>
    <Header />
    <Nav setBusqueda={setBusqueda}/>
    <div className='w-full h-[200px] flex'> 
        <MenuPokemon arregloPokemons={pokemons.filter((pokemon) =>pokemon.name.match(busqueda))}/>
    </div>
    </div>
)
}

export default Buscador