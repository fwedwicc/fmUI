import React from 'react'

export const codeSnippet = `<!-- This component requires the Tailwind CSS Forms plugin to properly style form elements like checkboxes, radio buttons, and input fields. 
To use this plugin, install it via npm by running 'npm install @tailwindcss/forms'. 
Then, include the plugin in your Tailwind CSS configuration file (tailwind.config.js) by adding 'require('@tailwindcss/forms')' to the plugins array. -->

<label for="Username" class="relative block rounded-md border border-neutral-300 transition duration-300 ease-in-out focus-within:border-neutral-500 focus-within:ring-1 focus-within:ring-neutral-500">
  <input type="text" id="Username" class="peer w-full border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0" placeholder="Email address" />
  <span class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-zinc-800 transition-all duration-200 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">Email address</span>
</label>
`;

const Inputs06 = () => {
  return (
    <div className='gap-3 flex justify-center items-center flex-wrap p-6'>
      <div className='w-full max-w-xs space-y-4'>
        <label htmlFor="Username" className="relative block rounded-md border border-neutral-300 focus-within:border-neutral-500 focus-within:ring-1 focus-within:ring-neutral-500 transition duration-300 ease-in-out">
          <input type="text" id="Username" className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full" placeholder="Email address" />
          <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-zinc-800 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs duration-200 ease-in-out"> Email address </span>
        </label>
      </div>
    </div>
  )
}

export default Inputs06
