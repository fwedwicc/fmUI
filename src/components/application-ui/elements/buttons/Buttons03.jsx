import React from 'react'

export const codeSnippet = `<!-- Primary with leading icon -->
<button class="inline-flex items-center justify-center gap-2.5 rounded-md border border-neutral-900 bg-neutral-700 px-4 py-2.5 font-medium text-zinc-100 transition duration-300 ease-in-out hover:bg-neutral-900/90 focus:border-none focus:ring-2 focus:ring-neutral-400">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clip-rule="evenodd" />
  </svg>
  Primary
</button>
<!-- Primary with trailing icon -->
<button class="inline-flex items-center justify-center gap-2.5 rounded-md border border-neutral-900 bg-neutral-700 px-4 py-2.5 font-medium text-zinc-100 transition duration-300 ease-in-out hover:bg-neutral-900/90 focus:border-none focus:ring-2 focus:ring-neutral-400">
  Primary
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clip-rule="evenodd" />
  </svg>
</button>
<!-- Secondary with leading icon -->
<button class="inline-flex items-center justify-center gap-2.5 rounded-md border border-neutral-300 bg-neutral-200 px-4 py-2.5 font-medium text-zinc-600 transition duration-300 ease-in-out hover:bg-neutral-400/40 focus:border-none focus:ring-2 focus:ring-neutral-400/70">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clip-rule="evenodd" />
  </svg>
  Secondary
</button>
<!-- Secondary with trailing icon -->
<button class="inline-flex items-center justify-center gap-2.5 rounded-md border border-neutral-300 bg-neutral-200 px-4 py-2.5 font-medium text-zinc-600 transition duration-300 ease-in-out hover:bg-neutral-400/40 focus:border-none focus:ring-2 focus:ring-neutral-400/70">
  Secondary
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clip-rule="evenodd" />
  </svg>
</button>
<!-- Outlined with leading icon -->
<button class="inline-flex items-center justify-center gap-2.5 rounded-md border border-neutral-300 px-4 py-2.5 font-medium text-zinc-600 transition duration-300 ease-in-out hover:bg-neutral-200/40 focus:border-none focus:ring-2 focus:ring-neutral-400/70">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clip-rule="evenodd" />
  </svg>
  Outlined
</button>
<!-- Outlined with trailing icon -->
<button class="inline-flex items-center justify-center gap-2.5 rounded-md border border-neutral-300 px-4 py-2.5 font-medium text-zinc-600 transition duration-300 ease-in-out hover:bg-neutral-200/40 focus:border-none focus:ring-2 focus:ring-neutral-400/70">
  Outlined
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clip-rule="evenodd" />
  </svg>
</button>
<!-- Ghost with leading icon -->
<button class="inline-flex items-center justify-center gap-2.5 rounded-md px-4 py-2.5 font-medium text-zinc-600 transition duration-300 ease-in-out hover:bg-neutral-200/40 focus:border-none focus:ring-2 focus:ring-neutral-200/70">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clip-rule="evenodd" />
  </svg>
  Ghost
</button>
<!-- Ghost with trailing icon -->
<button class="inline-flex items-center justify-center gap-2.5 rounded-md px-4 py-2.5 font-medium text-zinc-600 transition duration-300 ease-in-out hover:bg-neutral-200/40 focus:border-none focus:ring-2 focus:ring-neutral-200/70">
  Ghost
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clip-rule="evenodd" />
  </svg>
</button>
`;

const Buttons03 = () => {
  return (
    <div className='gap-3 flex justify-center items-center flex-wrap p-6'>
      {/* Primary with leading icon */}
      <button className='px-4 py-2.5 inline-flex justify-center items-center gap-2.5 text-zinc-100 hover:bg-neutral-900/90 transition duration-300 ease-in-out bg-neutral-700 border border-neutral-900 font-medium rounded-md focus:border-none focus:ring-2 focus:ring-neutral-400'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
        </svg>
        Primary
      </button>
      {/* Primary with trailing icon */}
      <button className='px-4 py-2.5 inline-flex justify-center items-center gap-2.5 text-zinc-100 hover:bg-neutral-900/90 transition duration-300 ease-in-out bg-neutral-700 border border-neutral-900 font-medium rounded-md focus:border-none focus:ring-2 focus:ring-neutral-400'>
        Primary
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
        </svg>
      </button>
      {/* Secondary with leading icon */}
      <button className='px-4 py-2.5 inline-flex justify-center items-center gap-2.5 transition duration-300 ease-in-out text-zinc-600 bg-neutral-200 border border-neutral-300 hover:bg-neutral-400/40 font-medium rounded-md focus:border-none focus:ring-2 focus:ring-neutral-400/70'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
        </svg>
        Secondary
      </button>
      {/* Secondary with trailing icon */}
      <button className='px-4 py-2.5 inline-flex justify-center items-center gap-2.5 transition duration-300 ease-in-out text-zinc-600 bg-neutral-200 border border-neutral-300 hover:bg-neutral-400/40 font-medium rounded-md focus:border-none focus:ring-2 focus:ring-neutral-400/70'>
        Secondary
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
        </svg>
      </button>
      {/* Outlined with leading icon */}
      <button className='px-4 py-2.5 inline-flex justify-center items-center gap-2.5 transition duration-300 ease-in-out text-zinc-600 border border-neutral-300 hover:bg-neutral-200/40 font-medium rounded-md focus:border-none focus:ring-2 focus:ring-neutral-400/70'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
        </svg>
        Outlined
      </button>
      {/* Outlined with trailing icon */}
      <button className='px-4 py-2.5 inline-flex justify-center items-center gap-2.5 transition duration-300 ease-in-out text-zinc-600 border border-neutral-300 hover:bg-neutral-200/40 font-medium rounded-md focus:border-none focus:ring-2 focus:ring-neutral-400/70'>
        Outlined
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
        </svg>
      </button>
      {/* Ghost with leading icon */}
      <button className='px-4 py-2.5 inline-flex justify-center items-center gap-2.5 transition duration-300 ease-in-out text-zinc-600 hover:bg-neutral-200/40 font-medium rounded-md focus:border-none focus:ring-2 focus:ring-neutral-200/70'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
        </svg>
        Ghost
      </button>
      {/* Ghost with trailing icon */}
      <button className='px-4 py-2.5 inline-flex justify-center items-center gap-2.5 transition duration-300 ease-in-out text-zinc-600 hover:bg-neutral-200/40 font-medium rounded-md focus:border-none focus:ring-2 focus:ring-neutral-200/70'>
        Ghost
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  )
}

export default Buttons03
