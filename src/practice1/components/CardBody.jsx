import React from 'react'
import Button from './Button'

const CardBody = ({date, title, content, link}) => {
  return (
    <div className='mt-4 mb-2'>
        <p className='text-sm text-gray-600'>{date}</p>
        <h2 className='font-bold text-lg'>{title}</h2>
        <p className='text-sm my-2 line-clamp-2 text-ellipsis'>{content}</p>
        <Button link={link}/>
    </div>
  )
}

export default CardBody