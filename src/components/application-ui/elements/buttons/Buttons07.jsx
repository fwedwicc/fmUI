import React from 'react'

export const codeSnippet = `<!-- Extra Small -->
<button class="rounded-md border border-neutral-900 bg-neutral-700 px-3 py-2 text-xs font-medium text-zinc-100 transition duration-300 ease-in-out hover:bg-neutral-900/90 focus:border-none focus:ring-2 focus:ring-neutral-400">Extra small</button>
<!-- Small -->
<button class="rounded-md border border-neutral-900 bg-neutral-700 px-3 py-2 text-sm font-medium text-zinc-100 transition duration-300 ease-in-out hover:bg-neutral-900/90 focus:border-none focus:ring-2 focus:ring-neutral-400">Small</button>
<!-- Base -->
<button class="rounded-md border border-neutral-900 bg-neutral-700 px-4 py-2.5 font-medium text-zinc-100 transition duration-300 ease-in-out hover:bg-neutral-900/90 focus:border-none focus:ring-2 focus:ring-neutral-400">Base</button>
<!-- Large -->
<button class="text-md rounded-md border border-neutral-900 bg-neutral-700 px-5 py-3 font-medium text-zinc-100 transition duration-300 ease-in-out hover:bg-neutral-900/90 focus:border-none focus:ring-2 focus:ring-neutral-400">Large</button>
<!-- Extra Large -->
<button class="rounded-md border border-neutral-900 bg-neutral-700 px-6 py-3.5 text-lg font-medium text-zinc-100 transition duration-300 ease-in-out hover:bg-neutral-900/90 focus:border-none focus:ring-2 focus:ring-neutral-400">Extra large</button>
`;

const Buttons07 = () => {
  return (
    <div className='gap-3 flex justify-center items-center flex-wrap p-6'>
      {/* Extra Small */}
      <button className='px-3 py-2 text-xs text-zinc-100 hover:bg-neutral-900/90 transition duration-300 ease-in-out bg-neutral-700 border border-neutral-900 font-medium rounded-md focus:border-none focus:ring-2 focus:ring-neutral-400'>Extra small</button>
      {/* Small */}
      <button className='px-3 py-2 text-sm text-zinc-100 hover:bg-neutral-900/90 transition duration-300 ease-in-out bg-neutral-700 border border-neutral-900 font-medium rounded-md focus:border-none focus:ring-2 focus:ring-neutral-400'>Small</button>
      {/* Base */}
      <button className='px-4 py-2.5 text-zinc-100 hover:bg-neutral-900/90 transition duration-300 ease-in-out bg-neutral-700 border border-neutral-900 font-medium rounded-md focus:border-none focus:ring-2 focus:ring-neutral-400'>Base</button>
      {/* Large */}
      <button className='px-5 py-3 text-md text-zinc-100 hover:bg-neutral-900/90 transition duration-300 ease-in-out bg-neutral-700 border border-neutral-900 font-medium rounded-md focus:border-none focus:ring-2 focus:ring-neutral-400'>Large</button>
      {/* Extra Large */}
      <button className='px-6 py-3.5 text-lg text-zinc-100 hover:bg-neutral-900/90 transition duration-300 ease-in-out bg-neutral-700 border border-neutral-900 font-medium rounded-md focus:border-none focus:ring-2 focus:ring-neutral-400'>Extra large</button>
    </div>
  )
}

export default Buttons07
