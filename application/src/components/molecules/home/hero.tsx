import Container from '@/app/_layout/container';
import Button from '@/components/atom/button';
import React from 'react';
import { BORDER_STYLE, PRIMARY_FIGURE } from '@/constant/style_constant';

const Hero = () => {
  return (
    <Container>
      <div className=' my-[4em] flex flex-col lg:flex-row items-center gap-[1em]'>
        <div>
          <h1 className='text-[30px] font-[500] text-center  lg:text-left lg:text-[60px]'>
            Habitat for Humanity Donation
          </h1>
        </div>

        <div className=' text-center lg:text-left lg:w-[567px]'>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tempor accumsan id in
            phasellus egestas orci neque eu. Interdum ut ullamcorper gravida id
            feugiat .
          </p>

          <div className='my-[1em]'>
            <Button bg={'bg-black'}>Make Donation</Button>
          </div>
        </div>
      </div>

      <div
        style={BORDER_STYLE}
        className={`  flex justify-between gap-5 flex-col  lg:flex-row bg-white py-[3em]  px-[2em] lg:px-[5em] ${PRIMARY_FIGURE}`}
      >
        <div className='  lg:w-[467px]'>
          <h1 className='font-[500] text-[30px] lg:text-[45px]'>
            Outstanding Charity Awards
          </h1>
        </div>
        <div className='  lg:w-[500px]'>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tempor accumsan id in
            phasellus egestas orci neque eu. Interdum ut ullamcorper gravida id
            feugiat consectetur maecenas quisque duis. Massa nisi in aliquam
            euismod.
          </p>

          <div className='my-[1em]'>
            <Button>Offering Listing</Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
