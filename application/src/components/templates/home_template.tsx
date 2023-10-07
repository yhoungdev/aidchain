import React from 'react';
import Loader from './Loader'
import Header from '../molecules/layouts/header';
import Hero from '../molecules/home/hero';
import Mission from '../molecules/home/mission';
import SomeCharityListing from '../molecules/home/listing';
import GoalsSeection from '../molecules/home/gaols';

const HomeTemplate = () => {

  return (
    <div>
      <Loader />
      <Header />
      <Hero />
      <Mission />
      <SomeCharityListing />
      <GoalsSeection />
    </div>
  );
};

export default HomeTemplate;
