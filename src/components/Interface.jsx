import React from 'react'

const Card = () => {
  return (
    <div className='p-4 rounded-md border border-neutral-400/50 space-y-5'>
      <div className='w-full h-full'>
        <img src="https://placehold.co/600x300" alt="" className='w-full h-full rounded-md object-cover' />
      </div>
      <div className='space-y-4 px-4'>
        <div className='flex gap-1.5 flex-wrap'>
          <span className="whitespace-nowrap rounded-full border border-neutral-300 bg-neutral-100 px-2.5 py-1.5 text-sm text-zinc-800">
            UX Design
          </span>
          <span className="whitespace-nowrap rounded-full border border-neutral-300 bg-neutral-100 px-2.5 py-1.5 text-sm text-zinc-800">
            Product Design
          </span>
          <span className="whitespace-nowrap rounded-full border border-neutral-300 bg-neutral-100 px-2.5 py-1.5 text-sm text-zinc-800">
            +99
          </span>
        </div>
        <div className='space-y-2'>
          <div className='flex justify-between items-center'>
            <h1 className='text-[1.5rem]'>Card Title</h1>
            <h2>$1099.00</h2>
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus aperiam sint rerum accusantium.</p>
        </div>
      </div>
    </div>
  )
}

const Interface = () => {
  return (
    <div className='grid grid-cols-3 grid-rows-4 mt-12'>
      <div className='col-span-1 row-span-2 pr-2.5 pb-2.5'>
        <Card />
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
