import React from 'react'

function UserInfoShowP({title,input}) {
  return (
    <span className='flex my-5' >
        <p className='font-extralight'>{title}</p>:
        <p className='text-orange-500'>{input}</p>
    </span>
  )
}

export default UserInfoShowP