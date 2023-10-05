import React from 'react';
import Header from '../molecules/layouts/header';
import Hero from '../molecules/home/hero';
import Mission from '../molecules/home/mission';
import SomeCharityListing from '../molecules/home/listing';

const HomeTemplate = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Mission />
      <SomeCharityListing />
    </div>
  );
};

export default HomeTemplate;
