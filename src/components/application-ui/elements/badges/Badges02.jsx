import React from 'react'

export const codeSnippet = `222222<span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Badge</span>
<span class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">Badge</span>
`;

const Badges02 = () => {
  return (
    <div className='space-x-2'>
      <span className="inline-flex items-center rounded-md bg-gray-50 px-4 py-2.5 text-sm font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Badge</span>
      <span className="inline-flex items-center rounded-md bg-red-50 px-4 py-2.5 text-sm font-medium text-red-700 ring-1 ring-inset ring-red-600/10">Badge</span>
    </div>
  )
}

export default Badges02
