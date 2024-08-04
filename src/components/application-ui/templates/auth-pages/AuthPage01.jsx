import React from 'react';
import { fmUILogo } from '../../../../assets';

export const codeSnippet = `<!-- This component requires the Tailwind CSS Forms plugin to properly style form elements like checkboxes, radio buttons, and input fields. 
To use this plugin, install it via npm by running 'npm install @tailwindcss/forms'. 
Then, include the plugin in your Tailwind CSS configuration file (tailwind.config.js) by adding 'require('@tailwindcss/forms')' to the plugins array. -->

<section class="flex h-screen items-center justify-center">
  <form class="flex w-full max-w-md flex-col items-center justify-center rounded-lg p-10 shadow-xl">
    <div class="w-full space-y-8">
      <div class="flex flex-col items-center gap-5">
        <img src="https://github.com/fwedwicc/fmUI/blob/main/src/assets/fmUI-logo.png?raw=true" alt="Your Logo" class="h-auto w-16" />
        <div class="flex flex-col items-center gap-1">
          <h1 class="text-[1.6rem] font-bold leading-none text-zinc-700">Welcome back!</h1>
          <span class="text-sm text-zinc-700">Please enter your credentials</span>
        </div>
      </div>
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <span class="text-sm font-medium text-zinc-700">Email Address</span>
          <input type="email" placeholder="john@email.com"
            class="h-10 w-full rounded-md border border-neutral-200 bg-neutral-100 px-4 text-sm transition duration-300 ease-in-out focus:border-neutral-500 focus:ring-neutral-500" />
        </div>
        <div class="flex flex-col gap-2">
          <span class="text-sm font-medium text-zinc-700">Password</span>
          <div class="relative w-full">
            <input type="password" placeholder="•••••••••••"
              class="h-10 w-full rounded-md border border-neutral-200 bg-neutral-100 px-4 pr-10 text-sm transition duration-300 ease-in-out focus:border-neutral-500 focus:ring-neutral-500" />
            <button class="absolute right-0 top-1/2 h-full -translate-y-1/2 transform rounded-full px-2">
              <svg class="h-auto w-4 text-neutral-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                fill="currentColor">
                <path
                  d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z" />
                <path
                  d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z" />
                <path
                  d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z" />
              </svg>
            </button>
          </div>
          <div class="flex justify-between">
            <div class="flex items-center">
              <input id="remember-checkbox" type="checkbox"
                class="cursor-pointer rounded border border-neutral-200 bg-neutral-100 text-neutral-700 transition duration-300 ease-in-out focus:ring-2 focus:ring-neutral-700" />
              <label for="remember-checkbox" class="ms-2 text-sm font-medium text-zinc-700">Remember password</label>
            </div>
            <span class="cursor-pointer text-sm font-semibold text-zinc-700 underline">Forgot password</span>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-6">
        <button
          class="w-full rounded-md border border-neutral-900 bg-neutral-700 py-2 font-medium text-sm text-zinc-100 transition duration-300 ease-in-out hover:bg-neutral-900/90 focus:ring-2 focus:ring-neutral-400">Sign
          in</button>
        <span class="text-center text-sm text-zinc-700">Don't have an account? <span
            class="ml-1 cursor-pointer font-semibold text-zinc-700 underline">Create account</span></span>
      </div>
    </div>
  </form>
</section>
`;

const AuthPage01 = () => {
  return (
    <div className='w-full h-auto p-2'>
      <section className="flex h-screen items-center justify-center">
        <form className="flex w-full max-w-md flex-col items-center justify-center rounded-lg p-10 shadow-xl">
          <div className="w-full space-y-8">
            <div className="flex flex-col items-center gap-5">
              <img src={fmUILogo} alt="fmUI Logo" className="h-auto w-16" />
              <div className="flex flex-col items-center gap-1">
                <h1 className="text-[1.6rem] font-bold leading-none text-zinc-700">Welcome back!</h1>
                <span className="text-sm text-zinc-700">Please enter your credentials</span>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-zinc-700">Email Address</label>
                <input type="email" id='email' placeholder="john@email.com" className="h-10 w-full rounded-md border border-neutral-200 bg-neutral-100 px-4 text-sm transition duration-300 ease-in-out focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="password" className="text-sm font-medium text-zinc-700">Password</label>
                <div className="relative w-full">
                  <input type="password" id='password' placeholder="•••••••••••" className="h-10 w-full rounded-md border border-neutral-200 bg-neutral-100 px-4 pr-10 text-sm transition duration-300 ease-in-out focus:border-neutral-500 focus:ring-neutral-500" />
                  <button className="absolute right-0 top-1/2 h-full -translate-y-1/2 transform rounded-full px-2">
                    <svg className="h-auto w-4 text-neutral-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z" />
                      <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z" />
                      <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z" />
                    </svg>
                  </button>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <input id="remember-checkbox" type="checkbox" className="cursor-pointer rounded border border-neutral-200 bg-neutral-100 text-neutral-700 transition duration-300 ease-in-out focus:ring-2 focus:ring-neutral-700" />
                    <label htmlFor="remember-checkbox" className="ms-2 text-sm font-medium text-zinc-700">Remember password</label>
                  </div>
                  <span className="cursor-pointer text-sm font-semibold text-zinc-700 underline">Forgot password</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <button className="w-full rounded-md border border-neutral-900 bg-neutral-700 py-2 font-medium text-sm text-zinc-100 transition duration-300 ease-in-out hover:bg-neutral-900/90 focus:ring-2 focus:ring-neutral-400">Sign in</button>
              <span className="text-center text-sm text-zinc-700">Don't have an account? <span className="ml-1 cursor-pointer font-semibold text-zinc-700 underline">Create account</span></span>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AuthPage01;
