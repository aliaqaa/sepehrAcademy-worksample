import React from 'react'
import { MdSort } from 'react-icons/md'

function NewsPaginationTopSort() {
  return (
    <div className=' flex justify-around'>
        <h1 className='font-extrabold text-3xl'>جدیدترین اخبار و مقالات </h1>
        <div className="flex items-center  p-1 shadow-xl mx-2 rounded-sm bg-white">
          <label>
            <MdSort className="text-3xl" />
          </label>
          <select
            id="sort"
            className="bg-white font-extrabold outline-none ml-2"
          >
            <option className="border rounded-3xl" value="newest">
              جدیدترین
            </option>
            <option className="border rounded-3xl" value="oldest">
              قدیمی ترین
            </option>
            <option className="border rounded-3xl" value="most expensive">
              گران ترین
            </option>
            <option className="border rounded-3xl" value="cheapest">
              ارزان ترین
            </option>
          </select>
        </div>
    </div>
  )
}

export default NewsPaginationTopSort