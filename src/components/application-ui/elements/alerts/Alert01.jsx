import React from 'react';

export const codeSnippet = `<!-- Default Alert -->
<div class="inline-flex rounded-lg border border-neutral-200 bg-neutral-100 p-4 text-sm text-zinc-800" role="alert">
  <svg class="me-3 inline h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
  </svg>
  <div><span class="font-medium">Default alert!</span> Some alert message goes here.</div>
</div>
<!-- Success Alert -->
<div class="inline-flex rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-800" role="alert">
  <svg class="me-3 inline h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
  </svg>
  <div><span class="font-medium">Success alert!</span> Some alert message goes here.</div>
</div>
<!-- Info Alert -->
<div class="inline-flex rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm text-blue-800" role="alert">
  <svg class="me-3 inline h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
  </svg>
  <div><span class="font-medium">Info alert!</span> Some alert message goes here.</div>
</div>
<!-- Warning Alert -->
<div class="inline-flex rounded-lg border border-yellow-200 bg-yellow-50 p-4 text-sm text-yellow-800" role="alert">
  <svg class="me-3 inline h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
  </svg>
  <div><span class="font-medium">Warning alert!</span> Some alert message goes here.</div>
</div>
<!-- Danger Alert -->
<div class="inline-flex rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800" role="alert">
  <svg class="me-3 inline h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clip-rule="evenodd" />
  </svg>
  <div><span class="font-medium">Danger alert!</span> Some alert message goes here.</div>
</div>
`;

const Alert01 = () => {
  return (
    <div className='gap-3 flex justify-center items-center flex-wrap p-6'>
      <div className='flex flex-col items-start gap-3'>
        {/* Default Alert */}
        <div className="inline-flex p-4 text-sm text-zinc-800 rounded-lg bg-neutral-100 border border-neutral-200" role="alert">
          <svg className="flex-shrink-0 inline w-5 h-5 me-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
          </svg>
          <div>
            <span className="font-medium">Default alert!</span> Some alert message goes here.
          </div>
        </div>
        {/* Success Alert */}
        <div className="inline-flex p-4 text-sm text-green-800 rounded-lg bg-green-50 border border-green-200" role="alert">
          <svg className="flex-shrink-0 inline w-5 h-5 me-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
          </svg>
          <div>
            <span className="font-medium">Success alert!</span> Some alert message goes here.
          </div>
        </div>
        {/* Info Alert */}
        <div className="inline-flex p-4 text-sm text-blue-800 rounded-lg bg-blue-50 border border-blue-200" role="alert">
          <svg className="flex-shrink-0 inline w-5 h-5 me-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
          </svg>
          <div>
            <span className="font-medium">Info alert!</span> Some alert message goes here.
          </div>
        </div>
        {/* Warning Alert */}
        <div className="inline-flex p-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 border border-yellow-200" role="alert">
          <svg className="flex-shrink-0 inline w-5 h-5 me-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
          </svg>
          <div>
            <span className="font-medium">Warning alert!</span> Some alert message goes here.
          </div>
        </div>
        {/* Danger Alert */}
        <div className="inline-flex p-4 text-sm text-red-800 rounded-lg bg-red-50 border border-red-200" role="alert">
          <svg className="flex-shrink-0 inline w-5 h-5 me-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
          </svg>
          <div>
            <span className="font-medium">Danger alert!</span> Some alert message goes here.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert01;
