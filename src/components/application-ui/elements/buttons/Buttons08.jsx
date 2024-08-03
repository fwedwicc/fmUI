import React from 'react'

export const codeSnippet = `<!-- Info -->
<button class="rounded-md border border-blue-600 bg-blue-500 px-4 py-2.5 font-medium text-sm text-white transition duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">Info</button>
<!-- Success -->
<button class="rounded-md border border-green-600 bg-green-500 px-4 py-2.5 font-medium text-sm text-white transition duration-300 ease-in-out hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400">Success</button>
<!-- Warning -->
<button class="rounded-md border border-yellow-600 bg-yellow-500 px-4 py-2.5 font-medium text-sm text-white transition duration-300 ease-in-out hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400">Warning</button>
<!-- Danger -->
<button class="rounded-md border border-red-600 bg-red-500 px-4 py-2.5 font-medium text-sm text-white transition duration-300 ease-in-out hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400">Danger</button>
`;

const Buttons08 = () => {
  return (
    <div className='gap-3 flex justify-center items-center flex-wrap p-6'>
      {/* Info */}
      <button className='px-4 py-2.5 text-sm text-white hover:bg-blue-600 transition duration-300 ease-in-out bg-blue-500 border border-blue-600 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'>Info</button>
      {/* Success */}
      <button className='px-4 py-2.5 transition duration-300 ease-in-out text-sm text-white bg-green-500 border border-green-600 hover:bg-green-600 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-green-400'>Success</button>
      {/* Warning */}
      <button className='px-4 py-2.5 transition duration-300 ease-in-out text-sm text-white bg-yellow-500 border border-yellow-600 hover:bg-yellow-600 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400'>Warning</button>
      {/* Danger */}
      <button className='px-4 py-2.5 transition duration-300 ease-in-out text-sm text-white bg-red-500 border border-red-600 hover:bg-red-600 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-red-400'>Danger</button>
    </div>
  )
}

export default Buttons08
