import React, { useState } from 'react'

function Nav(props) {

    const onClick = async (evt) => {
        
    }
    const onChange = (evt) => {
        props.setBusqueda(evt.target.value);
    }
return (
    <div>
            <input
            placeholder='Buscar'
            className='w-full flex text-center border-2 border-black mb-[5px]'
            onChange={onChange}
            >
            </input>
    </div>
)
}

export default Nav