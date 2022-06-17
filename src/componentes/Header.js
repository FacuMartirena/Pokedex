import React from 'react'

const Header = () => {
  return (
    <div className='w-full h-[32px] flex items-center mt-4'>
      <div className='pl-4'>
        <img className='h-[25px] w-[25px]' src="./imagenes/Pokeball.png" alt="" />
      </div>
      
      <h1 className='font-bold text-2xl pl-4'>Pokédex</h1>

      <div className='flex '>
        <img className='h-[20px]' src="imagenes/Arrow.svg" alt="" />
      </div>
        
    
    </div>
  )
}

export default Header
