import React from 'react'

export default function SimpleComponents({name,image,degree,hobbies}) {
  return (
    <div className='bg-gray-200 shadow-lg w-80 h-110 flex flex-col items-center gap-5 rounded-2xl'>

      <h1>{name}</h1>
      <img className='size-45 rounded-full object-cover' src={image} alt="" />
      <p>{degree}</p>
      <h1>My Hobbies</h1>
      <p>{hobbies[0]}</p>
      <p>{hobbies[1]}</p>


    </div>
  )
}
