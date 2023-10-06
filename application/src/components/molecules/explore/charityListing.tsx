import Container from '@/app/_layout/container';
import CharityDonationBox from '@/components/atom/explore/charity_donation_box';
import React, { Fragment } from 'react';

const CharityListing = () => {
  return (
    <Container>
      <div className='my-[5em] flex gap-5 flex-wrap '>
        {[1, 3, 4, 5].map((_) => (
          <Fragment key={_}>
            <CharityDonationBox />
          </Fragment>
        ))}
      </div>
    </Container>
  );
};

export default CharityListing;
