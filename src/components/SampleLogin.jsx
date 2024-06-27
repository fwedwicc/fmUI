import React from 'react';
import useVanillaTilt from '../hooks/useVanillaTilt';
import { HiEyeOff } from "react-icons/hi";
import { fmUILogo } from '../assets'

const SampleLogin = () => {
  const tiltOptions = {
    max: 7,
    speed: 50,
    glare: true,
    'max-glare': 0.3,
  };
  const cardRef = useVanillaTilt(tiltOptions);

  const InputField = ({ label, type, placeholder }) => (
    <div className="flex flex-col gap-2">
      <span className="text-sm font-medium">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="h-11 rounded-md w-full bg-neutral-100 border border-neutral-200 transition duration-300 ease-in-out focus:ring-1 focus:ring-neutral-500 focus:border-neutral-500 text-sm px-4"
      />
    </div>
  );

  return (
    <form ref={cardRef} className="rounded-md border border-neutral-400/30 shadow-xl w-full h-full p-10 flex flex-col justify-center items-center">
      <div className="w-full space-y-8">
        <div className="flex flex-col items-center gap-5">
          <img src={fmUILogo} alt="fmUI Logo" className="w-16 h-auto" />
          <div className="flex flex-col gap-1 items-center">
            <h1 className="text-[1.6rem] leading-none font-bold">Welcome back!</h1>
            <span className="text-zinc-700 text-sm">Please enter your credentials</span>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <InputField label="Email Address" type="email" placeholder="john@email.com" />
          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium">Password</span>
            <div className="relative w-full">
              <input
                type="password"
                placeholder="•••••••••••"
                className="h-11 pr-10 rounded-md w-full bg-neutral-100 border border-neutral-200 transition duration-300 ease-in-out focus:ring-neutral-500 focus:border-neutral-500 text-sm px-4"
              />
              <button className="absolute top-1/2 right-0 transform -translate-y-1/2 h-full px-2 rounded-full">
                <HiEyeOff className="w-4 h-auto text-neutral-400" />
              </button>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center">
                <input id="remember-checkbox" type="checkbox" className="rounded bg-neutral-100 border border-neutral-200  focus:ring-neutral-700 focus:ring-1 text-neutral-700 cursor-pointer transition duration-300 ease-in-out" />
                <label htmlFor="remember-checkbox" className="ms-2 text-sm font-medium">Remember password</label>
              </div>
              <span className="underline text-sm font-semibold cursor-pointer">Forgot password</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <button className="w-full py-2 text-zinc-100 hover:bg-neutral-900/90 transition duration-300 ease-in-out bg-neutral-700 border border-neutral-900 font-medium rounded-md focus:ring-2 focus:ring-neutral-400">
            Sign in
          </button>
          <span className="text-sm text-center">Don't have an account? <span className="ml-1 underline font-semibold cursor-pointer">Request a free trial</span></span>
        </div>
      </div>
    </form>
  );
};

export default SampleLogin
