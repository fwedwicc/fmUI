import React from 'react';
import useVanillaTilt from '../hooks/useVanillaTilt';
import { IoIosClose } from "react-icons/io";
import { HiTrash, HiShoppingBag } from "react-icons/hi";

const SampleCart = () => {
  const tiltOptions = {
    max: 10,
    speed: 50,
    glare: true,
    "max-glare": 0.3,
  };
  const cardRef = useVanillaTilt(tiltOptions);

  return (
    <div ref={cardRef} className='rounded-md border w-full h-full border-neutral-400/30 shadow-xl flex flex-col justify-between p-7'>
      <div className='flex justify-between items-center'>
        <div className='flex gap-3'>
          <HiShoppingBag className='w-6 h-auto' />
          <h2 className='font-medium text-[1.3rem]'>Shopping Cart</h2>
        </div>
        <button className='w-[2.5rem] h-[2.5rem] flex justify-center items-center transition duration-300 ease-in-out hover:bg-neutral-200/40 rounded-md focus:ring-2 focus:ring-neutral-200'>
          <IoIosClose className='w-6 h-auto' />
        </button>
      </div>
      <div className='flex flex-1 items-end'>
        <div className='flex justify-start gap-3 w-full'>
          <div className='w-[10rem]'>
            <img src="https://placehold.co/60x60" alt="" className='w-full h-full rounded-md object-cover' />
          </div>
          <div className='w-full flex flex-col gap-1.5'>
            <div className='flex justify-between items-center text-[1.1rem]'>
              <h1 className='font-semibold'>MacBook Air 13.6" Laptop</h1>
              <h2>$1,199.00</h2>
            </div>
            <div className='flex flex-col gap-3 justify-start items-start'>
              <span className='whitespace-nowrap rounded-md border border-neutral-300 bg-neutral-100 px-2 py-1 text-sm text-zinc-800'>In stock</span>
              <span className='text-sm flex gap-2 items-center'>
                <div className='w-3 h-3 rounded-full bg-neutral-700'></div>
                Space Gray
              </span>
            </div>
            <div className='flex justify-between items-center'>
              <span className='text-sm flex items-center gap-1.5 text-zinc-500 cursor-pointer'>
                <HiTrash className='w-5 h-auto text-zinc-400' />
                Remove
              </span>
              <div className='border border-neutral-300 rounded-md'>
                <button className='border-r px-2.5 py-1 focus:ring-2 focus:ring-neutral-400 transition duration-300 ease-in-out hover:bg-neutral-200 rounded-l-md'>+</button>
                <span className='px-2.5 py-1'>2</span>
                <button className='border-l px-2.5 py-1 focus:ring-2 focus:ring-neutral-400 transition duration-300 ease-in-out hover:bg-neutral-200 rounded-r-md'>+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SampleCart
