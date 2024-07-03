import React from 'react'

export const codeSnippet = `<!-- This component requires the Tailwind CSS Forms plugin to properly style form elements like checkboxes, radio buttons, and input fields. 
To use this plugin, install it via npm by running 'npm install @tailwindcss/forms'. 
Then, include the plugin in your Tailwind CSS configuration file (tailwind.config.js) by adding 'require('@tailwindcss/forms')' to the plugins array. -->

<!-- Small Input Field -->
<div>
  <label for="small-input" class="mb-1.5 block text-sm font-medium text-zinc-800">Small</label>
  <input id="small-input" type="text" class="block w-full rounded-md border border-neutral-200 bg-neutral-100/80 px-2.5 py-1.5 text-xs transition duration-300 ease-in-out focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500" placeholder="Small Input" required />
</div>
<!-- Default Input Field -->
<div>
  <label for="default-input" class="mb-1.5 block text-sm font-medium text-zinc-800">Default</label>
  <input id="default-input" type="text" class="block w-full rounded-md border border-neutral-200 bg-neutral-100/80 px-3 py-2.5 text-sm transition duration-300 ease-in-out focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500" placeholder="Default Input" required />
</div>
<!-- Large Input Field -->
<div>
  <label for="large-input" class="mb-1.5 block text-sm font-medium text-zinc-800">Large</label>
  <input id="large-input" type="text" class="block w-full rounded-md border border-neutral-200 bg-neutral-100/80 px-4 py-3 text-md transition duration-300 ease-in-out focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500" placeholder="Large Input" required />
</div>
`;

const Inputs04 = () => {
  return (
    <div className='gap-3 flex justify-center items-center flex-wrap p-6'>
      <div className='w-full max-w-xs space-y-5'>
        {/* Small Input Field */}
        <div>
          <label htmlFor='small-input' className="block text-sm font-medium text-zinc-800 mb-1.5">Small</label>
          <input id='small-input' type="text" className="block rounded-md w-full bg-neutral-100/80 border border-neutral-200 transition duration-300 ease-in-out focus:ring-1 focus:ring-neutral-500 focus:border-neutral-500 text-xs py-1.5 px-2.5" placeholder="Small Input" required />
        </div>
        {/* Default Input Field */}
        <div>
          <label htmlFor='default-input' className="block text-sm font-medium text-zinc-800 mb-1.5">Default</label>
          <input id='default-input' type="text" className="block rounded-md w-full bg-neutral-100/80 border border-neutral-200 transition duration-300 ease-in-out focus:ring-1 focus:ring-neutral-500 focus:border-neutral-500 text-sm py-2.5 px-3" placeholder="Default Input" required />
        </div>
        {/* Large Input Field */}
        <div>
          <label htmlFor='large-input' className="block text-sm font-medium text-zinc-800 mb-1.5">Large</label>
          <input id='large-input' type="text" className="block rounded-md w-full bg-neutral-100/80 border border-neutral-200 transition duration-300 ease-in-out focus:ring-1 focus:ring-neutral-500 focus:border-neutral-500 text-md py-3 px-4" placeholder="Large Input" required />
        </div>
      </div>
    </div>
  )
}

export default Inputs04
