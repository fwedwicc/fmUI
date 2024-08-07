import React from 'react'

export const codeSnippet = `<!-- Primary -->
<button class="inline-flex items-center justify-center gap-2.5 rounded-md border border-neutral-900 bg-neutral-700 px-4 py-2.5 font-medium text-sm text-zinc-100 transition duration-300 ease-in-out hover:bg-neutral-900/90 focus:outline-none focus:ring-2 focus:ring-neutral-400">
  Primary
  <span class="inline-flex items-center rounded-full border border-neutral-300 bg-neutral-100 px-1 text-xs font-semibold text-zinc-800">99+</span>
</button>
<!-- Secondary -->
<button class="inline-flex items-center justify-center gap-2.5 rounded-md border border-neutral-300 bg-neutral-200 px-4 py-2.5 font-medium text-sm text-zinc-600 transition duration-300 ease-in-out hover:bg-neutral-400/40 focus:outline-none focus:ring-2 focus:ring-neutral-400/70">
  Secondary
  <span class="inline-flex items-center rounded-full border border-neutral-800 bg-neutral-600 px-1 text-xs font-semibold text-zinc-100">99+</span>
</button>
<!-- Outlined -->
<button class="inline-flex items-center justify-center gap-2.5 rounded-md border border-neutral-300 px-4 py-2.5 font-medium text-sm text-zinc-600 transition duration-300 ease-in-out hover:bg-neutral-200/40 focus:outline-none focus:ring-2 focus:ring-neutral-400/70">
  Outlined
  <span class="inline-flex items-center rounded-full border border-neutral-800 bg-neutral-600 px-1 text-xs font-semibold text-zinc-100">99+</span>
</button>
<!-- Ghost -->
<button class="inline-flex items-center justify-center gap-2.5 rounded-md px-4 py-2.5 font-medium text-sm text-zinc-600 transition duration-300 ease-in-out hover:bg-neutral-200/40 focus:outline-none focus:ring-2 focus:ring-neutral-200/70">
  Ghost
  <span class="inline-flex items-center rounded-full border border-neutral-800 bg-neutral-600 px-1 text-xs font-semibold text-zinc-100">99+</span>
</button>
`;

const Badges06 = () => {
  return (
    <div className='gap-3 flex justify-center items-center flex-wrap p-6'>
      {/* Primary */}
      <button className='px-4 py-2.5 inline-flex justify-center items-center gap-2.5 text-sm text-zinc-100 hover:bg-neutral-900/90 transition duration-300 ease-in-out bg-neutral-700 border border-neutral-900 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-400'>
        Primary
        <span className="inline-flex items-center rounded-full px-1 border border-neutral-300 bg-neutral-100 text-xs text-zinc-800 font-semibold">99+</span>
      </button>
      {/* Secondary */}
      <button className='px-4 py-2.5 inline-flex justify-center items-center gap-2.5 transition duration-300 ease-in-out text-sm text-zinc-600 bg-neutral-200 border border-neutral-300 hover:bg-neutral-400/40 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-400/70'>
        Secondary
        <span className="inline-flex items-center rounded-full px-1 border border-neutral-800 bg-neutral-600 text-xs text-zinc-100 font-semibold">99+</span>
      </button>
      {/* Outlined */}
      <button className='px-4 py-2.5 inline-flex justify-center items-center gap-2.5 transition duration-300 ease-in-out text-sm text-zinc-600 border border-neutral-300 hover:bg-neutral-200/40 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-400/70'>
        Outlined
        <span className="inline-flex items-center rounded-full px-1 border border-neutral-800 bg-neutral-600 text-xs text-zinc-100 font-semibold">99+</span>
      </button>
      {/* Ghost */}
      <button className='px-4 py-2.5 inline-flex justify-center items-center gap-2.5 transition duration-300 ease-in-out text-sm text-zinc-600 hover:bg-neutral-200/40 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-200/70'>
        Ghost
        <span className="inline-flex items-center rounded-full px-1 border border-neutral-800 bg-neutral-600 text-xs text-zinc-100 font-semibold">99+</span>
      </button>
    </div>
  )
}

export default Badges06
