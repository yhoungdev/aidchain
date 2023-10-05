import { BORDER_STYLE } from '@/constant/style_constant';
import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';

const CharityBox = () => {
  return (
    <div className='lg:w-[450px] pb-[1em]' style={BORDER_STYLE}>
      <div className='bg-black h-[250px]'></div>
      <div className='px-5 '>
        <h2 className='my-5'> Wildfire</h2>

        <div className='pb-[10px]'>
          Make your donation count for those impacted by the fires in Hawaii.
          Our analysts have curated a list of highly rated charities involved in
          relief and recovery efforts.
        </div>

        <div className='flex justify-end'>
          <div
            className=' hover:bg-black cursor-pointer  rounded-full w-[fit-content] p-[0.8em]'
            style={{
              border: '1px solid black',
            }}
          >
            <BsArrowUpRight size='1.7em' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharityBox;
