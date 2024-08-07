import React from 'react'

export const codeSnippet = `<!-- Primary -->
<button class="rounded-md border border-neutral-900 bg-neutral-700 px-4 py-2.5 font-medium text-sm text-zinc-100 transition duration-300 ease-in-out hover:bg-neutral-900/90 focus:outline-none focus:ring-2 focus:ring-neutral-400">Primary</button>
<!-- Secondary -->
<button class="rounded-md border border-neutral-300 bg-neutral-200 px-4 py-2.5 font-medium text-sm text-zinc-600 transition duration-300 ease-in-out hover:bg-neutral-400/40 focus:outline-none focus:ring-2 focus:ring-neutral-400/70">Secondary</button>
<!-- Outlined -->
<button class="rounded-md border border-neutral-300 px-4 py-2.5 font-medium text-sm text-zinc-600 transition duration-300 ease-in-out hover:bg-neutral-200/40 focus:outline-none focus:ring-2 focus:ring-neutral-400/70">Outlined</button>
<!-- Ghost -->
<button class="rounded-md px-4 py-2.5 font-medium text-sm text-zinc-600 transition duration-300 ease-in-out hover:bg-neutral-200/40 focus:outline-none focus:ring-2 focus:ring-neutral-200/70">Ghost</button>
`;

const Buttons01 = () => {
  return (
    <div className='gap-3 flex justify-center items-center flex-wrap p-6'>
      {/* Primary */}
      <button className='px-4 py-2.5 text-sm text-zinc-100 hover:bg-neutral-900/90 transition duration-300 ease-in-out bg-neutral-700 border border-neutral-900 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-400'>Primary</button>
      {/* Secondary */}
      <button className='px-4 py-2.5 transition duration-300 ease-in-out text-sm text-zinc-600 bg-neutral-200 border border-neutral-300 hover:bg-neutral-400/40 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-400/70'>Secondary</button>
      {/* Outlined */}
      <button className='px-4 py-2.5 transition duration-300 ease-in-out text-sm text-zinc-600 border border-neutral-300 hover:bg-neutral-200/40 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-400/70'>Outlined</button>
      {/* Ghost */}
      <button className='px-4 py-2.5 transition duration-300 ease-in-out text-sm text-zinc-600 hover:bg-neutral-200/40 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-200/70'>Ghost</button>
    </div>
  )
}

export default Buttons01
