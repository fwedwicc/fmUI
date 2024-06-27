import React from 'react';
import useVanillaTilt from '../hooks/useVanillaTilt';
import { IoIosClose } from "react-icons/io";
import { TbTransferVertical } from "react-icons/tb";
import { HiThumbUp, HiCamera, HiMicrophone, HiPhotograph, HiPlusCircle, HiEmojiHappy, HiArrowSmLeft, HiVideoCamera, HiPhone, HiInformationCircle, HiEyeOff, HiTrash } from "react-icons/hi";
import { FaApplePay, FaGooglePay } from "react-icons/fa";
import { RiVisaLine, RiMastercardFill } from "react-icons/ri";
import { fmUILogo } from '../assets'

const SampleModal = () => {
  const tiltOptions = {
    max: 10,
    speed: 50,
    glare: true,
    "max-glare": 0.3,
  };
  const cardRef = useVanillaTilt(tiltOptions);

  return (
    <div ref={cardRef} className='rounded-md border border-neutral-400/30 shadow-xl w-full h-full flex flex-col justify-between p-7'>
      <div className='flex justify-between items-center'>
        <div className='flex gap-3'>
          <TbTransferVertical className='w-7 h-auto' />
          <h2 className='font-medium text-[1.3rem]'>Transfer Ownership</h2>
        </div>
        <button className='w-[2.5rem] h-[2.5rem] flex justify-center items-center transition duration-300 ease-in-out hover:bg-neutral-200/40 rounded-md focus:ring-2 focus:ring-neutral-200'>
          <IoIosClose className='w-6 h-auto' />
        </button>
      </div>
      <div className='gap-4 flex flex-col flex-1 justify-center'>
        <span>Are you sure you want to transfer the ownership of this organization to asdf? asdfasdf will become the bla bla?</span>
      </div>
      <div className='flex gap-3 justify-end'>
        <button className='px-4 py-2.5 transition duration-300 ease-in-out text-zinc-600 bg-neutral-200 border border-neutral-300 hover:bg-neutral-400/40 font-medium rounded-md focus:border-none focus:ring-2 focus:ring-neutral-400/70'>Cancel</button>
        <button className='px-4 py-2.5 text-zinc-100 hover:bg-neutral-900/90 transition duration-300 ease-in-out bg-neutral-700 border border-neutral-900 font-medium rounded-md focus:border-none focus:ring-2 focus:ring-neutral-400'>Transfer</button>
      </div>
    </div>
  )
}

export default SampleModal
