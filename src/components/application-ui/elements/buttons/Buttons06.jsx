import React from 'react'

export const codeSnippet = `<!-- Primary -->
<button class="cursor-not-allowed rounded-md border border-neutral-700 bg-neutral-600 px-4 py-2.5 font-medium text-sm text-zinc-300">Primary</button>
<!-- Secondary -->
<button class="cursor-not-allowed rounded-md border border-neutral-300 bg-neutral-100 px-4 py-2.5 font-medium text-sm text-zinc-400">Secondary</button>
<!-- Outlined -->
<button class="cursor-not-allowed rounded-md border border-neutral-300 px-4 py-2.5 font-medium text-sm text-zinc-400">Outlined</button>
<!-- Ghost -->
<button class="cursor-not-allowed rounded-md px-4 py-2.5 font-medium text-sm text-zinc-400">Ghost</button>
`;

const Buttons06 = () => {
  return (
    <div className='gap-3 flex justify-center items-center flex-wrap p-6'>
      {/* Primary */}
      <button className='cursor-not-allowed px-4 py-2.5 text-sm text-zinc-300 bg-neutral-600 border border-neutral-700 font-medium rounded-md'>Primary</button>
      {/* Secondary */}
      <button className='cursor-not-allowed px-4 py-2.5 text-sm text-zinc-400 bg-neutral-100 border border-neutral-300 font-medium rounded-md'>Secondary</button>
      {/* Outlined */}
      <button className='cursor-not-allowed px-4 py-2.5 text-sm text-zinc-400 border border-neutral-300 font-medium rounded-md'>Outlined</button>
      {/* Ghost */}
      <button className='cursor-not-allowed px-4 py-2.5 text-sm text-zinc-400 font-medium rounded-md'>Ghost</button>
    </div>
  )
}

export default Buttons06
