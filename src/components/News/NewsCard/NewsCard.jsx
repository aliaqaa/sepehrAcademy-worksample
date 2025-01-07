import React from 'react'
import { Link } from 'react-router'

function NewsCard({item}) {
    console.log(item)

  return (
    <div className="border shadow-sm  rounded-2xl overflow-visible my-10 text-black bg-white">
    <Link
      to={`/courses/${item.id}`}
      className=""
    >
      <img
        src={item.addUserProfileImage ? course.addUserProfileImage : addUserProfileImage}
        alt={addUserProfileImage.title}
        layout="responsive"
        width={280}
        height={200}
        className="rounded-2xl scale-x-90 content-center m-auto -translate-y-9"
      />
      <span className="flex justify-start mr-3 font-extrabold ">
        {item.title}
      </span>
      <br />
      <div className="flex justify-between">
      
      
      </div>
      <div className="flex justify-between">
      
      
      </div>
      <hr class="my-2 h-0.5 border-t-1 bg-black dark:bg-white/10" />
      <div className="flex justify-between items-center p-3 text-blue-400">
       
     
      </div>
    </Link>
    </div>
  )
}

export default NewsCard