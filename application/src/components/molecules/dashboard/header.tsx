import Container from '@/app/_layout/container';
import Logo from '@/components/atom/logo';
import React from 'react';
import { HiOutlineBell } from 'react-icons/hi';

const DashboardHeader = () => {
  return (
    <Container>
      <div className='flex justify-between py-3'>
        <div>
          <Logo />
        </div>
        <div className='flex gap-5 items-center'>
          <HiOutlineBell size='1.3em' />
          <div className='bg-gray-200 rounded-full w-[50px] h-[50px] '></div>
          <h1 className='font-[500]'>Emmanuel</h1>
        </div>
      </div>
    </Container>
  );
};

export default DashboardHeader;
