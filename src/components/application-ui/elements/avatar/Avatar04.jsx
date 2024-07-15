import React from 'react';

export const codeSnippet = `<!-- Circular Avatar with top indicator -->
<div class="relative">
  <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Sample Avatar Profile" />
  <span class="absolute left-7 top-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-500"></span>
</div>
<!-- Circular Avatar with bottom indicator -->
<div class="relative">
  <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Sample Avatar Profile" />
  <span class="absolute bottom-0 left-7 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-500"></span>
</div>
<!-- Rounded Avatar with top indicator -->
<div class="relative">
  <img class="h-10 w-10 rounded" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Sample Avatar Profile" />
  <span class="absolute left-8 top-0 h-3.5 w-3.5 -translate-y-1/2 transform rounded-full border-2 border-white bg-green-500"></span>
</div>
<!-- Rounded Avatar with bottom indicator -->
<div class="relative">
  <img class="h-10 w-10 rounded" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Sample Avatar Profile" />
  <span class="absolute bottom-0 left-8 h-3.5 w-3.5 translate-y-1/4 transform rounded-full border-2 border-white bg-green-500"></span>
</div>
`;

const Avatar04 = () => {
  return (
    <div className='gap-3 flex justify-center items-center flex-wrap p-6'>
      {/* Circular Avatar with top indicator */}
      <div className="relative">
        <img className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Sample Avatar Profile" />
        <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></span>
      </div>
      {/* Circular Avatar with bottom indicator */}
      <div className="relative">
        <img className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Sample Avatar Profile" />
        <span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></span>
      </div>
      {/* Rounded Avatar with top indicator */}
      <div className="relative">
        <img className="w-10 h-10 rounded" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Sample Avatar Profile" />
        <span className="absolute top-0 left-8 transform -translate-y-1/2 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></span>
      </div>
      {/* Rounded Avatar with bottom indicator */}
      <div className="relative">
        <img className="w-10 h-10 rounded" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Sample Avatar Profile" />
        <span className="absolute bottom-0 left-8 transform translate-y-1/4 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></span>
      </div>
    </div>
  );
};

export default Avatar04;
