import React from 'react'

export const codeSnippet = `<!-- This component requires the Tailwind CSS Forms plugin to properly style form elements like checkboxes, radio buttons, and input fields. 
To use this plugin, install it via npm by running 'npm install @tailwindcss/forms'. 
Then, include the plugin in your Tailwind CSS configuration file (tailwind.config.js) by adding 'require('@tailwindcss/forms')' to the plugins array. -->
 
<!-- Default -->
<input type="checkbox" class="cursor-pointer rounded border border-neutral-200 text-neutral-700 transition duration-300 ease-in-out focus:ring-2 focus:ring-neutral-700" checked />
<!-- Green -->
<input type="checkbox" class="cursor-pointer rounded border border-neutral-200 text-green-700 transition duration-300 ease-in-out focus:ring-2 focus:ring-green-700" checked />
<!-- Blue -->
<input type="checkbox" class="cursor-pointer rounded border border-neutral-200 text-blue-700 transition duration-300 ease-in-out focus:ring-2 focus:ring-blue-700" checked />
<!-- Yellow -->
<input type="checkbox" class="cursor-pointer rounded border border-neutral-200 text-yellow-700 transition duration-300 ease-in-out focus:ring-2 focus:ring-yellow-700" checked />
<!-- Red -->
<input type="checkbox" class="cursor-pointer rounded border border-neutral-200 text-red-700 transition duration-300 ease-in-out focus:ring-2 focus:ring-red-700" checked />
<!-- Indigo -->
<input type="checkbox" class="cursor-pointer rounded border border-neutral-200 text-indigo-700 transition duration-300 ease-in-out focus:ring-2 focus:ring-indigo-700" checked />
`;

const Checkboxes01 = () => {
  return (
    <div className='gap-3 flex justify-center items-center flex-wrap p-6'>
      {/* Default */}
      <input type="checkbox" className="rounded border border-neutral-200  focus:ring-neutral-700 focus:ring-2 text-neutral-700 cursor-pointer transition duration-300 ease-in-out" checked />
      {/* Green */}
      <input type="checkbox" className="rounded border border-neutral-200  focus:ring-green-700 focus:ring-2 text-green-700 cursor-pointer transition duration-300 ease-in-out" checked />
      {/* Blue */}
      <input type="checkbox" className="rounded border border-neutral-200  focus:ring-blue-700 focus:ring-2 text-blue-700 cursor-pointer transition duration-300 ease-in-out" checked />
      {/* Yellow */}
      <input type="checkbox" className="rounded border border-neutral-200  focus:ring-yellow-700 focus:ring-2 text-yellow-700 cursor-pointer transition duration-300 ease-in-out" checked />
      {/* Red */}
      <input type="checkbox" className="rounded border border-neutral-200  focus:ring-red-700 focus:ring-2 text-red-700 cursor-pointer transition duration-300 ease-in-out" checked />
      {/* Indigo */}
      <input type="checkbox" className="rounded border border-neutral-200  focus:ring-indigo-700 focus:ring-2 text-indigo-700 cursor-pointer transition duration-300 ease-in-out" checked />
    </div>
  )
}

export default Checkboxes01
