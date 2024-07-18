import React from 'react';
import { fmUILogo } from '../../../../assets';

export const codeSnippet = `<!-- This component requires the Tailwind CSS Forms plugin to properly style form elements like checkboxes, radio buttons, and input fields. 
To use this plugin, install it via npm by running 'npm install @tailwindcss/forms'. 
Then, include the plugin in your Tailwind CSS configuration file (tailwind.config.js) by adding 'require('@tailwindcss/forms')' to the plugins array. -->

<section class="flex lg:h-screen h-[120vh] items-center justify-center">
  <form class="flex w-full max-w-xl flex-col items-center justify-center rounded-md p-10 shadow-xl">
    <div class="w-full space-y-8">
      <div class="flex flex-col items-start gap-7">
        <img src="../assets/fmUI-logo.png" alt="fmUI Logo" class="h-auto w-12" />
        <div class="flex flex-col items-start gap-4">
          <h1 class="text-[1.8rem] font-bold leading-none text-zinc-700">Welcome to fmUI!</h1>
          <span class="text-sm text-zinc-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.</span>
        </div>
      </div>
      <div class="gap-6 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
        <div class="flex flex-col gap-2 col-span-1">
          <label for="first-name" class="text-sm font-medium text-zinc-700">First Name</label>
          <input type="text" id="first-name" placeholder="John" class="h-10 w-full rounded-md border border-neutral-200 bg-neutral-100 px-4 text-sm transition duration-300 ease-in-out focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500" />
        </div>
        <div class="flex flex-col gap-2 col-span-1">
          <label for="last-name" class="text-sm font-medium text-zinc-700">Last Name</label>
          <input type="text" id="last-name" placeholder="Doe" class="h-10 w-full rounded-md border border-neutral-200 bg-neutral-100 px-4 text-sm transition duration-300 ease-in-out focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500" />
        </div>
        <div class="flex flex-col gap-2 lg:col-span-2 md:col-span-2 col-span-1">
          <label for="email" class="text-sm font-medium text-zinc-700">Email Address</label>
          <input type="email" id="email" placeholder="john@email.com" class="h-10 w-full rounded-md border border-neutral-200 bg-neutral-100 px-4 text-sm transition duration-300 ease-in-out focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500" />
        </div>
        <div class="flex flex-col gap-2 col-span-1">
          <label for="password" class="text-sm font-medium text-zinc-700">Password</label>
          <input type="password" id="password" placeholder="•••••••••••" class="h-10 w-full rounded-md border border-neutral-200 bg-neutral-100 px-4 text-sm transition duration-300 ease-in-out focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500" />
        </div>
        <div class="flex flex-col gap-2 col-span-1">
          <label for="confirm-password" class="text-sm font-medium text-zinc-700">Confirm Password</label>
          <input type="password" id="confirm-password" placeholder="•••••••••••" class="h-10 w-full rounded-md border border-neutral-200 bg-neutral-100 px-4 text-sm transition duration-300 ease-in-out focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500" />
        </div>
      </div>
      <div>
        <input id="subscription-checkbox" type="checkbox" class="cursor-pointer rounded border border-neutral-200 bg-neutral-100 text-neutral-700 transition duration-300 ease-in-out focus:ring-1 focus:ring-neutral-700" />
        <label for="subscription-checkbox" class="ms-2 text-sm text-zinc-700">I want to receive emails about events, product updates and company announcements.</label>
      </div>
      <div class="flex flex-col gap-6">
        <button class="w-full rounded-md border border-neutral-900 bg-neutral-700 py-2 font-medium text-zinc-100 transition duration-300 ease-in-out hover:bg-neutral-900/90 focus:ring-2 focus:ring-neutral-400">Create account</button>
        <span class="text-center text-sm text-zinc-700">Already have an account? <span class="ml-1 cursor-pointer font-semibold text-zinc-700 underline">Login</span></span>
      </div>
    </div>
  </form>
</section>
`;

const AuthPage02 = () => {
  return (
    <div className='w-full h-auto p-2'>
      <section className="flex lg:h-screen h-[120vh] items-center justify-center">
        <form className="flex w-full max-w-xl flex-col items-center justify-center rounded-md p-10 shadow-xl">
          <div className="w-full space-y-8">
            <div className="flex flex-col items-start gap-7">
              <img src={fmUILogo} alt="fmUI Logo" className="h-auto w-12" />
              <div className="flex flex-col items-start gap-4">
                <h1 className="text-[1.8rem] font-bold leading-none text-zinc-700">Welcome to fmUI!</h1>
                <span className="text-sm text-zinc-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.</span>
              </div>
            </div>
            <div className="gap-6 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
              <div className="flex flex-col gap-2 col-span-1">
                <label htmlFor="first-name" className="text-sm font-medium text-zinc-700">First Name</label>
                <input type="text" id="first-name" placeholder="John" className="h-10 w-full rounded-md border border-neutral-200 bg-neutral-100 px-4 text-sm transition duration-300 ease-in-out focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500" />
              </div>
              <div className="flex flex-col gap-2 col-span-1">
                <label htmlFor="last-name" className="text-sm font-medium text-zinc-700">Last Name</label>
                <input type="text" id="last-name" placeholder="Doe" className="h-10 w-full rounded-md border border-neutral-200 bg-neutral-100 px-4 text-sm transition duration-300 ease-in-out focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500" />
              </div>
              <div className="flex flex-col gap-2 lg:col-span-2 md:col-span-2 col-span-1">
                <label htmlFor="email" className="text-sm font-medium text-zinc-700">Email Address</label>
                <input type="email" id="email" placeholder="john@email.com" className="h-10 w-full rounded-md border border-neutral-200 bg-neutral-100 px-4 text-sm transition duration-300 ease-in-out focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500" />
              </div>
              <div className="flex flex-col gap-2 col-span-1">
                <label htmlFor="password" className="text-sm font-medium text-zinc-700">Password</label>
                <input type="password" id="password" placeholder="•••••••••••" className="h-10 w-full rounded-md border border-neutral-200 bg-neutral-100 px-4 text-sm transition duration-300 ease-in-out focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500" />
              </div>
              <div className="flex flex-col gap-2 col-span-1">
                <label htmlFor="confirm-password" className="text-sm font-medium text-zinc-700">Confirm Password</label>
                <input type="password" id="confirm-password" placeholder="•••••••••••" className="h-10 w-full rounded-md border border-neutral-200 bg-neutral-100 px-4 text-sm transition duration-300 ease-in-out focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500" />
              </div>
            </div>
            <div>
              <input id="subscription-checkbox" type="checkbox" className="cursor-pointer rounded border border-neutral-200 bg-neutral-100 text-neutral-700 transition duration-300 ease-in-out focus:ring-1 focus:ring-neutral-700" />
              <label htmlFor="subscription-checkbox" className="ms-2 text-sm text-zinc-700">I want to receive emails about events, product updates and company announcements.</label>
            </div>
            <div className="flex flex-col gap-6">
              <button className="w-full rounded-md border border-neutral-900 bg-neutral-700 py-2 font-medium text-zinc-100 transition duration-300 ease-in-out hover:bg-neutral-900/90 focus:ring-2 focus:ring-neutral-400">Create account</button>
              <span className="text-center text-sm text-zinc-700">Already have an account? <span className="ml-1 cursor-pointer font-semibold text-zinc-700 underline">Login</span></span>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AuthPage02;
