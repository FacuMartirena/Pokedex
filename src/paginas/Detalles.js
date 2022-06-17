import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Tarjeta from "../componentes/Tarjeta";

function Detalles() {
    const [pokemon, setPokemon]= useState([]);
    const { id } = useParams();

    useEffect (() => {
        fetchPokemon();
    }, [])
    
    const fetchPokemon = () => {
        fetch(`https://us-central1-senpai-9b555.cloudfunctions.net/getPokemon?id=${id}`)
        .then(res => res.json())
        .then((pokemon) => {
            console.log(pokemon)
            setPokemon(pokemon);
        })
    
        .catch((error) => {
            console.log('error',error);
        })
    }
    console.log(pokemon)
    return (
        <div className="h-[100vh] w-full">
            
        </div>
    )
}

export default Detalles