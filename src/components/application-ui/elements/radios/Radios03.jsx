import React from 'react'

export const codeSnippet = `<!-- This component requires the Tailwind CSS Forms plugin to properly style form elements like checkboxes, radio buttons, and input fields. 
To use this plugin, install it via npm by running 'npm install @tailwindcss/forms'. 
Then, include the plugin in your Tailwind CSS configuration file (tailwind.config.js) by adding 'require('@tailwindcss/forms')' to the plugins array. -->

<div class="flex flex-col items-start gap-3">
  <div class="flex items-center">
    <input id="radio-1" name="size" type="radio" class="w-4 h-4 text-neutral-700 border border-neutral-200 focus:ring-neutral-700 focus:ring-2 cursor-pointer transition duration-300 ease-in-out" />
    <label for="radio-1" class="ms-3 text-sm font-medium text-neutral-900">Small</label>
  </div>
  <div class="flex items-center">
    <input id="radio-2" name="size" type="radio" class="w-4 h-4 text-neutral-700 border border-neutral-200 focus:ring-neutral-700 focus:ring-2 cursor-pointer transition duration-300 ease-in-out" />
    <label for="radio-2" class="ms-3 text-sm font-medium text-neutral-900">Medium</label>
  </div>
  <div class="flex items-center">
    <input id="radio-3" name="size" type="radio" class="w-4 h-4 text-neutral-700 border border-neutral-200 focus:ring-neutral-700 focus:ring-2 cursor-pointer transition duration-300 ease-in-out" />
    <label for="radio-3" class="ms-3 text-sm font-medium text-neutral-900">Large</label>
  </div>
</div>
`;

const Radios03 = () => {
  return (
    <div className='gap-3 flex justify-center items-center flex-wrap p-6'>
      <div className='flex flex-col items-start gap-3'>
        <div className='flex items-center'>
          <input id='radio-1' name='size' type="radio" className="w-4 h-4 text-neutral-700 border border-neutral-200 focus:ring-neutral-700 focus:ring-2 cursor-pointer transition duration-300 ease-in-out" />
          <label htmlFor="radio-1" className="ms-3 text-sm font-medium text-neutral-900">Small</label>
        </div>
        <div className='flex items-center'>
          <input id='radio-2' name='size' type="radio" className="w-4 h-4 text-neutral-700 border border-neutral-200 focus:ring-neutral-700 focus:ring-2 cursor-pointer transition duration-300 ease-in-out" />
          <label htmlFor="radio-2" className="ms-3 text-sm font-medium text-neutral-900">Medium</label>
        </div>
        <div className='flex items-center'>
          <input id='radio-3' name='size' type="radio" className="w-4 h-4 text-neutral-700 border border-neutral-200 focus:ring-neutral-700 focus:ring-2 cursor-pointer transition duration-300 ease-in-out" />
          <label htmlFor="radio-3" className="ms-3 text-sm font-medium text-neutral-900">Large</label>
        </div>
      </div>
    </div>
  )
}

export default Radios03
