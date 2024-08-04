import React from 'react';

export const codeSnippet = `<!-- This component requires the Tailwind CSS Forms plugin to properly style form elements like checkboxes, radio buttons, and input fields. 
To use this plugin, install it via npm by running 'npm install @tailwindcss/forms'. 
Then, include the plugin in your Tailwind CSS configuration file (tailwind.config.js) by adding 'require('@tailwindcss/forms')' to the plugins array. -->

<div class="grid grid-cols-1 lg:grid-cols-2">
  <main class="flex lg:h-screen h-auto items-center justify-center order-2 lg:order-1">
    <form class="flex w-full max-w-lg flex-col items-center justify-center pl-7 pr-4 py-9">
      <div class="w-full space-y-8">
        <div class="flex flex-col items-start gap-7">
          <img src="https://github.com/fwedwicc/fmUI/blob/main/src/assets/fmUI-logo.png?raw=true" alt="fmUI Logo"
            class="h-auto w-14" />
          <div class="flex flex-col items-start gap-4">
            <h1 class="text-[1.8rem] font-bold leading-none text-zinc-700">Welcome to fmUI!</h1>
            <span class="text-sm text-zinc-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam
              dolorum aliquam, quibusdam aperiam voluptatum.</span>
          </div>
        </div>
        <div class="gap-6 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
          <div class="flex flex-col gap-2 col-span-1">
            <label for="first-name" class="text-sm font-medium text-zinc-700">First Name</label>
            <input type="text" id="first-name" placeholder="John"
              class="h-10 w-full rounded-md border border-neutral-200 bg-neutral-100 px-4 text-sm transition duration-300 ease-in-out focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500" />
          </div>
          <div class="flex flex-col gap-2 col-span-1">
            <label for="last-name" class="text-sm font-medium text-zinc-700">Last Name</label>
            <input type="text" id="last-name" placeholder="Doe"
              class="h-10 w-full rounded-md border border-neutral-200 bg-neutral-100 px-4 text-sm transition duration-300 ease-in-out focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500" />
          </div>
          <div class="flex flex-col gap-2 lg:col-span-2 md:col-span-2 col-span-1">
            <label for="email" class="text-sm font-medium text-zinc-700">Email Address</label>
            <input type="email" id="email" placeholder="john@email.com"
              class="h-10 w-full rounded-md border border-neutral-200 bg-neutral-100 px-4 text-sm transition duration-300 ease-in-out focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500" />
          </div>
          <div class="flex flex-col gap-2 col-span-1">
            <label for="password" class="text-sm font-medium text-zinc-700">Password</label>
            <input type="password" id="password" placeholder="•••••••••••"
              class="h-10 w-full rounded-md border border-neutral-200 bg-neutral-100 px-4 text-sm transition duration-300 ease-in-out focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500" />
          </div>
          <div class="flex flex-col gap-2 col-span-1">
            <label for="confirm-password" class="text-sm font-medium text-zinc-700">Confirm Password</label>
            <input type="password" id="confirm-password" placeholder="•••••••••••"
              class="h-10 w-full rounded-md border border-neutral-200 bg-neutral-100 px-4 text-sm transition duration-300 ease-in-out focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500" />
          </div>
        </div>
        <div>
          <input id="subscription-checkbox" type="checkbox"
            class="cursor-pointer rounded border border-neutral-200 bg-neutral-100 text-neutral-700 transition duration-300 ease-in-out focus:ring-2 focus:ring-neutral-700" />
          <label for="subscription-checkbox" class="ms-2 text-sm text-zinc-700">I want to receive emails about events,
            product updates and company announcements.</label>
        </div>
        <div class="flex flex-col gap-6">
          <button
            class="w-full rounded-md border border-neutral-900 bg-neutral-700 py-2 font-medium text-sm text-zinc-100 transition duration-300 ease-in-out hover:bg-neutral-900/90 focus:ring-2 focus:ring-neutral-400">Create
            account</button>
          <span class="text-center text-sm text-zinc-700">Already have an account? <span
              class="ml-1 cursor-pointer font-semibold text-zinc-700 underline">Login</span></span>
        </div>
      </div>
    </form>
  </main>
  <aside class="relative h-[20rem] lg:h-full order-1 lg:order-2">
    <img class="absolute z-0 h-full w-full rounded-[1.5rem] object-cover p-2 md:rounded-[2rem] md:p-3"
      src="https://images.unsplash.com/photo-1637516408720-c7d7fd09a16e?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Authentication Illustration" />
    <div class="absolute bottom-10 mx-10 md:bottom-14 md:mx-14">
      <h1 class="mb-4 text-[2.6rem] font-bold leading-none text-zinc-200 md:text-[3.6rem]">Less is more.</h1>
      <span class="text-sm text-zinc-300">fmUI is a comprehensive collection of free Tailwind CSS components and
        templates for your projects. With diverse components and sample pages, you can develop websites, web apps, and
        more. Explore our selection to enhance your development process with ease and flexibility.</span>
    </div>
  </aside>
</div>
`;

const AuthPage04 = () => {
  return (
    <div className='w-full h-auto'>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <main className="flex lg:h-screen h-auto items-center justify-center order-2 lg:order-1">
          <form className="flex w-full max-w-lg flex-col items-center justify-center pl-7 pr-4 py-9">
            <div className="w-full space-y-8">
              <div className="flex flex-col items-start gap-7">
                <img src="https://github.com/fwedwicc/fmUI/blob/main/src/assets/fmUI-logo.png?raw=true" alt="fmUI Logo" className="h-auto w-14" />
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
                <input id="subscription-checkbox" type="checkbox" className="cursor-pointer rounded border border-neutral-200 bg-neutral-100 text-neutral-700 transition duration-300 ease-in-out focus:ring-2 focus:ring-neutral-700" />
                <label htmlFor="subscription-checkbox" className="ms-2 text-sm text-zinc-700">I want to receive emails about events, product updates and company announcements.</label>
              </div>
              <div className="flex flex-col gap-6">
                <button className="w-full rounded-md border border-neutral-900 bg-neutral-700 py-2 font-medium text-sm text-zinc-100 transition duration-300 ease-in-out hover:bg-neutral-900/90 focus:ring-2 focus:ring-neutral-400">Create account</button>
                <span className="text-center text-sm text-zinc-700">Already have an account? <span className="ml-1 cursor-pointer font-semibold text-zinc-700 underline">Login</span></span>
              </div>
            </div>
          </form>
        </main>
        <aside className="relative h-[20rem] lg:h-full order-1 lg:order-2">
          <img className="absolute z-0 h-full w-full rounded-[1.5rem] object-cover p-2 md:rounded-[2rem] md:p-3" src="https://images.unsplash.com/photo-1637516408720-c7d7fd09a16e?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Authentication Illustration" />
          <div className="absolute bottom-10 mx-10 md:bottom-14 md:mx-14">
            <h1 className="mb-4 text-[2.6rem] font-bold leading-none text-zinc-200 md:text-[3.6rem]">Less is more.</h1>
            <span className="text-sm text-zinc-300">fmUI is a comprehensive collection of free Tailwind CSS components and templates for your projects. With diverse components and sample pages, you can develop websites, web apps, and more. Explore our selection to enhance your development process with ease and flexibility.</span>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default AuthPage04;
