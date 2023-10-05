import Container from '@/app/_layout/container';
import CharityBox from '@/components/atom/home/charityBox';
import { BORDER_STYLE } from '@/constant/style_constant';
import React, { Fragment } from 'react';
import { BsArrowUpRight } from 'react-icons/bs';

const SomeCharityListing = () => {
  return (
    <Container>
      <div>
        <h1 className='text-[20px]  lg:text-[40px] font-[500]'>
          Where to Donate
        </h1>

        <div className='my-5 flex flex-wrap gap-[1em]'>
          {[1, 2, 2, 2, 2].map((_) => (
            <Fragment key={_}>
              <CharityBox />
            </Fragment>
          ))}
        </div>

        <div className='my-[3em] flex flex-col lg:flex-row gap-[1em]  '>
          <div className='lg:w-[500px] flex flex-col gap-[1em]'>
            <div
              style={BORDER_STYLE}
              className=' h-[197px] flex items-center justify-center bg-accent_yellow text-center'
            >
              <div>
                <h1 className='text-[40px] font-bold '>100%</h1>
                <h1>CHARITIES RATED</h1>
              </div>
            </div>

            <div
              style={BORDER_STYLE}
              className=' h-[197px] flex items-center justify-center bg-white text-center'
            >
              <div>
                <h1 className='text-[40px] font-bold '>100%</h1>
                <h1>CHARITIES RATED</h1>
              </div>
            </div>
          </div>
          <div
            style={BORDER_STYLE}
            className=' lg:w-[670px] flex items-center  bg-white px-5 py-[1em]'
          >
            <div>
              <h1 className='font-bold my-[1em] text-[24px] lg:text-[30px]'>
                Lorem ipsum dolor sit amet consectetur.
              </h1>

              <p>
                Lorem ipsum dolor sit amet consectetur. Tempor accumsan id in
                phasellus egestas orci neque eu. Interdum ut ullamcorper gravida
                id feugiat .met consectetur. Tempor accumsan id in phasellus
                egestas orci neque eu. Interdum
              </p>

              <div className='flex justify-end'>
                <div
                  className=' hover:bg-black cursor-pointer  rounded-full w-[fit-content] p-[0.8em]'
                  style={{
                    border: '1px solid black',
                  }}
                >
                  <BsArrowUpRight size='1em' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SomeCharityListing;
