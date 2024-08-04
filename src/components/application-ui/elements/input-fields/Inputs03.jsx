import React from 'react'

export const codeSnippet = `<!-- This component requires the Tailwind CSS Forms plugin to properly style form elements like checkboxes, radio buttons, and input fields. 
To use this plugin, install it via npm by running 'npm install @tailwindcss/forms'. 
Then, include the plugin in your Tailwind CSS configuration file (tailwind.config.js) by adding 'require('@tailwindcss/forms')' to the plugins array. -->

<!-- Input Field with leading icon -->
<div class="relative w-full">
  <div class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
    <svg class="size-3.5 text-zinc-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2" />
    </svg>
  </div>
  <input type="text" class="w-full rounded-md border border-neutral-200 bg-neutral-100/80 px-3 py-2 ps-9 text-sm transition duration-300 ease-in-out focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500" placeholder="Search branch..." required />
</div>
<!-- Input Field with trailing icon -->
<div class="relative w-full">
  <div class="pointer-events-none absolute inset-y-0 end-0 flex items-center pe-3">
    <svg class="size-3.5 text-zinc-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2" />
    </svg>
  </div>
  <input type="text" class="w-full rounded-md border border-neutral-200 bg-neutral-100/80 px-3 py-2 pe-9 text-sm transition duration-300 ease-in-out focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500"  placeholder="Search branch..." required />
</div>
`;

const Inputs03 = () => {
  return (
    <div className='gap-3 flex justify-center items-center flex-wrap p-6'>
      <div className='w-full max-w-xs space-y-4'>
        {/* Input Field with leading icon */}
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="size-3.5 text-zinc-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2" />
            </svg>
          </div>
          <input type="text" className="rounded-md w-full bg-neutral-100/80 border border-neutral-200 transition duration-300 ease-in-out focus:ring-1 focus:ring-neutral-500 focus:border-neutral-500 text-sm py-2 px-3 ps-9" placeholder="Search branch..." required />
        </div>
        {/* Input Field with trailing icon */}
        <div className="relative w-full">
          <div className="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none">
            <svg className="size-3.5 text-zinc-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2" />
            </svg>
          </div>
          <input type="text" className="rounded-md w-full bg-neutral-100/80 border border-neutral-200 transition duration-300 ease-in-out focus:ring-1 focus:ring-neutral-500 focus:border-neutral-500 text-sm py-2 px-3 pe-9" placeholder="Search branch..." required />
        </div>
      </div>
    </div>
  )
}

export default Inputs03
