import React from 'react'

export const codeSnippet = `<!-- Orange to Red -->
<button class="group inline-block rounded-md bg-gradient-to-r from-orange-400 to-red-500 p-[2px] transition-colors duration-[5ms] ease-in-out hover:text-white">
  <span class="block rounded bg-white px-4 py-2.5 transition-colors duration-300 ease-in-out group-hover:bg-transparent group-hover:font-semibold"> Orange to red </span>
</button>
<!-- Green to Sky -->
<button class="group inline-block rounded-md bg-gradient-to-r from-green-400 to-sky-500 p-[2px] transition-colors duration-[5ms] ease-in-out hover:text-white">
  <span class="block rounded bg-white px-4 py-2.5 transition-colors duration-300 ease-in-out group-hover:bg-transparent group-hover:font-semibold"> Green to sky </span>
</button>
<!-- Indigo to Purple -->
<button class="group inline-block rounded-md bg-gradient-to-r from-indigo-400 to-purple-500 p-[2px] transition-colors duration-[5ms] ease-in-out hover:text-white">
  <span class="block rounded bg-white px-4 py-2.5 transition-colors duration-300 ease-in-out group-hover:bg-transparent group-hover:font-semibold"> Indigo to purple </span>
</button>
<!-- Rose to Pink -->
<button class="group inline-block rounded-md bg-gradient-to-r from-pink-400 to-rose-500 p-[2px] transition-colors duration-[5ms] ease-in-out hover:text-white">
  <span class="block rounded bg-white px-4 py-2.5 transition-colors duration-300 ease-in-out group-hover:bg-transparent group-hover:font-semibold"> Rose to pink </span>
</button>
`;

const Buttons09 = () => {
  return (
    <div className='gap-3 flex justify-center items-center flex-wrap p-6'>
      {/* Orange to Red */}
      <button className="group inline-block rounded-md bg-gradient-to-r from-orange-400 to-red-500 p-[2px] transition-colors duration-[5ms] ease-in-out hover:text-white">
        <span className="block rounded bg-white px-4 py-2.5 group-hover:font-semibold transition-colors duration-300 ease-in-out group-hover:bg-transparent">
          Orange to red
        </span>
      </button>
      {/* Green to sky */}
      <button className="group inline-block rounded-md bg-gradient-to-r from-green-400 to-sky-500 p-[2px] transition-colors duration-[5ms] ease-in-out hover:text-white">
        <span className="block rounded bg-white px-4 py-2.5 group-hover:font-semibold transition-colors duration-300 ease-in-out group-hover:bg-transparent">
          Green to sky
        </span>
      </button>
      {/* Indigo to Purple */}
      <button className="group inline-block rounded-md bg-gradient-to-r from-indigo-400 to-purple-500 p-[2px] transition-colors duration-[5ms] ease-in-out hover:text-white">
        <span className="block rounded bg-white px-4 py-2.5 group-hover:font-semibold transition-colors duration-300 ease-in-out group-hover:bg-transparent">
          Indigo to purple
        </span>
      </button>
      {/* Rose to Pink */}
      <button className="group inline-block rounded-md bg-gradient-to-r from-pink-400 to-rose-500 p-[2px] transition-colors duration-[5ms] ease-in-out hover:text-white">
        <span className="block rounded bg-white px-4 py-2.5 group-hover:font-semibold transition-colors duration-300 ease-in-out group-hover:bg-transparent">
          Rose to pink
        </span>
      </button>
    </div>
  )
}

export default Buttons09
