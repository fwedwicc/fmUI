import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1 className='text-[5rem] leading-none font-black'>Home</h1>
      <p>Just a test.</p><br />

      <Link to={'/component/badge'} className='p-4 border bg-zinc-700 text-white'>Badge components</Link>
      <Link to={'/component/button'} className='p-4 border bg-zinc-700 text-white'>Button component</Link>
    </div>
  );
}

export default Home;
