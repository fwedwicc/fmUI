import React from 'react';
import { Tilt } from '@jdion/tilt-react';
import { FaApplePay, FaGooglePay } from "react-icons/fa";
import { RiVisaLine, RiMastercardFill } from "react-icons/ri";
import { fmUILogo } from '../assets'

const SampleFooter = () => {

  return (
    <Tilt
      className="Tilt"
      options={{ max: 8, scale: 1.02, speed: 400 }}
      style={{ height: '100%', width: '100%' }}
    >
      <div className='rounded-md border w-full h-full border-neutral-400/30 shadow-xl flex flex-col justify-between py-5 px-16'>
        <div className='border h-full'>
          <div className='grid grid-cols-4'>
            <div>
              <ul className='text-sm space-y-1.5'>
                <li className='text-base font-semibold'>Product</li>
                <li>Pricing</li>
                <li>Case Studies</li>
                <li>Features</li>
                <li>Reviews</li>
                <li>Updates</li>
              </ul>
            </div>
            <div>
              <ul className='text-sm space-y-1.5'>
                <li className='text-base font-semibold'>Product</li>
                <li>About</li>
                <li>Careers</li>
                <li>News</li>
                <li>Blog</li>
                <li>Concat</li>
              </ul>
            </div>
            <div>
              <ul className='text-sm space-y-1.5'>
                <li className='text-base font-semibold'>Product</li>
                <li>Help Center</li>
                <li>Status</li>
                <li>Report a Bug</li>
                <li>Chat Support</li>
              </ul>
            </div>
            <div>
              <h2 className='font-semibold text-[1.1rem]'>Follow Us</h2>

            </div>
          </div>
        </div>
        <div className='h-full flex justify-between items-end'>
          <img src={fmUILogo} alt="fmUI Logo" className='w-16 h-auto' />
          <span className='text-sm'>©2024 fmUI | All rights reserved</span>
          <div className='flex gap-1'>
            <FaApplePay className='w-auto h-9 border px-2.5 rounded-md' />
            <FaGooglePay className='w-auto h-9 border px-2.5 rounded-md' />
            <RiVisaLine className='w-auto h-9 border px-2.5 rounded-md' />
            <RiMastercardFill className='w-auto h-9 border px-2.5 rounded-md' />
          </div>
        </div>
      </div>
    </Tilt>
  )
}

export default SampleFooter
