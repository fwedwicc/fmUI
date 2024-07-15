import React from 'react'

export const codeSnippet = `<nav>
  <ol class="flex items-center gap-2.5">
    <!-- Default State -->
    <li>
      <a href="#" class="rounded-md border border-neutral-200 px-2.5 py-1.5 text-sm font-medium text-zinc-800 transition duration-300 ease-in-out hover:bg-neutral-200/40 active:scale-95"> Home </a>
    </li>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-3">
      <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
    </svg>
    <!-- Default State -->
    <li>
      <a href="#" class="rounded-md border border-neutral-200 px-2.5 py-1.5 text-sm font-medium text-zinc-800 transition duration-300 ease-in-out hover:bg-neutral-200/40 active:scale-95"> Archive </a>
    </li>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-3">
      <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
    </svg>
    <!-- Active State -->
    <li>
      <a href="#" class="rounded-md border border-neutral-300 bg-neutral-200 px-2.5 py-1.5 text-sm font-medium text-zinc-800 transition duration-300 ease-in-out hover:bg-neutral-400/40 active:scale-95"> Notification </a>
    </li>
  </ol>
</nav>
`;

const Breadcrumbs01 = () => {
  return (
    <div className='gap-3 flex justify-center items-center flex-wrap p-6'>
      <nav>
        <ol className='flex items-center gap-2.5'>
          <li>
            <a href='#' className='px-2.5 py-1.5 active:scale-95 transition duration-300 ease-in-out text-zinc-800 border border-neutral-200 hover:bg-neutral-200/40 font-medium rounded-md text-sm'>
              Home
            </a>
          </li>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3">
            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
          </svg>
          <li>
            <a href='#' className='px-2.5 py-1.5 active:scale-95 transition duration-300 ease-in-out text-zinc-800 border border-neutral-200 hover:bg-neutral-200/40 font-medium rounded-md text-sm'>
              Archive
            </a>
          </li>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3">
            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
          </svg>
          <li>
            <a href='#' className='px-2.5 py-1.5 active:scale-95 transition duration-300 ease-in-out text-zinc-800 bg-neutral-200 border border-neutral-300 hover:bg-neutral-400/40 font-medium rounded-md text-sm'>
              Notification
            </a>
          </li>
        </ol>
      </nav>
    </div>
  )
}

export default Breadcrumbs01
