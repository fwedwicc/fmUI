import React from 'react'

export const codeSnippet = `<ul class="flex flex-wrap text-center text-sm font-medium text-neutral-600">
  <li class="me-2">
    <a href="#" class="inline-block rounded-lg bg-neutral-100 px-4 py-2.5 font-semibold text-neutral-900 transition duration-300 ease-in-out">Home</a>
  </li>
  <li class="me-2">
    <a href="#" class="inline-block rounded-lg px-4 py-2.5 transition duration-300 ease-in-out hover:bg-gray-50">Dashboard</a>
  </li>
  <li class="me-2">
    <a href="#" class="inline-block rounded-lg px-4 py-2.5 transition duration-300 ease-in-out hover:bg-gray-50">Settings</a>
  </li>
  <li class="me-2">
    <a href="#" class="inline-block rounded-lg px-4 py-2.5 transition duration-300 ease-in-out hover:bg-gray-50">Contacts</a>
  </li>
</ul>
`;

const Tabs03 = () => {
  return (
    <div className='gap-3 flex justify-center items-center flex-wrap p-6'>
      <ul className="flex flex-wrap text-sm font-medium text-center text-neutral-600">
        <li className="me-2">
          <a href="#" className="inline-block px-4 py-2.5 text-neutral-900 font-semibold bg-neutral-100 rounded-lg transition duration-300 ease-in-out">Home</a>
        </li>
        <li className="me-2">
          <a href="#" className="inline-block px-4 py-2.5 rounded-lg hover:bg-gray-50 transition duration-300 ease-in-out">Dashboard</a>
        </li>
        <li className="me-2">
          <a href="#" className="inline-block px-4 py-2.5 rounded-lg hover:bg-gray-50 transition duration-300 ease-in-out">Settings</a>
        </li>
        <li className="me-2">
          <a href="#" className="inline-block px-4 py-2.5 rounded-lg hover:bg-gray-50 transition duration-300 ease-in-out">Contacts</a>
        </li>
      </ul>
    </div>
  )
}

export default Tabs03
