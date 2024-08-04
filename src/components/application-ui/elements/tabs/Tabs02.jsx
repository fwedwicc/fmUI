import React from 'react'

export const codeSnippet = `<div class="border-b border-neutral-200 text-center text-sm font-medium text-neutral-600">
  <ul class="-mb-px flex flex-wrap">
    <li class="me-2">
      <a href="#" class="inline-block rounded-t-lg border-b border-neutral-900 px-4 py-2.5 text-neutral-900 transition duration-300 ease-in-out">Home</a>
    </li>
    <li class="me-2">
      <a href="#" class="inline-block rounded-t-lg border-b border-transparent px-4 py-2.5 transition duration-300 ease-in-out hover:border-neutral-300 hover:text-neutral-700">Profile</a>
    </li>
    <li class="me-2">
      <a href="#" class="inline-block rounded-t-lg border-b border-transparent px-4 py-2.5 transition duration-300 ease-in-out hover:border-neutral-300 hover:text-neutral-700">Settings</a>
    </li>
    <li>
      <a href="#" class="inline-block rounded-t-lg border-b border-transparent px-4 py-2.5 transition duration-300 ease-in-out hover:border-neutral-300 hover:text-neutral-700">Contacts</a>
    </li>
  </ul>
</div>
`;

const Tabs02 = () => {
  return (
    <div className='gap-3 flex justify-center items-center flex-wrap p-6'>
      <div className="text-sm font-medium text-center text-neutral-600 border-b border-neutral-200">
        <ul className="flex flex-wrap -mb-px">
          <li className="me-2">
            <a href="#" className="inline-block px-4 py-2.5 text-neutral-900 border-b border-neutral-900 rounded-t-lg transition duration-300 ease-in-out">Home</a>
          </li>
          <li className="me-2">
            <a href="#" className="inline-block px-4 py-2.5 border-b border-transparent rounded-t-lg hover:text-neutral-700 hover:border-neutral-300 transition duration-300 ease-in-out">Dashboard</a>
          </li>
          <li className="me-2">
            <a href="#" className="inline-block px-4 py-2.5 border-b border-transparent rounded-t-lg hover:text-neutral-700 hover:border-neutral-300 transition duration-300 ease-in-out">Settings</a>
          </li>
          <li>
            <a href="#" className="inline-block px-4 py-2.5 border-b border-transparent rounded-t-lg hover:text-neutral-700 hover:border-neutral-300 transition duration-300 ease-in-out">Contacts</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Tabs02
