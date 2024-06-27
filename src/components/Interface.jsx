import React from 'react';
import useVanillaTilt from '../hooks/useVanillaTilt';
import { IoIosClose } from "react-icons/io";
import { TbTransferVertical } from "react-icons/tb";
import { HiThumbUp, HiCamera, HiMicrophone, HiPhotograph, HiPlusCircle, HiEmojiHappy, HiArrowSmLeft, HiVideoCamera, HiPhone, HiInformationCircle, HiEyeOff, HiTrash } from "react-icons/hi";
import { fmUILogo } from '../assets'

const Card = () => {
  const tiltOptions = {
    max: 7,
    speed: 50,
    glare: true,
    "max-glare": 0.3,
  };
  const cardRef = useVanillaTilt(tiltOptions);

  const imageUrls = [
    'https://placehold.co/30x30',
    'https://placehold.co/30x30',
    'https://placehold.co/30x30',
    'https://placehold.co/30x30',
    'https://placehold.co/30x30',
  ];

  const tags = [
    'UX Design',
    'Product Design',
    '99+'
  ]

  const stars = [
    { color: 'text-neutral-800' },
    { color: 'text-neutral-800' },
    { color: 'text-neutral-800' },
    { color: 'text-neutral-800' },
    { color: 'text-neutral-300' },
  ];

  const StarIcon = ({ color }) => (
    <svg className={`w-4 h-4 ${color} me-1`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
  );

  return (
    <div ref={cardRef} className='p-4 rounded-md border border-neutral-400/30 w-full h-full space-y-5 shadow-xl'>
      <div>
        <img src="https://placehold.co/600x300" alt="" className='w-full h-full rounded-md object-cover' />
      </div>
      <div className='space-y-4 px-4 pt-4'>
        <div className='flex gap-1.5 flex-wrap'>
          {tags.map((tag, index) => (
            <span key={index} className="whitespace-nowrap rounded-full border border-neutral-300 bg-neutral-100 px-2.5 py-1.5 text-sm text-zinc-800">
              {tag}
            </span>
          ))}
        </div>
        <div className='space-y-2'>
          <div className='flex justify-between items-center'>
            <h1 className='text-[1.5rem]'>Card Title</h1>
            <h1 className='text-[1.5rem]'>$1099.00</h1>
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus aperiam sint rerum accusantium.</p>
          <div className='flex gap-4 items-center pt-2'>
            <div className='flex'>
              {imageUrls.map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt={`Image ${index + 1}`}
                  className={`${index !== 0 ? 'ml-[-0.4rem]' : ''} rounded-full ring-1 ring-white`}
                />
              ))}
            </div>
            <span>Join 867+ members</span>
          </div>
          <div className="flex items-center pt-3">
            {stars.map((star, index) => (
              <StarIcon key={index} color={star.color} />
            ))}
            <span className='ms-1 text-sm font-medium text-neutral-700'>4.95 out of 5</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const Modal = () => {
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


const Chat = () => {
  const tiltOptions = {
    max: 3,
    speed: 50,
    glare: true,
    'max-glare': 0.2,
  };
  const cardRef = useVanillaTilt(tiltOptions);

  const IconButton = ({ Icon }) => (
    <button className="h-full p-2 rounded-full transition duration-300 ease-in-out hover:bg-neutral-200/40 focus:ring-2 focus:ring-neutral-200">
      <Icon className="w-6 h-auto" />
    </button>
  );

  const MessageBubble = ({ message, alignment, sender }) => (
    <div className={`flex ${alignment} gap-3 ${alignment === 'justify-end' ? 'ml-36' : 'mr-36'}`}>
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
    <div ref={cardRef} className="w-full h-full rounded-md border border-neutral-400/30 shadow-xl flex flex-col justify-between">
      <div className="w-full p-7 border-b flex justify-between">
        <div className="flex gap-2">
          <IconButton Icon={HiArrowSmLeft} />
          <div className="flex items-center gap-3">
            <img src="https://placehold.co/20x20" alt="" className="w-8 h-8 rounded-full" />
            <h3 className="font-semibold text-[1rem] leading-none">Frederick Moreno</h3>
          </div>
        </div>
        <div className="flex gap-1">
          <IconButton Icon={HiPhone} />
          <IconButton Icon={HiVideoCamera} />
          <IconButton Icon={HiInformationCircle} />
        </div>
      </div>
      <div className="w-full flex-1 p-7 flex gap-3 flex-col justify-between">
        <div className="flex flex-col items-center gap-4">
          <img src="https://placehold.co/60x60" alt="" className="w-24 h-24 rounded-full" />
          <div className="flex flex-col items-center gap-1">
            <h2 className="font-bold text-[1.4rem] leading-none">Frederick Moreno</h2>
            <span className="text-zinc-400 mb-2 text-sm">You are now friends</span>
            <button className="px-2.5 py-1.5 text-sm transition duration-300 ease-in-out text-zinc-600 bg-neutral-200 border border-neutral-300 hover:bg-neutral-400/40 font-bold rounded-md focus:border-none focus:ring-2 focus:ring-neutral-400/70">View profile</button>
          </div>
        </div>
        <div className="gap-3 flex flex-col">
          <MessageBubble alignment="justify-start" sender message={['Hello! May I ask something?', 'Is the fmUI completely free? I mean all of the components and sample pages?']} />
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
          <input type="text" placeholder="Message" className="h-10 pr-10 rounded-md w-full bg-neutral-100 border border-neutral-200 transition duration-300 ease-in-out focus:ring-2 focus:ring-neutral-400 text-sm px-4" />
          <button className="absolute top-1/2 right-0 transform -translate-y-1/2 h-full px-2 rounded-full">
            <HiEmojiHappy className="w-6 h-auto" />
          </button>
        </div>
        <IconButton Icon={HiThumbUp} />
      </div>
    </div>
  );
};

const Login = () => {
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
        className="h-11 rounded-md w-full bg-neutral-100 border border-neutral-200 transition duration-300 ease-in-out focus:ring-2 focus:ring-neutral-400 text-sm px-4"
      />
    </div>
  );

  return (
    <div ref={cardRef} className="rounded-md border border-neutral-400/30 shadow-xl w-full h-full p-10 flex flex-col justify-center items-center">
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
                className="h-11 pr-10 rounded-md w-full bg-neutral-100 border border-neutral-200 transition duration-300 ease-in-out focus:ring-2 focus:ring-neutral-400 text-sm px-4"
              />
              <button className="absolute top-1/2 right-0 transform -translate-y-1/2 h-full px-2 rounded-full">
                <HiEyeOff className="w-4 h-auto text-neutral-400" />
              </button>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center">
                <input id="remember-checkbox" type="checkbox" className="rounded-md accent-neutral-700 cursor-pointer transition duration-300 ease-in-out" />
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
    </div>
  );
};

const Cart = () => {
  const tiltOptions = {
    max: 10,
    speed: 50,
    glare: true,
    "max-glare": 0.3,
  };
  const cardRef = useVanillaTilt(tiltOptions);

  return (
    <div ref={cardRef} className='rounded-md border w-full h-full border-neutral-400/30 shadow-xl flex flex-col justify-between p-7'>
      <div className='flex justify-between items-center'>
        <div className='flex gap-3'>
          <TbTransferVertical className='w-6 h-auto' />
          <h2 className='font-medium text-[1.3rem]'>Shopping Cart</h2>
        </div>
        <button className='w-[2.5rem] h-[2.5rem] flex justify-center items-center transition duration-300 ease-in-out hover:bg-neutral-200/40 rounded-md focus:ring-2 focus:ring-neutral-200'>
          <IoIosClose className='w-6 h-auto' />
        </button>
      </div>
      <div className='flex flex-1 items-end'>
        <div className='flex justify-start gap-3 w-full'>
          <div className='w-[10rem]'>
            <img src="https://placehold.co/60x60" alt="" className='w-full h-full rounded-md object-cover' />
          </div>
          <div className='w-full flex flex-col gap-1.5'>
            <div className='flex justify-between items-center text-[1.1rem]'>
              <h1 className='font-semibold'>MacBook Air 13.6" Laptop</h1>
              <h2>$1,199.00</h2>
            </div>
            <div className='flex flex-col gap-3 justify-start items-start'>
              <span className='whitespace-nowrap rounded-md border border-neutral-300 bg-neutral-100 px-2 py-1 text-sm text-zinc-800'>In stock</span>
              <span className='text-sm flex gap-2 items-center'>
                <div className='w-3 h-3 rounded-full bg-neutral-700'></div>
                Space Gray
              </span>
            </div>
            <div className='flex justify-between items-center'>
              <span className='text-sm flex items-center gap-1.5 text-zinc-500 cursor-pointer'>
                <HiTrash className='w-5 h-auto text-zinc-400' />
                Remove
              </span>
              <div className='border border-neutral-300 rounded-md'>
                <button className='border-r px-2.5 py-1 focus:ring-2 focus:ring-neutral-400 transition duration-300 ease-in-out hover:bg-neutral-200 rounded-l-md'>+</button>
                <span className='px-2.5 py-1'>2</span>
                <button className='border-l px-2.5 py-1 focus:ring-2 focus:ring-neutral-400 transition duration-300 ease-in-out hover:bg-neutral-200 rounded-r-md'>+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


const Interface = () => {
  return (
    <div className='grid grid-cols-3 grid-rows-4 mt-12'>
      <div className='col-span-1 row-span-2 pr-2.5 pb-2.5'>
        <Card />
      </div>
      <div className='col-span-1 pb-2.5 px-2.5 border-l border-b'>
        <Modal />
      </div>
      <div className='col-span-1 row-span-3 border-l border-b pl-2.5 pb-2.5'>
        <Chat />
      </div>
      <div className='col-span-1 row-span-2 p-2.5 border-l border-b'>
        <Login />
      </div>
      <div className='col-span-1 row-span-1 pr-2.5 pt-2.5 pb-2.5 border-t border-b'>
        <Cart />
      </div>
      <div className='col-span-1 row-span-1'>test 6</div>
      <div className='col-span-2 row-span-1'>test 7</div>
    </div>
  )
}

export default Interface;
