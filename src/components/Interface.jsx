import React from 'react'

const Interface = () => {
  return (
    <div className='border border-black grid grid-cols-3 grid-rows-4 mt-12'>
      <div className='col-span-1 row-span-2 border border-red-400'>
        test 1
      </div>
      <div className='col-span-1 border border-green-400'>test 2</div>
      <div className='col-span-1 row-span-3 border border-indigo-400'>test 3</div>
      <div className='col-span-1 row-span-2 border border-rose-400'>test 4</div>
      <div className='col-span-1 border border-rose-400 row-span-1'>test 5</div>
      <div className='col-span-1 border border-rose-400 row-span-1'>test 6</div>
      <div className='col-span-2 border border-rose-400 row-span-1'>test 7</div>
    </div>
  )
}

export default Interface
