import React from 'react';
import Container from '@/app/_layout/container';

const Mission = () => {
  return (
    <div className='my-[5em]'>
      <Container>
        <div className='flex  items-center  gap-[1em] lg:gap-[2em] justify-center'>
          <div className='bg-gray-500 h-[400px] lg:w-[500px] '></div>
          <div className='lg:w-[562px]'>
            <h1 className='font-[500] text-[30px]   lg:text-left'>
              Our mission is to make impactful giving easier for all
            </h1>
            <p className='my-5'>
              Lorem ipsum dolor sit amet consectetur. Tempor accumsan id in
              phasellus egestas orci neque eu. Interdum ut ullamcorper gravida
              id feugiat consectetur maecenas quisque duis. Massa nisi in
              aliquam euismod.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Mission;
