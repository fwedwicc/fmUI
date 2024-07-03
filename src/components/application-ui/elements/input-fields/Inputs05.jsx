import React from 'react'

export const codeSnippet = `<!-- This component requires the Tailwind CSS Forms plugin to properly style form elements like checkboxes, radio buttons, and input fields. 
To use this plugin, install it via npm by running 'npm install @tailwindcss/forms'. 
Then, include the plugin in your Tailwind CSS configuration file (tailwind.config.js) by adding 'require('@tailwindcss/forms')' to the plugins array. -->

<!-- Success Input Validation -->
<div>
  <label for="success" class="mb-1.5 block text-sm font-medium text-green-500">Email Address</label>
  <input id="success" type="text" class="block w-full rounded-md border border-green-500 bg-neutral-50 px-3 py-2.5 text-sm transition duration-300 ease-in-out placeholder:text-green-500 focus:border-green-500 focus:ring-1 focus:ring-green-500" placeholder="Success input" required />
  <span class="mt-2 text-sm text-green-500">Some success message.</span>
</div>
<!-- Error Input Validation -->
<div>
  <label for="error" class="mb-1.5 block text-sm font-medium text-red-500">Email Address</label>
  <input id="error" type="text" class="block w-full rounded-md border border-red-500 bg-neutral-50 px-3 py-2.5 text-sm transition duration-300 ease-in-out placeholder:text-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500" placeholder="Error input" required />
  <span class="mt-2 text-sm text-red-500">Some error message.</span>
</div>
`;

const Inputs05 = () => {
  return (
    <div className='gap-3 flex justify-center items-center flex-wrap p-6'>
      <div className='w-full max-w-xs space-y-4'>
        {/* Success Input Validation */}
        <div>
          <label htmlFor='success' className="block text-sm font-medium text-green-500 mb-1.5">Email Address</label>
          <input id='success' type="text" className="block rounded-md w-full bg-neutral-50 border border-green-500 transition duration-300 ease-in-out focus:ring-1 focus:ring-green-500 focus:border-green-500 text-sm py-2.5 px-3 placeholder:text-green-500" placeholder="Success input" required />
          <span className="mt-2 text-sm text-green-500">Some success message.</span>
        </div>
        {/* Error Input Validation */}
        <div>
          <label htmlFor='success' className="block text-sm font-medium text-red-500 mb-1.5">Email Address</label>
          <input id='success' type="text" className="block rounded-md w-full bg-neutral-50 border border-red-500 transition duration-300 ease-in-out focus:ring-1 focus:ring-red-500 focus:border-red-500 text-sm py-2.5 px-3 placeholder:text-red-500" placeholder="Error input" required />
          <span className="mt-2 text-sm text-red-500">Some error message.</span>
        </div>
      </div>
    </div>
  )
}

export default Inputs05
