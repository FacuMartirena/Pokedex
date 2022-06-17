import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Pokemon = (props) => {
return (
    <Link
    to={`/Detalles/${props.data.id}`}
    > 
    <div className={`flex w-[200px] justify-around h-[258px] rounded-xl border-2 justify-around flex-wrap mt-[10px]`}>
        <div className="flex justify-end pr-[10px] pt-[5px]">
            <p>{props.data.id}</p>
        </div>
        <div className="flex items-center justify-center">
            <img 
                src={props.data.image}
            />
        </div>
        <div className={`w-full h-[30px] flex items-center justify-center text-white rounded-b-[5px] ${props.data.types[0].type.name}`}>
            <h3>{props.data.name}</h3>
        </div>
    </div>
    </Link>
)
}

export default Pokemon
