import React from 'react'

const Card = ({link, img, topic, desc, see}) => {
    return (
        <>
            <a href={link} className='mr-14'>
                <div className='border-gray-500 font-serif h-[29rem] border p-4 rounded-xl text-left'>
                    <img src={img} className='rounded-xl'></img>
                    <h3 className='font-semibold text-lg my-3'>{topic}</h3>
                    <p className='text-sm'>{desc}</p>
                    <p className='text-sm mt-5 text-blue-700 underline'>{see}</p>
                </div>
            </a>
        </>
    )
}

export default Card