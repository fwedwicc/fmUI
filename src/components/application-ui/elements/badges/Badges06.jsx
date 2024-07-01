import React from 'react'

export const codeSnippet = `
`;

const Badges06 = () => {
  return (
    <div className='gap-3 flex justify-center items-center flex-wrap p-6'>
      {/* Primary */}
      <button className='px-4 py-2.5 inline-flex justify-center items-center gap-2.5 text-zinc-100 hover:bg-neutral-900/90 transition duration-300 ease-in-out bg-neutral-700 border border-neutral-900 font-medium rounded-md focus:border-none focus:ring-2 focus:ring-neutral-400'>
        Primary
        <span className="inline-flex items-center rounded-full px-1 border border-neutral-300 bg-neutral-100 text-xs text-zinc-800 font-semibold">99+</span>
      </button>
      {/* Secondary */}
      <button className='px-4 py-2.5 inline-flex justify-center items-center gap-2.5 transition duration-300 ease-in-out text-zinc-600 bg-neutral-200 border border-neutral-300 hover:bg-neutral-400/40 font-medium rounded-md focus:border-none focus:ring-2 focus:ring-neutral-400/70'>
        Secondary
        <span className="inline-flex items-center rounded-full px-1 border border-neutral-800 bg-neutral-600 text-xs text-zinc-100 font-semibold">99+</span>
      </button>
      {/* Outlined */}
      <button className='px-4 py-2.5 inline-flex justify-center items-center gap-2.5 transition duration-300 ease-in-out text-zinc-600 border border-neutral-300 hover:bg-neutral-200/40 font-medium rounded-md focus:border-none focus:ring-2 focus:ring-neutral-400/70'>
        Outlined
        <span className="inline-flex items-center rounded-full px-1 border border-neutral-800 bg-neutral-600 text-xs text-zinc-100 font-semibold">99+</span>
      </button>
      {/* Ghost */}
      <button className='px-4 py-2.5 inline-flex justify-center items-center gap-2.5 transition duration-300 ease-in-out text-zinc-600 hover:bg-neutral-200/40 font-medium rounded-md focus:border-none focus:ring-2 focus:ring-neutral-200/70'>
        Ghost
        <span className="inline-flex items-center rounded-full px-1 border border-neutral-800 bg-neutral-600 text-xs text-zinc-100 font-semibold">99+</span>
      </button>
    </div>
  )
}

export default Badges06
