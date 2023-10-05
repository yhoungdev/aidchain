import React from 'react';
import Header from '../molecules/layouts/header';
import Hero from '../molecules/home/hero';
import Mission from '../molecules/home/mission';
import SomeCharityListing from '../molecules/home/listing';
import GoalsSeection from '../molecules/home/gaols';

const HomeTemplate = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Mission />
      <SomeCharityListing />
      <GoalsSeection />
    </div>
  );
};

export default HomeTemplate;
