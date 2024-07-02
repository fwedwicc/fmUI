import React from 'react';
import { Link } from 'react-router-dom';
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5, FaGithub } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { elementsData, templatesData } from '../constants';

const getTotalTabs = (data) => {
  return Object.values(data).reduce((total, element) => {
    return total + element.tabs.length;
  }, 0);
};

const Hero = () => {
  const totalComponents = getTotalTabs(elementsData);
  const totalTemplates = getTotalTabs(templatesData);

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2'>
      <div className='col-span-1 space-y-6'>
        <div className='space-y-3'>
          <h1 className='text-[5rem] leading-none font-black'>fmUI, crafted with Tailwind CSS.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi debitis optio dolores illo suscipit atque exercitationem molestias magnam voluptates aspernatur.</p>
        </div>
        <div className='space-x-3'>
          <Link to='/components'>
            <button className='inline-flex gap-2.5 items-center px-4 py-2.5 text-zinc-100 hover:bg-neutral-900/90 transition duration-300 ease-in-out bg-neutral-700 border border-neutral-900 font-medium rounded-md'>
              Explore components
              <MdArrowOutward className='h-5 w-auto' />
            </button>
          </Link>
          <button className='inline-flex gap-2.5 items-center px-4 py-2.5 transition duration-300 ease-in-out text-zinc-600 bg-neutral-200 border border-neutral-300 hover:bg-neutral-400/40 font-medium rounded-md'>
            View on GitHub
            <FaGithub className='h-5 w-auto' />
          </button>
        </div>
      </div>
      <div className='col-span-1 grid grid-cols-2 grid-rows-2'>
        <div className='col-span-1 row-span-1 bg-border-gradient-1 p-[0.5px]'>
          <div className='bg-white w-full h-full flex flex-col justify-center items-center'>
            <h1 className='text-[5rem] leading-none font-black'>{totalComponents}</h1>
            <span>Total Components</span>
          </div>
        </div>

        <div className='col-span-1 row-span-1 bg-border-gradient-2 p-[0.5px]'>
          <div className='bg-white w-full h-full flex flex-col justify-center items-center'>
            <h1 className='text-[5rem] leading-none font-black'>{totalTemplates}</h1>
            <span>Page Templates</span>
          </div>
        </div>
        <div className='col-span-2 row-span-1 bg-border-gradient-3 p-[0.5px]'>
          <div className='bg-white flex flex-col gap-4 justify-center items-center w-full h-full'>
            <h1 className='text-[2.5rem] leading-none font-black'>All are Freemium</h1>
            <div className='gap-3 flex'>
              <RiTailwindCssFill className='text-zinc-300 h-10 w-auto' />
              <FaHtml5 className='text-zinc-300 h-10 w-auto' />
            </div></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
