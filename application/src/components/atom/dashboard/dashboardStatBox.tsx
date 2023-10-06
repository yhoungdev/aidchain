import { BORDER_STYLE } from '@/constant/style_constant';
import React from 'react';

const DashboardStatBox = () => {
  return (
    <div
      className='bg-accent_yellow flex justify-center  py-[45px] px-5  lg:w-[400px]'
      style={BORDER_STYLE}
    >
      <div>
        <div
          className='bg-white my-3 py-1 rounded-xl px-4'
          style={{
            border: '1px solid black',
          }}
        >
          <p>Wallet Balnce</p>
        </div>
        <h1 className='font-[500] text-[25px]'>$ 55000</h1>
      </div>
    </div>
  );
};

export default DashboardStatBox;
