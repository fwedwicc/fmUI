import React from 'react';
import useVanillaTilt from '../hooks/useVanillaTilt';
import { IoIosClose } from "react-icons/io";
import { TbTransferVertical } from "react-icons/tb";
import { HiThumbUp, HiCamera, HiMicrophone, HiPhotograph, HiPlusCircle, HiEmojiHappy, HiArrowSmLeft, HiVideoCamera, HiPhone, HiInformationCircle } from "react-icons/hi";

const Card = () => {
  const tiltOptions = {
    max: 10,
    speed: 50,
    glare: true,
    "max-glare": 0.3,
  };
  const cardRef = useVanillaTilt(tiltOptions);

  const imageUrls = [
    'https://placehold.co/30x30',
    'https://placehold.co/30x30',
    'https://placehold.co/30x30',
    'https://placehold.co/30x30',
    'https://placehold.co/30x30',
  ];

  const tags = [
    'UX Design',
    'Product Design',
    '99+'
  ]

  const stars = [
    { color: 'text-neutral-800' },
    { color: 'text-neutral-800' },
    { color: 'text-neutral-800' },
    { color: 'text-neutral-800' },
    { color: 'text-neutral-300' },
  ];

  const StarIcon = ({ color }) => (
    <svg className={`w-4 h-4 ${color} me-1`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
  );

  return (
    <div ref={cardRef} className='p-4 rounded-md border border-neutral-400/30 space-y-5 shadow-xl'>
      <div className='w-full h-full'>
        <img src="https://placehold.co/600x300" alt="" className='w-full h-full rounded-md object-cover' />
      </div>
      <div className='space-y-4 px-4 py-4'>
        <div className='flex gap-1.5 flex-wrap'>
          {tags.map((tag, index) => (
            <span key={index} className="whitespace-nowrap rounded-full border border-neutral-300 bg-neutral-100 px-2.5 py-1.5 text-sm text-zinc-800">
              {tag}
            </span>
          ))}
        </div>
        <div className='space-y-2'>
          <div className='flex justify-between items-center'>
            <h1 className='text-[1.5rem]'>Card Title</h1>
            <h1 className='text-[1.5rem]'>$1099.00</h1>
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus aperiam sint rerum accusantium.</p>
          <div className='flex gap-4 items-center pt-2'>
            <div className='flex'>
              {imageUrls.map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt={`Image ${index + 1}`}
                  className={`${index !== 0 ? 'ml-[-0.4rem]' : ''} rounded-full ring-1 ring-white`}
                />
              ))}
            </div>
            <span>Join 867+ members</span>
          </div>
          <div className="flex items-center pt-3">
            {stars.map((star, index) => (
              <StarIcon key={index} color={star.color} />
            ))}
            <span className='ms-1 text-sm font-medium text-neutral-700'>4.95 out of 5</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const Modal = () => {
  const tiltOptions = {
    max: 10,
    speed: 50,
    glare: true,
    "max-glare": 0.3,
  };
  const cardRef = useVanillaTilt(tiltOptions);

  return (
    <div ref={cardRef} className='rounded-md border border-neutral-400/30 shadow-xl w-full h-full flex flex-col justify-between p-7'>
      <div className='flex justify-between items-center'>
        <div className='flex gap-3'>
          <TbTransferVertical className='w-7 h-auto' />
          <h2 className='font-medium text-[1.3rem]'>Transfer Ownership</h2>
        </div>
        <button className='w-[2.5rem] h-[2.5rem] flex justify-center items-center transition duration-300 ease-in-out hover:bg-neutral-200/40 rounded-md focus:ring-2 focus:ring-neutral-200'>
          <IoIosClose className='w-6 h-auto' />
        </button>
      </div>
      <div className='gap-4 flex flex-col flex-1 justify-center'>
        <span>Are you sure you want to transfer the ownership of this organization to asdf? asdfasdf will become the bla bla?</span>
      </div>
      <div className='flex gap-3 justify-end'>
        <button className='px-4 py-2.5 transition duration-300 ease-in-out text-zinc-600 bg-neutral-200 border border-neutral-300 hover:bg-neutral-400/40 font-medium rounded-md focus:border-none focus:ring-2 focus:ring-neutral-400/70'>Cancel</button>
        <button className='px-4 py-2.5 text-zinc-100 hover:bg-neutral-900/90 transition duration-300 ease-in-out bg-neutral-700 border border-neutral-900 font-medium rounded-md focus:border-none focus:ring-2 focus:ring-neutral-400'>Transfer</button>
      </div>
    </div>

  )
}

const Chat = () => {
  const tiltOptions = {
    max: 3,
    speed: 50,
    glare: true,
    "max-glare": 0.2,
  };
  const cardRef = useVanillaTilt(tiltOptions);
  return (
    <div ref={cardRef} className='w-full h-full rounded-md border border-neutral-400/30 shadow-xl flex flex-col justify-between'>
      <div className='w-full p-7 border-b flex justify-between'>
        <div className='flex gap-2'>
          <button className='h-full p-2 rounded-full transition duration-300 ease-in-out hover:bg-neutral-200/40 focus:ring-2 focus:ring-neutral-200'>
            <HiArrowSmLeft className='w-6 h-auto' />
          </button>
          <div className='flex items-center gap-3'>
            <img src="https://placehold.co/20x20" alt="" className='w-8 h-8 rounded-full' />
            <h3 className='font-semibold text-[1rem] leading-none'>Frederick Moreno</h3>
          </div>
        </div>
        <div className='flex gap-1'>
          <button className='h-full p-2 rounded-full transition duration-300 ease-in-out hover:bg-neutral-200/40 focus:ring-2 focus:ring-neutral-200'>
            <HiPhone className='w-6 h-auto' />
          </button>
          <button className='h-full p-2 rounded-full transition duration-300 ease-in-out hover:bg-neutral-200/40 focus:ring-2 focus:ring-neutral-200'>
            <HiVideoCamera className='w-6 h-auto' />
          </button>
          <button className='h-full p-2 rounded-full transition duration-300 ease-in-out hover:bg-neutral-200/40 focus:ring-2 focus:ring-neutral-200'>
            <HiInformationCircle className='w-6 h-auto' />
          </button>
        </div>
      </div>
      <div className='w-full flex-1 p-7 flex gap-3 flex-col justify-between'>
        <div className='flex flex-col items-center gap-4'>
          <img src="https://placehold.co/60x60" alt="" className='w-24 h-24 rounded-full' />
          <div className='flex flex-col items-center gap-1'>
            <h2 className='font-bold text-[1.4rem] leading-none'>Frederick Moreno</h2>
            <span className='text-zinc-400 mb-2'>Yourlelele</span>
            <button className='px-2.5 py-1.5 text-sm transition duration-300 ease-in-out text-zinc-600 bg-neutral-200 border border-neutral-300 hover:bg-neutral-400/40 font-bold rounded-md focus:border-none focus:ring-2 focus:ring-neutral-400/70'>View profile</button>
          </div>
        </div>
        <div className='gap-3 flex flex-col'>
          <div className='flex justify-start gap-3 mr-36'>
            <img src="https://placehold.co/20x20" alt="" className='w-8 h-8 rounded-full' />
            <div className='flex justify-start flex-col items-start gap-1.5'>
              <p className='py-2 text-sm px-4 bg-neutral-200 rounded rounded-r-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p className='py-2 text-sm px-4 bg-neutral-200 rounded rounded-bl-xl rounded-r-xl'>Hello</p>
            </div>
          </div>
          <div className='flex justify-end ml-36'>
            <div className='flex justify-end flex-col items-end gap-1.5'>
              <p className='py-2 text-sm px-4 bg-neutral-700 text-zinc-100 rounded rounded-l-xl rounded-tr-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt minus tenetur?</p>
            </div>
          </div>
          <div className='flex justify-start gap-3 mr-36'>
            <img src="https://placehold.co/20x20" alt="" className='w-8 h-8 rounded-full' />
            <div className='flex justify-start flex-col items-start gap-1.5'>
              <p className='py-2 text-sm px-4 bg-neutral-200 rounded rounded-r-xl'>Hello</p>
            </div>
          </div>
          <div className='flex justify-end ml-36'>
            <div className='flex justify-end flex-col items-end gap-1.5'>
              <p className='py-2 text-sm px-4 bg-neutral-700 text-zinc-100 rounded rounded-l-xl rounded-tr-xl'>Lorem ipsum dolor sit amet.</p>
              <p className='py-2 text-sm px-4 bg-neutral-700 text-zinc-100 rounded rounded-l-xl rounded-br-xl'>Lorem ipsum dolor.</p>
            </div>
          </div>
          <div className='flex justify-start gap-3 mr-36'>
            <img src="https://placehold.co/20x20" alt="" className='w-8 h-8 rounded-full' />
            <div className='flex justify-start flex-col items-start gap-1.5'>
              <p className='py-2 text-sm px-4 bg-neutral-200 rounded rounded-bl-xl rounded-r-xl'>Hello</p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full p-3 flex border-t justify-between items-center gap-1'>
        <button className='h-full px-2 rounded-full transition duration-300 ease-in-out hover:bg-neutral-200/40 focus:ring-2 focus:ring-neutral-200'>
          <HiPlusCircle className='w-6 h-auto' />
        </button>
        <button className='h-full px-2 rounded-full transition duration-300 ease-in-out hover:bg-neutral-200/40 focus:ring-2 focus:ring-neutral-200'>
          <HiCamera className='w-6 h-auto' />
        </button>
        <button className='h-full px-2 rounded-full transition duration-300 ease-in-out hover:bg-neutral-200/40 focus:ring-2 focus:ring-neutral-200'>
          <HiPhotograph className='w-6 h-auto' />
        </button>
        <button className='h-full px-2 rounded-full transition duration-300 ease-in-out hover:bg-neutral-200/40 focus:ring-2 focus:ring-neutral-200'>
          <HiMicrophone className='w-6 h-auto' />
        </button>
        <div className='relative w-full'>
          <input type="text" placeholder='Message' className='h-10 pr-10 rounded-md w-full bg-neutral-100 border border-neutral-200 transition duration-300 ease-in-out focus:ring-2 focus:ring-neutral-400 text-sm px-4' />
          <button className='absolute top-1/2 right-0 transform -translate-y-1/2 h-full px-2 rounded-full'>
            <HiEmojiHappy className='w-6 h-auto' />
          </button>
        </div>
        <button className='h-full px-2 rounded-full transition duration-300 ease-in-out hover:bg-neutral-200/40 focus:ring-2 focus:ring-neutral-200'>
          <HiThumbUp className='w-6 h-auto' />
        </button>
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
      <div className='col-span-1 pb-2.5 px-2.5 border-l border-b'>
        <Modal />
      </div>
      <div className='col-span-1 row-span-3 border-l border-b pl-2.5 pb-2.5'>
        <Chat />
      </div>
      <div className='col-span-1 row-span-2 p-2.5'>test 4</div>
      <div className='col-span-1 row-span-1'>test 5</div>
      <div className='col-span-1 row-span-1'>test 6</div>
      <div className='col-span-2 row-span-1'>test 7</div>
    </div>
  )
}

export default Interface;
