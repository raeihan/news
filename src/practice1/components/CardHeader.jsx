import React from 'react'

const CardHeader = ({image, category}) => {
  return (
    <header className='flex flex-col items-center'>
        <h4 className='text-center px-3 py-1 mb-2 text-sm bg-gray-800 text-white rounded-md w-fit'>{category}</h4>
        <img src={image} alt="Berita" className='w-full h-48 object-cover'/>
    </header>
  )
}

export default CardHeader