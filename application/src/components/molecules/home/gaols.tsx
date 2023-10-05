import Container from '@/app/_layout/container';
import React from 'react';
import Button from '@/components/atom/button';
import { BsArrowUpRight } from 'react-icons/bs';

const DonationItem = () => {
  return (
    <div className='lg:w-[261px] lg:my-[1em] h-[263px] bg-white px-[1em] py-[1.5em]'>
      <h1 className='text-[18px] my-[1em] lg:text-[22px]'>
        Education Projects all Over
      </h1>

      <div
        className='  hover:bg-black cursor-pointer  rounded-full w-[fit-content] p-[0.8em]'
        style={{
          border: '1px solid black',
        }}
      >
        <BsArrowUpRight size='1em' />
      </div>
    </div>
  );
};

const GoalsSeection = () => {
  return (
    <div>
      <Container>
        <div className='flex items-center justify-between gap-[2em] flex-col lg:flex-row'>
          <div className=' lg:w-[543px]'>
            <h1 className='text-[30px] lg:text-[45px] font-[500]'>
              The mission and goals of our organization
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Tempor accumsan id in
              phasellus egestas orci neque eu. Interdum ut ullamcorper gravida
              id feugiat .met consectetur. Tempor accumsan id in phasellus
              egestas orci neque eu. Interdum
            </p>

            <div className='my-5'>
              <Button>Donate Now</Button>
            </div>
          </div>
          <div className=' items-center flex-col lg:w-[50%] flex lg:flex-row gap-5 '>
            <div>
              <DonationItem />
              <DonationItem />
            </div>
            <DonationItem />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GoalsSeection;
