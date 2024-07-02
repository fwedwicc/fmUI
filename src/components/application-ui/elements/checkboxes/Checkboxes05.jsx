import React from 'react'

export const codeSnippet = `<!-- This component requires the Tailwind CSS Forms plugin to properly style form elements like checkboxes, radio buttons, and input fields. 
To use this plugin, install it via npm by running 'npm install @tailwindcss/forms'. 
Then, include the plugin in your Tailwind CSS configuration file (tailwind.config.js) by adding 'require('@tailwindcss/forms')' to the plugins array. -->

<div class="inline-flex">
  <input id="heart" type="checkbox" class="peer hidden" />
  <label for="heart" class="flex w-full cursor-pointer items-center justify-between rounded-lg border bg-white p-5 text-zinc-700 hover:bg-neutral-50 peer-checked:border-neutral-600 peer-checked:bg-neutral-100">
    <div class="block space-y-2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8">
        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
      </svg>
      <span class="block w-full text-lg font-semibold">Heart</span>
      <span class="block w-full text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
    </div>
  </label>
</div>
<div class="inline-flex">
  <input id="like" type="checkbox" class="peer hidden" />
  <label for="like" class="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border bg-white p-5 text-zinc-700 hover:bg-neutral-50 peer-checked:border-neutral-600 peer-checked:bg-neutral-100">
    <div class="block space-y-2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8">
        <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
      </svg>
      <span class="block w-full text-lg font-semibold">Like</span>
      <span class="block w-full text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
    </div>
  </label>
</div>
<div class="inline-flex">
  <input id="share" type="checkbox" class="peer hidden" />
  <label for="share" class="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border bg-white p-5 text-zinc-700 hover:bg-neutral-50 peer-checked:border-neutral-600 peer-checked:bg-neutral-100">
    <div class="block space-y-2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8">
        <path fill-rule="evenodd" d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z" clip-rule="evenodd" />
      </svg>
      <span class="block w-full text-lg font-semibold">Share</span>
      <span class="block w-full text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
    </div>
  </label>
</div>
`;

const Checkboxes05 = () => {
  return (
    <div className='gap-3 flex justify-center items-center flex-wrap p-6'>
      <div className='inline-flex'>
        <input id='heart' type="checkbox" className="hidden peer" />
        <label htmlFor="heart" className="transition duration-300 ease-in-out flex items-center justify-between w-full p-5 text-zinc-700 bg-white border rounded-lg cursor-pointer peer-checked:border-neutral-400 peer-checked:bg-neutral-100 hover:bg-neutral-50">
          <div className="block space-y-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
              <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>
            <span className="block w-full text-lg font-semibold">Heart</span>
            <span className="block w-full text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
          </div>
        </label>
      </div>
      <div className='inline-flex'>
        <input id='like' type="checkbox" className="hidden peer" />
        <label htmlFor="like" className="transition duration-300 ease-in-out flex items-center justify-between w-full p-5 text-zinc-700 bg-white border rounded-lg cursor-pointer peer-checked:border-neutral-400 peer-checked:bg-neutral-100 hover:bg-neutral-50">
          <div className="block space-y-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
              <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
            </svg>
            <span className="block w-full text-lg font-semibold">Like</span>
            <span className="block w-full text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
          </div>
        </label>
      </div>
      <div className='inline-flex'>
        <input id='share' type="checkbox" className="hidden peer" />
        <label htmlFor="share" className="transition duration-300 ease-in-out flex items-center justify-between w-full p-5 text-zinc-700 bg-white border rounded-lg cursor-pointer peer-checked:border-neutral-400 peer-checked:bg-neutral-100 hover:bg-neutral-50">
          <div className="block space-y-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
              <path fillRule="evenodd" d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z" clipRule="evenodd" />
            </svg>
            <span className="block w-full text-lg font-semibold">Share</span>
            <span className="block w-full text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
          </div>
        </label>
      </div>
    </div>
  )
}

export default Checkboxes05
