import Container from '@/app/_layout/container';
import { BORDER_STYLE } from '@/constant/style_constant';
import React, { Fragment } from 'react';
import CharityItems from './charityItem';
import HistoryBox from './donatedBox';

const CharityListAndDonationHistory = () => {
  return (
    <Container>
      <div className='flex gap-5] gap-5'>
        <div className='px-5 py-[1em] lg:w-[600px] ' style={BORDER_STYLE}>
          <h1 className='font-[500] my-4'>List of Charity Organizations</h1>

          {/* list charities for useres */}
          <div>
            {[1, 2, 2].map((_) => (
              <Fragment key={_}>
                <CharityItems />
              </Fragment>
            ))}
          </div>
        </div>

        <div className='px-5 py-[1em] lg:w-[842px]' style={BORDER_STYLE}>
          <h1 className='font-[500] my-4'>List of Charity Donated To</h1>

          <div className='my-5'>
            {[1, 2, 2].map((_) => (
              <Fragment key={_}>
                <HistoryBox />
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CharityListAndDonationHistory;
