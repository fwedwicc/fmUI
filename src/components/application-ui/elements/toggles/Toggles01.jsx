import React from 'react'

export const codeSnippet = `<!-- This component requires the Tailwind CSS Forms plugin to properly style form elements like checkboxes, radio buttons, and input fields. 
To use this plugin, install it via npm by running 'npm install @tailwindcss/forms'. 
Then, include the plugin in your Tailwind CSS configuration file (tailwind.config.js) by adding 'require('@tailwindcss/forms')' to the plugins array. -->

<!-- Default State -->
<label class="inline-flex cursor-pointer items-center">
  <input type="checkbox" value="" class="peer sr-only" />
  <div class="peer relative h-5 w-9 rounded-full bg-neutral-200 transition duration-300 ease-in-out after:absolute after:start-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-neutral-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-neutral-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-neutral-300 rtl:peer-checked:after:-translate-x-full"></div>
  <span class="ms-3 text-sm font-medium text-zinc-800">Default state</span>
</label>
<!-- Checked State -->
<label class="inline-flex cursor-pointer items-center">
  <input type="checkbox" value="" class="peer sr-only" checked />
  <div class="peer relative h-5 w-9 rounded-full bg-neutral-200 transition duration-300 ease-in-out after:absolute after:start-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-neutral-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-neutral-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-neutral-300 rtl:peer-checked:after:-translate-x-full"></div>
  <span class="ms-3 text-sm font-medium text-zinc-800">Checked state</span>
</label>
<!-- Disabled Default State -->
<label class="inline-flex cursor-pointer items-center">
  <input type="checkbox" value="" class="peer sr-only" disabled />
  <div class="peer relative h-5 w-9 rounded-full bg-neutral-200 transition duration-300 ease-in-out after:absolute after:start-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-neutral-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-neutral-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-neutral-300 rtl:peer-checked:after:-translate-x-full"></div>
  <span class="ms-3 text-sm font-medium text-zinc-600">Disabled default state</span>
</label>
<!-- Disabled Checked State -->
<label class="inline-flex cursor-pointer items-center">
  <input type="checkbox" value="" class="peer sr-only" checked disabled />
  <div class="peer relative h-5 w-9 rounded-full bg-neutral-200 transition duration-300 ease-in-out after:absolute after:start-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-neutral-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-neutral-400 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-neutral-300 rtl:peer-checked:after:-translate-x-full"></div>
  <span class="ms-3 text-sm font-medium text-zinc-600">Disabled default state</span>
</label>
`;

const Toggles01 = () => {
  return (
    <div className='gap-3 flex justify-center items-center flex-wrap p-6'>
      {/* Default State */}
      <label className="inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer" />
        <div className="relative w-9 h-5 bg-neutral-200 transition duration-300 ease-in-out peer-focus:ring-neutral-300  rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-neutral-600"></div>
        <span className="ms-3 text-sm font-medium text-zinc-800">Default state</span>
      </label>
      {/* Checked State */}
      <label className="inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer" checked />
        <div className="relative w-9 h-5 bg-neutral-200 transition duration-300 ease-in-out peer-focus:ring-neutral-300  rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-neutral-600"></div>
        <span className="ms-3 text-sm font-medium text-zinc-800">Checked state</span>
      </label>
      {/* Disabled State */}
      <label className="inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer" disabled />
        <div className="relative w-9 h-5 bg-neutral-200 transition duration-300 ease-in-out peer-focus:ring-neutral-300  rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-neutral-600"></div>
        <span className="ms-3 text-sm font-medium text-zinc-600">Disabled default state</span>
      </label>
      {/* Disabled Checked State */}
      <label className="inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer" checked disabled />
        <div className="relative w-9 h-5 bg-neutral-200 transition duration-300 ease-in-out peer-focus:ring-neutral-300  rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-neutral-400"></div>
        <span className="ms-3 text-sm font-medium text-zinc-600">Disabled default state</span>
      </label>
    </div>
  )
}

export default Toggles01
