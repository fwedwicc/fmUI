import React from 'react';
import { Tilt } from '@jdion/tilt-react';
import { HiThumbUp, HiCamera, HiMicrophone, HiPhotograph, HiPlusCircle, HiEmojiHappy, HiArrowSmLeft, HiVideoCamera, HiPhone, HiInformationCircle } from "react-icons/hi";

const SampleChat = () => {

  const IconButton = ({ Icon }) => (
    <button className="h-full p-2 rounded-full transition duration-300 ease-in-out text-zinc-800 hover:bg-neutral-200/40 focus:ring-2 focus:ring-neutral-200">
      <Icon className="w-5 h-auto" />
    </button>
  );

  const MessageBubble = ({ message, alignment, sender }) => (
    <div className={`flex ${alignment} gap-3 ${alignment === 'justify-end' ? 'ml-16' : 'mr-16'}`}>
      {sender && <img src="https://placehold.co/20x20" alt="" className="w-8 h-8 rounded-full" />}
      <div className="flex flex-col items-start gap-1.5">
        {message.map((text, idx) => (
          <p key={idx} className={`py-2 text-sm px-4 ${alignment === 'justify-end' ? 'bg-neutral-700 text-zinc-100' : 'bg-neutral-200'} rounded ${idx === 0 ? alignment === 'justify-end' ? 'rounded-l-xl rounded-tr-xl' : 'rounded-r-xl' : ''} ${idx !== 0 ? alignment === 'justify-end' ? 'rounded-l-xl rounded-br-xl' : 'rounded-bl-xl rounded-r-xl' : ''}`}>
            {text}
          </p>
        ))}
      </div>
    </div>
  );

  return (
    <Tilt
      className="Tilt"
      options={{ max: 10, scale: 1.02, speed: 400 }}
      style={{ height: '100%', width: '100%' }}
    >
      <div className="w-full md:h-full h-auto rounded-md border border-neutral-400/30 shadow-xl flex flex-col justify-between">
        <div className="w-full p-5 border-b flex justify-between">
          <div className="flex gap-2">
            <IconButton Icon={HiArrowSmLeft} />
            <div className="flex items-center gap-3">
              <img src="https://placehold.co/20x20" alt="" className="w-8 h-8 rounded-full" />
              <h3 className="font-medium text-[1rem] leading-none">Frederick Moreno</h3>
            </div>
          </div>
          <div className="flex gap-1">
            <IconButton Icon={HiPhone} />
            <IconButton Icon={HiVideoCamera} />
            <IconButton Icon={HiInformationCircle} />
          </div>
        </div>
        <div className="w-full flex-1 p-7 flex gap-12 flex-col justify-between">
          <div className="flex flex-col items-center gap-4">
            <img src="https://placehold.co/60x60" alt="" className="w-24 h-24 rounded-full" />
            <div className="flex flex-col items-center gap-1">
              <h2 className="font-bold text-[1.2rem] leading-none">Frederick Moreno</h2>
              <span className="text-zinc-400 mb-2 text-xs">You are now friends</span>
              <button className="px-2 py-1 text-sm transition duration-300 ease-in-out text-zinc-600 bg-neutral-200 border border-neutral-300 hover:bg-neutral-400/40 font-bold rounded-md focus:border-none focus:ring-2 focus:ring-neutral-400/70">View profile</button>
            </div>
          </div>
          <div className="gap-3 flex flex-col">
            <MessageBubble alignment="justify-start" sender message={['Is the fmUI completely free? I mean all of the components and sample pages?']} />
            <MessageBubble alignment="justify-end" message={["Absolutely! All the components that you could see is totally freemium!"]} />
            <MessageBubble alignment="justify-start" sender message={['Awesome! Now, I can use some of the components to my projects. Thank you so much!']} />
            <MessageBubble alignment="justify-end" message={["You're welcome! Happy coding!"]} />
          </div>
        </div>
        <div className="w-full p-3 flex border-t justify-between items-center gap-1">
          <IconButton Icon={HiPlusCircle} />
          <IconButton Icon={HiCamera} />
          <IconButton Icon={HiPhotograph} />
          <IconButton Icon={HiMicrophone} />
          <div className="relative w-full">
            <input type="text" placeholder="Message" className="h-10 pr-10 rounded-md w-full bg-neutral-100 border border-neutral-200 transition duration-300 ease-in-out focus:ring-1 focus:ring-neutral-500 focus:border-neutral-500 text-sm px-4" />
            <button className="absolute top-1/2 right-0 transform -translate-y-1/2 h-full px-2 rounded-full">
              <HiEmojiHappy className="w-5 h-auto" />
            </button>
          </div>
          <IconButton Icon={HiThumbUp} />
        </div>
      </div>
    </Tilt>
  );
};

export default SampleChat
