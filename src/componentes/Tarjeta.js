import React from 'react'

function Tarjeta(props) {
return (
    <div>
        <p>{props.data.id}</p>
        <h3>{props.data.types[0].type.name}</h3>
    </div>
)
}

export default Tarjeta