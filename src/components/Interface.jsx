import React from 'react'

const Card = () => {
  return (
    <div className='p-4 rounded-md border border-neutral-400/30 space-y-5 shadow-xl'>
      <div className='w-full h-full'>
        <img src="https://placehold.co/600x300" alt="" className='w-full h-full rounded-md object-cover' />
      </div>
      <div className='space-y-4 px-4 py-4'>
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
            <h1 className='text-[1.5rem]'>$1099.00</h1>
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus aperiam sint rerum accusantium.</p>
          <div className='flex gap-4 items-center pt-2'>
            <div className='flex'>
              <img src="https://placehold.co/30x30" alt="" className='rounded-full ring-1 ring-white' />
              <img src="https://placehold.co/30x30" alt="" className='ml-[-0.4rem] rounded-full ring-1 ring-white' />
              <img src="https://placehold.co/30x30" alt="" className='ml-[-0.4rem] rounded-full ring-1 ring-white' />
              <img src="https://placehold.co/30x30" alt="" className='ml-[-0.4rem] rounded-full ring-1 ring-white' />
              <img src="https://placehold.co/30x30" alt="" className='ml-[-0.4rem] rounded-full ring-1 ring-white' />
            </div>
            <span>Join 867+ members</span>
          </div>
          <div className="flex items-center pt-3">
            <svg className="w-4 h-4 text-neutral-800 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg className="w-4 h-4 text-neutral-800 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg className="w-4 h-4 text-neutral-800 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg className="w-4 h-4 text-neutral-800 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg className="w-4 h-4 text-neutral-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <span className='ms-1 text-sm font-medium text-neutral-700'>4.95 out of 5</span>
          </div>
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
