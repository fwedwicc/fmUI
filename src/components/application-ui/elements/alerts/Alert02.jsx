import React from 'react';

export const codeSnippet = `
`;

const Alert02 = () => {
  return (
    <div className='gap-3 flex justify-center items-center flex-wrap p-6'>
      <div className='flex flex-col items-start gap-3'>
        {/* Default Alert */}
        <div className="flex items-center px-2.5 py-2.5 text-sm text-zinc-800 rounded-lg bg-neutral-100 border border-neutral-200" role="alert">
          <svg className="flex-shrink-0 inline w-4 h-4 me-3 mx-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <div className='me-3'>
            <span className="font-medium">Default alert!</span> Some alert message goes here.
          </div>
          <button className='w-8 h-8 flex justify-center items-center transition duration-300 ease-in-out hover:bg-neutral-200/40 rounded-md focus:ring-2 focus:ring-neutral-200'>
            <svg className='w-4 h-auto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        {/* Success Alert */}
        <div className="flex items-center px-2.5 py-2.5 text-sm text-green-800 rounded-lg bg-green-50 border border-green-200" role="alert">
          <svg className="flex-shrink-0 inline w-4 h-4 me-3 mx-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <div className='me-3'>
            <span className="font-medium">Success alert!</span> Some alert message goes here.
          </div>
          <button className='w-8 h-8 flex justify-center items-center transition duration-300 ease-in-out hover:bg-green-200/40 rounded-md focus:ring-2 focus:ring-green-200'>
            <svg className='w-4 h-auto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        {/* Info Alert */}
        <div className="flex items-center px-2.5 py-2.5 text-sm text-blue-800 rounded-lg bg-blue-50 border border-blue-200" role="alert">
          <svg className="flex-shrink-0 inline w-4 h-4 me-3 mx-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <div className='me-3'>
            <span className="font-medium">Info alert!</span> Some alert message goes here.
          </div>
          <button className='w-8 h-8 flex justify-center items-center transition duration-300 ease-in-out hover:bg-blue-200/40 rounded-md focus:ring-2 focus:ring-blue-200'>
            <svg className='w-4 h-auto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        {/* Warning Alert */}
        <div className="flex items-center px-2.5 py-2.5 text-sm text-yellow-800 rounded-lg bg-yellow-50 border border-yellow-200" role="alert">
          <svg className="flex-shrink-0 inline w-4 h-4 me-3 mx-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <div className='me-3'>
            <span className="font-medium">Warning alert!</span> Some alert message goes here.
          </div>
          <button className='w-8 h-8 flex justify-center items-center transition duration-300 ease-in-out hover:bg-yellow-200/40 rounded-md focus:ring-2 focus:ring-yellow-200'>
            <svg className='w-4 h-auto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        {/* Danger Alert */}
        <div className="flex items-center px-2.5 py-2.5 text-sm text-red-800 rounded-lg bg-red-50 border border-red-200" role="alert">
          <svg className="flex-shrink-0 inline w-4 h-4 me-3 mx-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <div className='me-3'>
            <span className="font-medium">Danger alert!</span> Some alert message goes here.
          </div>
          <button className='w-8 h-8 flex justify-center items-center transition duration-300 ease-in-out hover:bg-red-200/40 rounded-md focus:ring-2 focus:ring-red-200'>
            <svg className='w-4 h-auto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alert02;
