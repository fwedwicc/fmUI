import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ link, title, desc, numOfComps }) => {
  return (
    <Link to={link}>
      <div className='border w-full p-6 rounded-md space-y-4 hover:shadow-lg transition duration-300 ease-in-out'>
        <h1 className='text-[1.5rem] leading-none font-semibold'>{title}</h1>
        <p>{desc}</p>
        <span className="inline-flex items-center rounded-md px-3 py-1 border border-neutral-300 bg-neutral-100 text-sm text-zinc-800">{`${numOfComps} components`}</span>
      </div>
    </Link>
  );
}

export default Card;
