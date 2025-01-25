import React from 'react'

function AuthSubmitButton({title}) {
  return (
    <button className='py-2 px-3 bg-[#E48900] rounded-3xl text-white my-2' type='submit'>{title}</button>
  )
}

export default AuthSubmitButton