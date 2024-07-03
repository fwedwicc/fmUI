import React from 'react'

export const codeSnippet = `<!-- This component requires the Tailwind CSS Forms plugin to properly style form elements like checkboxes, radio buttons, and input fields. 
To use this plugin, install it via npm by running 'npm install @tailwindcss/forms'. 
Then, include the plugin in your Tailwind CSS configuration file (tailwind.config.js) by adding 'require('@tailwindcss/forms')' to the plugins array. -->

<!-- Default -->
<input type="text" class="block w-full rounded-md border border-neutral-200 bg-neutral-100/80 px-3 py-2.5 text-sm transition duration-300 ease-in-out focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500" placeholder="Default" required />
<!-- Disabled -->
<input type="text" class="block w-full cursor-not-allowed rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2.5 text-sm placeholder:text-neutral-400" placeholder="Disabled" disabled />
<!-- Read only -->
<input type="text" class="block w-full rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2.5 text-sm placeholder:text-neutral-800" placeholder="Read only" disabled />

`;

const Inputs01 = () => {
  return (
    <div className='gap-3 flex justify-center items-center flex-wrap p-6'>
      <div className='w-full max-w-xs space-y-4'>
        {/* Default */}
        <input type="text" className="block rounded-md w-full bg-neutral-100/80 border border-neutral-200 transition duration-300 ease-in-out focus:ring-1 focus:ring-neutral-500 focus:border-neutral-500 text-sm py-2.5 px-3" placeholder="Default" required />
        {/* Disabled */}
        <input type="text" className="block rounded-md w-full bg-neutral-50 border border-neutral-200 text-sm py-2.5 px-3 cursor-not-allowed placeholder:text-neutral-400" placeholder="Disabled" disabled />
        {/* Read only */}
        <input type="text" className="block rounded-md w-full bg-neutral-50 border border-neutral-200 text-sm py-2.5 px-3 placeholder:text-neutral-800" placeholder="Read only" disabled />
      </div>
    </div>
  )
}

export default Inputs01
