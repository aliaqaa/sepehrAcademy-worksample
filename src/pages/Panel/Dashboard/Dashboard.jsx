import React from 'react'
import TopDash from './TopDash'
import MidDash from './MidDash'

function Dashboard() {
  return (
    <div className='flex flex-col  mt-2 p-5'>
      <TopDash/>
      <MidDash/>
    </div>
  )
}

export default Dashboard