import Container from '@/app/_layout/container';
import { BORDER_STYLE } from '@/constant/style_constant';
import React from 'react';

const CharityListAndDonationHistory = () => {
  return (
    <Container>
      <div className='flex gap-5] gap-5'>
        <div className='px-5 py-[1em]' style={BORDER_STYLE}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
          facere corporis ullam eaque sit perferendis fugit rem ipsum, animi ab
          accusamus quam natus modi fugiat dolor dolorum velit sunt possimus.
        </div>

        <div className='px-5 py-[1em]' style={BORDER_STYLE}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
          facere corporis ullam eaque sit perferendis fugit rem ipsum, animi ab
          accusamus quam natus modi fugiat dolor dolorum velit sunt possimus.
        </div>
      </div>
    </Container>
  );
};

export default CharityListAndDonationHistory;
