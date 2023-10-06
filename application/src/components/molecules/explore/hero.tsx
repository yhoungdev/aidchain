import Container from '@/app/_layout/container';
import React from 'react';
import Button from '@/components/atom/button';

const ExploreHero = () => {
  return (
    <Container>
      <div className=' my-[4em] flex flex-col lg:flex-row items-center gap-[1em] justify-between'>
        <div>
          <h1 className='text-[30px] font-[500] text-center  lg:text-left lg:text-[60px]'>
            Explore
          </h1>
          <h1>Charity/Offering Listing</h1>
        </div>

        <div className=' text-center lg:text-left lg:w-[567px]'>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tempor accumsan id in
            phasellus egestas orci neque eu. Interdum ut ullamcorper gravida id
            feugiat consectetur maecenas quisque duis. Massa nisi in aliquam
            euismod.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default ExploreHero;
