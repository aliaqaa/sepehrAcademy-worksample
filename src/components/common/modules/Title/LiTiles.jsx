import React from 'react'

function LiTiles({title,disc}) {
  return (
    <> 
    <li className="list-disc disc-green font-extrabold text-4xl mt-40">
 {title}
  </li>
  <h3 className="my-2 mb-10 font-extralight">
  {disc}
  </h3>
  </>
  )
}

export default LiTiles