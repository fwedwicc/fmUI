import React from 'react'

export const codeSnippet = `<nav class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-7 py-6">
  <a href="#">
    <img src="https://github.com/fwedwicc/fmUI/blob/main/src/assets/fmUI-logo.png?raw=true" alt="Your Logo" class="h-auto w-12" />
  </a>
  <button class="w-8 h-8 flex md:hidden justify-center items-center transition duration-300 ease-in-out bg-neutral-200/40 hover:bg-neutral-300/40 rounded-md focus:ring-2 focus:ring-neutral-200">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
      <path fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm8.25 5.25a.75.75 0 0 1 .75-.75h8.25a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
    </svg>
  </button>
  <!-- For medium to small screens, place your button content here. -->
  <ul class="md:flex hidden items-center gap-3">
    <li>
      <a href="#" class="px-4 py-2.5 transition duration-300 ease-in-out text-sm text-zinc-600 hover:bg-neutral-200/40 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-200/70">Home</a>
    </li>
    <li>
      <a href="#" class="px-4 py-2.5 transition duration-300 ease-in-out text-sm text-zinc-600 hover:bg-neutral-200/40 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-200/70">About</a>
    </li>
    <li>
      <a href="#" class="px-4 py-2.5 transition duration-300 ease-in-out text-sm text-zinc-600 hover:bg-neutral-200/40 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-200/70">Services</a>
    </li>
    <li>
      <a href="#" class="px-4 py-2.5 transition duration-300 ease-in-out text-sm text-zinc-600 hover:bg-neutral-200/40 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-200/70">Contact</a>
    </li>
  </ul>
</nav>
`;

const Navbar01 = () => {
  return (
    <div className='w-full h-auto p-2'>
      <nav className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-7 py-6'>
        <a href="#">
          <img src="https://github.com/fwedwicc/fmUI/blob/main/src/assets/fmUI-logo.png?raw=true" alt="Your Logo" class="h-auto w-12" />
        </a>
        <button className='w-8 h-8 flex md:hidden justify-center items-center transition duration-300 ease-in-out bg-neutral-200/40 hover:bg-neutral-300/40 rounded-md focus:ring-2 focus:ring-neutral-200'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
            <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm8.25 5.25a.75.75 0 0 1 .75-.75h8.25a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
          </svg>
        </button>
        {/* For medium to small screens, place your button content here.  */}
        <ul className='md:flex hidden items-center gap-3'>
          <li>
            <a href='#' className='px-4 py-2.5 transition duration-300 ease-in-out text-sm text-zinc-600 hover:bg-neutral-200/40 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-200/70'>Home</a>
          </li>
          <li>
            <a href='#' className='px-4 py-2.5 transition duration-300 ease-in-out text-sm text-zinc-600 hover:bg-neutral-200/40 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-200/70'>About</a>
          </li>
          <li>
            <a href='#' className='px-4 py-2.5 transition duration-300 ease-in-out text-sm text-zinc-600 hover:bg-neutral-200/40 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-200/70'>Services</a>
          </li>
          <li>
            <a href='#' className='px-4 py-2.5 transition duration-300 ease-in-out text-sm text-zinc-600 hover:bg-neutral-200/40 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-200/70'>Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar01
