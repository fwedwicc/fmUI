import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ img, alt, thumbnail, link, title, desc, numOfComps }) => {
  return (
    <Link to={link}>
      <div className='border w-full h-full md:p-4 p-3.5 rounded-md space-y-4 hover:shadow-lg transition duration-300 ease-in-out'>
        {thumbnail ? (
          <div className='h-[10rem] w-full'>
            <img src={img} alt={alt} className='object-cover h-full w-full rounded-[4px]' />
          </div>
        ) : null}
        <h1 className='text-[1.2rem] leading-none text-wrap font-semibold'>{title}</h1>
        <div className='space-y-2'>
          <p className='text-sm'>{desc}</p>
          <span className="inline-flex items-center rounded-md px-3 py-1 border border-neutral-300 bg-neutral-100 text-sm text-zinc-800">{`${numOfComps} components`}</span>
        </div>
      </div>
    </Link>
  );
}

export default Card;
