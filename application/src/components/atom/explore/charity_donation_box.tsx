import { BORDER_STYLE } from '@/constant/style_constant';
import React, { FC } from 'react';
import Button from '../button';
import Image from 'next/image';
import Link from 'next/link';

interface ICharityBoxProps {
  path: string;
}

const CharityDonationBox: FC<ICharityBoxProps> = ({ path }) => {
  return (
    <div className='lg:w-[416px] py-[1.5em] px-5 ' style={BORDER_STYLE}>
      <div className='my-5 py-3 px-2 rounded-md w-[fit-content] bg-[#F7F9FD]'>
        <h1 className='font-[500] '>Evidence Action INC</h1>
        <p className='text-[#787878]'>Prescott , AZ</p>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur. Tempor accumsan id in phasellus
        egestas orci neque eu. Interdum{' '}
      </p>
      <div className='bg-black w-full h-[.09em] my-[1em]'></div>
      <div className='flex justify-end'>
        <Link href={path}>
          <Button bg='bg-black'>
            <div className='flex gap-1'>
              <Image
                src='/asset/cart.svg'
                alt='donation image'
                width='20'
                height='20'
              />
              <h1>donation</h1>
            </div>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CharityDonationBox;
