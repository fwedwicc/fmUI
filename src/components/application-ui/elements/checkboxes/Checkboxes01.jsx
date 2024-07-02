import React from 'react'

export const codeSnippet = `<!-- This component requires the Tailwind CSS Forms plugin to properly style form elements like checkboxes, radio buttons, and input fields. 
To use this plugin, install it via npm by running 'npm install @tailwindcss/forms'. 
Then, include the plugin in your Tailwind CSS configuration file (tailwind.config.js) by adding 'require('@tailwindcss/forms')' to the plugins array. -->

<!-- Default State -->
<div class="flex items-center">
  <input id="default-state" type="checkbox" class="size-4 cursor-pointer rounded border border-neutral-200 text-neutral-700 transition duration-300 ease-in-out focus:ring-2 focus:ring-neutral-700" />
  <label for="default-state" class="ms-3 text-sm font-medium text-neutral-900">Default state</label>
</div>
<!-- Checked State -->
<div class="flex items-center">
  <input id="checked-state" type="checkbox" class="size-4 cursor-pointer rounded border border-neutral-200 text-neutral-700 transition duration-300 ease-in-out focus:ring-2 focus:ring-neutral-700" checked />
  <label for="checked-state" class="ms-3 text-sm font-medium text-neutral-900">Checked state</label>
</div>
<!-- Disabled Default State -->
<div class='flex items-center'>
  <input disabled id='disabled-default-state' type="checkbox" class="size-4 rounded border border-neutral-200 focus:ring-neutral-700 focus:ring-2 text-neutral-500 cursor-pointer transition duration-300 ease-in-out" />
  <label for="disabled-default-state" class="ms-3 text-sm font-medium text-neutral-500">Disabled default state</label>
</div>
<!-- Disabled Checked State -->
<div class='flex items-center'>
  <input disabled id='disabled-checked-state' type="checkbox" class="size-4 rounded border border-neutral-200 focus:ring-neutral-700 focus:ring-2 text-neutral-500 cursor-pointer transition duration-300 ease-in-out" checked />
  <label for="disabled-checked-state" class="ms-3 text-sm font-medium text-neutral-500">Disabled checked state</label>
</div>
`;

const Checkboxes01 = () => {
  return (
    <div className='gap-3 flex justify-center items-center flex-wrap p-6'>
      {/* Default State */}
      <div className='flex items-center'>
        <input id='default-state' type="checkbox" className="size-4 rounded border border-neutral-200 focus:ring-neutral-700 focus:ring-2 text-neutral-700 cursor-pointer transition duration-300 ease-in-out" />
        <label htmlFor="default-state" className="ms-3 text-sm font-medium text-neutral-900">Default state</label>
      </div>
      {/* Checked State */}
      <div className='flex items-center'>
        <input id='checked-state' type="checkbox" className="size-4 rounded border border-neutral-200 focus:ring-neutral-700 focus:ring-2 text-neutral-700 cursor-pointer transition duration-300 ease-in-out" checked />
        <label htmlFor="checked-state" className="ms-3 text-sm font-medium text-neutral-900">Checked state</label>
      </div>
      {/* Disabled Default State */}
      <div className='flex items-center'>
        <input disabled id='disabled-default-state' type="checkbox" className="size-4 rounded border border-neutral-200 focus:ring-neutral-700 focus:ring-2 text-neutral-500 cursor-pointer transition duration-300 ease-in-out" />
        <label htmlFor="disabled-default-state" className="ms-3 text-sm font-medium text-neutral-500">Disabled default state</label>
      </div>
      {/* Disabled Checked State */}
      <div className='flex items-center'>
        <input disabled id='disabled-checked-state' type="checkbox" className="size-4 rounded border border-neutral-200 focus:ring-neutral-700 focus:ring-2 text-neutral-500 cursor-pointer transition duration-300 ease-in-out" checked />
        <label htmlFor="disabled-checked-state" className="ms-3 text-sm font-medium text-neutral-500">Disabled checked state</label>
      </div>
    </div>
  )
}

export default Checkboxes01
