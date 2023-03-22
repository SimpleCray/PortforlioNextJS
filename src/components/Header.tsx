import React from 'react';
import { SocialIcon } from 'react-social-icons';

type Props = {};

export default function Header({}: Props) {
  return (
    <header className='sticky p-5 top-0 flex items-start justify-between max-w-7xl mx-auto'>
      <div className='flex items-center'>
        {/* Social Icons */}
        <SocialIcon url='https://www.linkedin.com/in/simplecray/' fgColor='gray' bgColor='transparent' />
        <SocialIcon url='https://www.facebook.com/simplecray/' fgColor='gray' bgColor='transparent' />
        <SocialIcon url='https://www.github.com/simplecray/' fgColor='gray' bgColor='transparent' />
      </div>

      <div className='flex items-center text-gray-300 cursor-pointer'>
        <SocialIcon className='cursor-pointer' network='email' fgColor='gray' bgColor='transparent' />
        <p className='uppercase hidden md:inline-flex text-gray-400'>Get In Touch</p>
      </div>
    </header>
  );
}
