import React from 'react'

export const codeSnippet = `<!-- Primary -->
<button class="rounded-full border border-neutral-900 bg-neutral-700 p-2.5 font-medium text-zinc-100 transition duration-300 ease-in-out hover:bg-neutral-900/90 focus:border-none focus:ring-2 focus:ring-neutral-400">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
    <path fill-rule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
  </svg>
</button>
<!-- Secondary -->
<button class="rounded-full border border-neutral-300 bg-neutral-200 p-2.5 font-medium text-zinc-600 transition duration-300 ease-in-out hover:bg-neutral-400/40 focus:border-none focus:ring-2 focus:ring-neutral-400/70">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
    <path fill-rule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
  </svg>
</button>
<!-- Outlined -->
<button class="rounded-full border border-neutral-300 p-2.5 font-medium text-zinc-600 transition duration-300 ease-in-out hover:bg-neutral-200/40 focus:border-none focus:ring-2 focus:ring-neutral-400/70">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
    <path fill-rule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
  </svg>
</button>
<!-- Ghost -->
<button class="rounded-full p-2.5 font-medium text-zinc-600 transition duration-300 ease-in-out hover:bg-neutral-200/40 focus:border-none focus:ring-2 focus:ring-neutral-200/70">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
    <path fill-rule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
  </svg>
</button>
`;

const Buttons04 = () => {
  return (
    <div className='gap-3 flex justify-center items-center flex-wrap p-6'>
      {/* Primary */}
      <button className='p-2.5 text-zinc-100 hover:bg-neutral-900/90 transition duration-300 ease-in-out bg-neutral-700 border border-neutral-900 font-medium rounded-full focus:border-none focus:ring-2 focus:ring-neutral-400'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
          <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
        </svg>
      </button>
      {/* Secondary */}
      <button className='p-2.5 transition duration-300 ease-in-out text-zinc-600 bg-neutral-200 border border-neutral-300 hover:bg-neutral-400/40 font-medium rounded-full focus:border-none focus:ring-2 focus:ring-neutral-400/70'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
          <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
        </svg>
      </button>
      {/* Outlined */}
      <button className='p-2.5 transition duration-300 ease-in-out text-zinc-600 border border-neutral-300 hover:bg-neutral-200/40 font-medium rounded-full focus:border-none focus:ring-2 focus:ring-neutral-400/70'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
          <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
        </svg>
      </button>
      {/* Ghost */}
      <button className='p-2.5 transition duration-300 ease-in-out text-zinc-600 hover:bg-neutral-200/40 font-medium rounded-full focus:border-none focus:ring-2 focus:ring-neutral-200/70'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
          <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  )
}

export default Buttons04
