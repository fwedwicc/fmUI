import React from 'react';

export const codeSnippet = `<div class="flex -space-x-3">
  <img class="h-10 w-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Sample Avatar Profile" />
  <img class="h-10 w-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Sample Avatar Profile" />
  <img class="h-10 w-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Sample Avatar Profile" />
  <img class="h-10 w-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Sample Avatar Profile" />
  <span class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-neutral-700 text-xs font-medium text-white">+99</span>
</div>
`;

const Avatar05 = () => {
  return (
    <div className='gap-3 flex justify-center items-center flex-wrap p-6'>
      <div className="flex -space-x-3">
        <img className="w-10 h-10 border-2 border-white rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Sample Avatar Profile" />
        <img className="w-10 h-10 border-2 border-white rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Sample Avatar Profile" />
        <img className="w-10 h-10 border-2 border-white rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Sample Avatar Profile" />
        <img className="w-10 h-10 border-2 border-white rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Sample Avatar Profile" />
        <span className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-neutral-700 border-2 border-white rounded-full">+99</span>
      </div>
    </div>
  );
};

export default Avatar05;
