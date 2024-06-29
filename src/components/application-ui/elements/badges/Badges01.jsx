import React from 'react';

export const codeSnippet = `<span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Badge</span>
<span class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">Badge</span>
<span class="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">Badge</span>
<span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Badge</span>
<span class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Badge</span>
<span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">Badge</span>
<span class="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">Badge</span>
<span class="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">Badge</span>
`;

const Badges01 = () => {
  return (
    <div className='gap-2 flex justify-center items-center flex-wrap'>
      {/* Base */}
      <span className="inline-flex items-center rounded-md px-3 py-1.5 border border-neutral-300 bg-neutral-100  text-sm text-zinc-800">Base</span>
      {/* Red */}
      <span className="inline-flex items-center rounded-md px-4 py-1.5 border border-red-300 bg-red-100  text-sm text-red-800">Red</span>

      <span className="inline-flex items-center rounded-md px-4 py-1.5 border border-yellow-300 bg-yellow-100  text-sm text-yellow-800">Badge</span>

      <span className="inline-flex items-center rounded-md bg-green-50 px-4 py-1.5 text-sm font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Badge</span>

      <span className="inline-flex items-center rounded-md bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Badge</span>

      <span className="inline-flex items-center rounded-md bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">Badge</span>

      <span className="inline-flex items-center rounded-md bg-purple-50 px-4 py-1.5 text-sm font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">Badge</span>

      <span className="inline-flex items-center rounded-md bg-pink-50 px-4 py-1.5 text-sm font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">Badge</span>
    </div>
  );
};

export default Badges01;
