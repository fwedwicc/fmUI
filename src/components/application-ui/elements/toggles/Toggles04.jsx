import React from 'react'

export const codeSnippet = `<!-- This component requires the Tailwind CSS Forms plugin to properly style form elements like checkboxes, radio buttons, and input fields. 
To use this plugin, install it via npm by running 'npm install @tailwindcss/forms'. 
Then, include the plugin in your Tailwind CSS configuration file (tailwind.config.js) by adding 'require('@tailwindcss/forms')' to the plugins array. -->

<!-- Small Toggle -->
<label class="inline-flex cursor-pointer items-center">
  <input type="checkbox" value="" class="peer sr-only" />
  <div class="peer relative h-5 w-9 rounded-full bg-neutral-200 transition duration-300 ease-in-out after:absolute after:start-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-neutral-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-neutral-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-neutral-300 rtl:peer-checked:after:-translate-x-full"></div>
  <span class="ms-3 text-sm font-medium text-zinc-800">Small toggle</span>
</label>
<!-- Default Toggle -->
<label class="inline-flex cursor-pointer items-center">
  <input type="checkbox" value="" class="peer sr-only" />
  <div class="peer relative h-6 w-11 rounded-full bg-neutral-200 transition duration-300 ease-in-out after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-neutral-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-neutral-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-neutral-300 rtl:peer-checked:after:-translate-x-full"></div>
  <span class="ms-3 text-sm font-medium text-zinc-800">Default toggle</span>
</label>
<!-- Large Toggle -->
<label class="inline-flex cursor-pointer items-center">
  <input type="checkbox" value="" class="peer sr-only" />
  <div class="peer relative h-7 w-14 rounded-full bg-neutral-200 transition duration-300 ease-in-out after:absolute after:start-[4px] after:top-0.5 after:h-6 after:w-6 after:rounded-full after:border after:border-neutral-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-neutral-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-neutral-300 rtl:peer-checked:after:-translate-x-full"></div>
  <span class="ms-3 text-sm font-medium text-zinc-800">Large toggle</span>
</label>
`;

const Toggles03 = () => {
  return (
    <div className='gap-3 flex justify-center items-center flex-wrap p-6'>
      {/* Small Toggle */}
      <label className="inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer" />
        <div className="relative w-9 h-5 bg-neutral-200 transition duration-300 ease-in-out peer-focus:ring-neutral-300  rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-neutral-600"></div>
        <span className="ms-3 text-sm font-medium text-zinc-800">Small toggle</span>
      </label>
      {/* Default Toggle */}
      <label className="inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer" />
        <div className="relative w-11 h-6 bg-neutral-200 transition duration-300 ease-in-out peer-focus:ring-neutral-300  rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-neutral-600"></div>
        <span className="ms-3 text-sm font-medium text-zinc-800">Default toggle</span>
      </label>
      {/* Small Toggle */}
      <label className="inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer" />
        <div className="relative w-14 h-7 bg-neutral-200 transition duration-300 ease-in-out peer-focus:ring-neutral-300  rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-neutral-600"></div>
        <span className="ms-3 text-sm font-medium text-zinc-800">Large toggle</span>
      </label>
    </div>
  )
}

export default Toggles03
