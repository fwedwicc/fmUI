import React from 'react'

export const codeSnippet = `<!-- This component requires the Tailwind CSS Forms plugin to properly style form elements like checkboxes, radio buttons, and input fields. 
To use this plugin, install it via npm by running 'npm install @tailwindcss/forms'. 
Then, include the plugin in your Tailwind CSS configuration file (tailwind.config.js) by adding 'require('@tailwindcss/forms')' to the plugins array. -->

<div>
  <label for="email" class="mb-1.5 block text-sm font-medium text-zinc-800">Email address</label>
  <input id="email" type="text" class="block w-full rounded-md border border-neutral-200 bg-neutral-100/80 px-3 py-2 text-sm transition duration-300 ease-in-out focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500" placeholder="name@email.com" required />
</div>
`;

const Inputs02 = () => {
  return (
    <div className='gap-3 flex justify-center items-center flex-wrap p-6'>
      <div className='w-full max-w-xs space-y-4'>
        <div>
          <label htmlFor='email' className="block text-sm font-medium text-zinc-800 mb-1.5">Email address</label>
          <input id='email' type="text" className="block rounded-md w-full bg-neutral-100/80 border border-neutral-200 transition duration-300 ease-in-out focus:ring-1 focus:ring-neutral-500 focus:border-neutral-500 text-sm py-2 px-3" placeholder="name@email.com" required />
        </div>
      </div>
    </div>
  )
}

export default Inputs02
