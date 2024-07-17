import React from 'react'

export const codeSnippet = `<!-- This component requires the Tailwind CSS Forms plugin to properly style form elements like checkboxes, radio buttons, and input fields. 
To use this plugin, install it via npm by running 'npm install @tailwindcss/forms'. 
Then, include the plugin in your Tailwind CSS configuration file (tailwind.config.js) by adding 'require('@tailwindcss/forms')' to the plugins array. -->

<div class="flex flex-wrap gap-3">
  <label for="option-1" class="inline-flex cursor-pointer flex-col items-start gap-4 rounded-lg border border-neutral-200 p-4 transition hover:bg-neutral-50 has-[:checked]:bg-neutral-100">
    <div class="flex items-center gap-3">
      <input id="option-1" type="radio" name="language" class="h-4 w-4 cursor-pointer border border-neutral-200 text-neutral-700 transition duration-300 ease-in-out focus:ring-2 focus:ring-neutral-700" />
      <span class="font-medium">HTML</span>
    </div>
    <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </label>
  <label for="option-2" class="inline-flex cursor-pointer flex-col items-start gap-4 rounded-lg border border-neutral-200 p-4 transition hover:bg-neutral-50 has-[:checked]:bg-neutral-100">
    <div class="flex items-center gap-3">
      <input id="option-2" type="radio" name="language" class="h-4 w-4 cursor-pointer border border-neutral-200 text-neutral-700 transition duration-300 ease-in-out focus:ring-2 focus:ring-neutral-700" />
      <span class="font-medium">CSS</span>
    </div>
    <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </label>
  <label for="option-3" class="inline-flex cursor-pointer flex-col items-start gap-4 rounded-lg border border-neutral-200 p-4 transition hover:bg-neutral-50 has-[:checked]:bg-neutral-100">
    <div class="flex items-center gap-3">
      <input id="option-3" type="radio" name="language" class="h-4 w-4 cursor-pointer border border-neutral-200 text-neutral-700 transition duration-300 ease-in-out focus:ring-2 focus:ring-neutral-700" />
      <span class="font-medium">JavaScript</span>
    </div>
    <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </label>
</div>
`;

const Radios04 = () => {
  return (
    <div className='gap-3 flex justify-center items-center flex-wrap p-6'>
      <label htmlFor="option-1" className="inline-flex flex-col cursor-pointer items-start gap-4 rounded-lg border border-neutral-200 p-4 transition hover:bg-neutral-50 has-[:checked]:bg-neutral-100">
        <div className="flex items-center gap-3">
          <input id='option-1' type="radio" name='language' className="w-4 h-4 text-neutral-700 border border-neutral-200 focus:ring-neutral-700 focus:ring-2 cursor-pointer transition duration-300 ease-in-out" />
          <span className='font-medium'>HTML</span>
        </div>
        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </label>
      <label htmlFor="option-2" className="inline-flex flex-col cursor-pointer items-start gap-4 rounded-lg border border-neutral-200 p-4 transition hover:bg-neutral-50 has-[:checked]:bg-neutral-100">
        <div className="flex items-center gap-3">
          <input id='option-2' type="radio" name='language' className="w-4 h-4 text-neutral-700 border border-neutral-200 focus:ring-neutral-700 focus:ring-2 cursor-pointer transition duration-300 ease-in-out" />
          <span className='font-medium'>CSS</span>
        </div>
        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </label>
      <label htmlFor="option-3" className="inline-flex flex-col cursor-pointer items-start gap-4 rounded-lg border border-neutral-200 p-4 transition hover:bg-neutral-50 has-[:checked]:bg-neutral-100">
        <div className="flex items-center gap-3">
          <input id='option-3' type="radio" name='language' className="w-4 h-4 text-neutral-700 border border-neutral-200 focus:ring-neutral-700 focus:ring-2 cursor-pointer transition duration-300 ease-in-out" />
          <span className='font-medium'>JavaScript</span>
        </div>
        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </label>
    </div>
  )
}

export default Radios04
