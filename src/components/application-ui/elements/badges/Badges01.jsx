import React from 'react';

export const codeSnippet = `<!-- Base -->
<span class="inline-flex items-center rounded-md border border-neutral-300 bg-neutral-100 px-3 py-1.5 text-sm text-zinc-800">Base</span>
<!-- Green -->
<span class="inline-flex items-center rounded-md border border-green-300 bg-green-100 px-4 py-1.5 text-sm text-green-800">Green</span>
<!-- Blue -->
<span class="inline-flex items-center rounded-md border border-blue-300 bg-blue-100 px-4 py-1.5 text-sm text-blue-800">Blue</span>
<!-- Yellow -->
<span class="inline-flex items-center rounded-md border border-yellow-300 bg-yellow-100 px-4 py-1.5 text-sm text-yellow-800">Yellow</span>
<!-- Red -->
<span class="inline-flex items-center rounded-md border border-red-300 bg-red-100 px-4 py-1.5 text-sm text-red-800">Red</span>
<!-- Purple -->
<span class="inline-flex items-center rounded-md border border-purple-300 bg-purple-100 px-4 py-1.5 text-sm text-purple-800">Purple</span>
`;

const Badges01 = () => {
  return (
    <div className='gap-3 flex justify-center items-center flex-wrap p-6'>
      {/* Base */}
      <span className="inline-flex items-center rounded-md px-3 py-1.5 border border-neutral-300 bg-neutral-100  text-sm text-zinc-800">Base</span>
      {/* Green */}
      <span className="inline-flex items-center rounded-md px-4 py-1.5 border border-green-300 bg-green-100 text-sm text-green-800">Green</span>
      {/* Blue */}
      <span className="inline-flex items-center rounded-md px-4 py-1.5 border border-blue-300 bg-blue-100 text-sm text-blue-800">Blue</span>
      {/* Yellow */}
      <span className="inline-flex items-center rounded-md px-4 py-1.5 border border-yellow-300 bg-yellow-100 text-sm text-yellow-800">Yellow</span>
      {/* Red */}
      <span className="inline-flex items-center rounded-md px-4 py-1.5 border border-red-300 bg-red-100  text-sm text-red-800">Red</span>
      {/* Purple */}
      <span className="inline-flex items-center rounded-md px-4 py-1.5 border border-purple-300 bg-purple-100 text-sm text-purple-800">Purple</span>
    </div>
  );
};

export default Badges01;
