import Button from '@/components/atom/button';
import Logo from '@/components/atom/logo';
import React from 'react';
import { HiMenu } from 'react-icons/hi';

const Header = () => {
  return (
    <div className=' bg-[#F8F7FD] container py-[1em] flex items-center justify-between'>
      <div className='flex  gap-[5em]'>
        <Logo />
        {/* Nav section */}
        <nav>
          <ul className=' hidden  lg:flex   list-style-none'>
            <li>Explore</li>
            <li>About Us</li>
          </ul>
        </nav>
      </div>

      <div className=' hidden  lg:flex items-center    justify-center gap-5 '>
        <div>
          <h2>Sign Up</h2>
        </div>
        <Button width='w-[178px]'>SignIn</Button>
      </div>

      {/* display for mobile phone */}
      <div className='block lg:hidden'>
        <HiMenu size='1.5em' />
      </div>
    </div>
  );
};

export default Header;
