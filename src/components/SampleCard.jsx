import React from 'react';
import { Tilt } from '@jdion/tilt-react';

const SampleCard = () => {

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
    <Tilt
      className="Tilt"
      options={{ max: 15, scale: 1.02, speed: 400 }}
      style={{ height: '100%', width: '100%' }}
    >
      <div className='p-4 rounded-md border border-neutral-400/30 w-full h-full space-y-5 shadow-xl'>
        <div>
          <img src="https://placehold.co/600x300" alt="" className='w-full h-full rounded-md object-cover' />
        </div>
        <div className='space-y-5 px-4 pt-4'>
          <div className='flex gap-1.5 flex-wrap'>
            {tags.map((tag, index) => (
              <span key={index} className="whitespace-nowrap rounded-full border border-neutral-300 bg-neutral-100 px-2.5 py-1 text-sm text-zinc-800">
                {tag}
              </span>
            ))}
          </div>
          <div className='space-y-1.5'>
            <div className='flex justify-between items-center'>
              <h1 className='text-[1.3rem]'>Card Title</h1>
              <h1 className='text-[1.3rem]'>$1099.00</h1>
            </div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus aperiam sint rerum accusantium.</p>
            <div className='flex gap-3 items-center pt-2'>
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
              <span className='text-xs'>Join 867+ members</span>
            </div>
            <div className="flex items-center pt-3">
              {stars.map((star, index) => (
                <StarIcon key={index} color={star.color} />
              ))}
              <span className='ms-1 text-xs font-medium text-neutral-700'>4.95 out of 5</span>
            </div>
          </div>
        </div>
      </div>
    </Tilt>
  )
}

export default SampleCard
