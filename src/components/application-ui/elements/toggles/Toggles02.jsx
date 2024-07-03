import React from 'react'

export const codeSnippet = `<!-- This component requires the Tailwind CSS Forms plugin to properly style form elements like checkboxes, radio buttons, and input fields. 
To use this plugin, install it via npm by running 'npm install @tailwindcss/forms'. 
Then, include the plugin in your Tailwind CSS configuration file (tailwind.config.js) by adding 'require('@tailwindcss/forms')' to the plugins array. -->

<!-- Default State -->
<label class="cursor-pointer inline-block">
  <input type="checkbox" value="" checked class="peer sr-only" />
  <div class="peer relative h-5 w-9 rounded-full bg-neutral-200 transition duration-300 ease-in-out after:absolute after:start-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-neutral-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-neutral-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-neutral-300 rtl:peer-checked:after:-translate-x-full"></div>
</label>
<!-- Green -->
<label class="cursor-pointer inline-block">
  <input type="checkbox" value="" checked class="peer sr-only" />
  <div class="peer relative h-5 w-9 rounded-full bg-neutral-200 transition duration-300 ease-in-out after:absolute after:start-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-neutral-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-neutral-300 rtl:peer-checked:after:-translate-x-full"></div>
</label>
<!-- Blue -->
<label class="cursor-pointer inline-block">
  <input type="checkbox" value="" checked class="peer sr-only" />
  <div class="peer relative h-5 w-9 rounded-full bg-neutral-200 transition duration-300 ease-in-out after:absolute after:start-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-neutral-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-neutral-300 rtl:peer-checked:after:-translate-x-full"></div>
</label>
<!-- Yellow -->
<label class="cursor-pointer inline-block">
  <input type="checkbox" value="" checked class="peer sr-only" />
  <div class="peer relative h-5 w-9 rounded-full bg-neutral-200 transition duration-300 ease-in-out after:absolute after:start-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-neutral-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-yellow-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-neutral-300 rtl:peer-checked:after:-translate-x-full"></div>
</label>
<!-- Red -->
<label class="cursor-pointer inline-block">
  <input type="checkbox" value="" checked class="peer sr-only" />
  <div class="peer relative h-5 w-9 rounded-full bg-neutral-200 transition duration-300 ease-in-out after:absolute after:start-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-neutral-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-red-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-neutral-300 rtl:peer-checked:after:-translate-x-full"></div>
</label>
<!-- Indigo -->
<label class="cursor-pointer inline-block">
  <input type="checkbox" value="" checked class="peer sr-only" />
  <div class="peer relative h-5 w-9 rounded-full bg-neutral-200 transition duration-300 ease-in-out after:absolute after:start-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-neutral-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-indigo-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-neutral-300 rtl:peer-checked:after:-translate-x-full"></div>
</label>
`;

const Toggles02 = () => {
  return (
    <div className='gap-3 flex justify-center items-center flex-wrap p-6'>
      {/* Default State */}
      <label className="cursor-pointer inline-block">
        <input type="checkbox" value="" checked className="sr-only peer" />
        <div className="relative w-9 h-5 bg-neutral-200 transition duration-300 ease-in-out peer-focus:ring-neutral-300  rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-neutral-600"></div>
      </label>
      {/* Green */}
      <label className="cursor-pointer inline-block">
        <input type="checkbox" value="" checked className="sr-only peer" />
        <div className="relative w-9 h-5 bg-neutral-200 transition duration-300 ease-in-out peer-focus:ring-neutral-300  rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-600"></div>
      </label>
      {/* Blue */}
      <label className="cursor-pointer inline-block">
        <input type="checkbox" value="" checked className="sr-only peer" />
        <div className="relative w-9 h-5 bg-neutral-200 transition duration-300 ease-in-out peer-focus:ring-neutral-300  rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
      </label>
      {/* Yellow */}
      <label className="cursor-pointer inline-block">
        <input type="checkbox" value="" checked className="sr-only peer" />
        <div className="relative w-9 h-5 bg-neutral-200 transition duration-300 ease-in-out peer-focus:ring-neutral-300  rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-yellow-600"></div>
      </label>
      {/* Red */}
      <label className="cursor-pointer inline-block">
        <input type="checkbox" value="" checked className="sr-only peer" />
        <div className="relative w-9 h-5 bg-neutral-200 transition duration-300 ease-in-out peer-focus:ring-neutral-300  rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-red-600"></div>
      </label>
      {/* Indigo */}
      <label className="cursor-pointer inline-block">
        <input type="checkbox" value="" checked className="sr-only peer" />
        <div className="relative w-9 h-5 bg-neutral-200 transition duration-300 ease-in-out peer-focus:ring-neutral-300  rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600"></div>
      </label>
    </div>
  )
}

export default Toggles02
