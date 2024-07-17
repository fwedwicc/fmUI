import React from 'react'

export const codeSnippet = `<!-- This component requires the Tailwind CSS Forms plugin to properly style form elements like checkboxes, radio buttons, and input fields. 
To use this plugin, install it via npm by running 'npm install @tailwindcss/forms'. 
Then, include the plugin in your Tailwind CSS configuration file (tailwind.config.js) by adding 'require('@tailwindcss/forms')' to the plugins array. -->

<!-- Default -->
<input type="radio" class="w-4 h-4 text-neutral-700 border border-neutral-200 focus:ring-neutral-700 focus:ring-2 cursor-pointer transition duration-300 ease-in-out" checked />
<!-- Green -->
<input type="radio" class="w-4 h-4 text-green-700 border border-neutral-200 focus:ring-green-700 focus:ring-2 cursor-pointer transition duration-300 ease-in-out" checked />
<!-- Blue -->
<input type="radio" class="w-4 h-4 text-blue-700 border border-neutral-200 focus:ring-blue-700 focus:ring-2 cursor-pointer transition duration-300 ease-in-out" checked />
<!-- Yellow -->
<input type="radio" class="w-4 h-4 text-yellow-700 border border-neutral-200 focus:ring-yellow-700 focus:ring-2 cursor-pointer transition duration-300 ease-in-out" checked />
<!-- Red -->
<input type="radio" class="w-4 h-4 text-red-700 border border-neutral-200 focus:ring-red-700 focus:ring-2 cursor-pointer transition duration-300 ease-in-out" checked />
<!-- Indigo -->
<input type="radio" class="w-4 h-4 text-indigo-700 border border-neutral-200 focus:ring-indigo-700 focus:ring-2 cursor-pointer transition duration-300 ease-in-out" checked />
`;

const Radios02 = () => {
  return (
    <div className='gap-3 flex justify-center items-center flex-wrap p-6'>
      {/* Default */}
      <input type="radio" className="w-4 h-4 text-neutral-700 border border-neutral-200 focus:ring-neutral-700 focus:ring-2 cursor-pointer transition duration-300 ease-in-out" checked />
      {/* Green */}
      <input type="radio" className="w-4 h-4 text-green-700 border border-neutral-200 focus:ring-green-700 focus:ring-2 cursor-pointer transition duration-300 ease-in-out" checked />
      {/* Blue */}
      <input type="radio" className="w-4 h-4 text-blue-700 border border-neutral-200 focus:ring-blue-700 focus:ring-2 cursor-pointer transition duration-300 ease-in-out" checked />
      {/* Yellow */}
      <input type="radio" className="w-4 h-4 text-yellow-700 border border-neutral-200 focus:ring-yellow-700 focus:ring-2 cursor-pointer transition duration-300 ease-in-out" checked />
      {/* Red */}
      <input type="radio" className="w-4 h-4 text-red-700 border border-neutral-200 focus:ring-red-700 focus:ring-2 cursor-pointer transition duration-300 ease-in-out" checked />
      {/* Indigo */}
      <input type="radio" className="w-4 h-4 text-indigo-700 border border-neutral-200 focus:ring-indigo-700 focus:ring-2 cursor-pointer transition duration-300 ease-in-out" checked />
    </div>
  )
}

export default Radios02
