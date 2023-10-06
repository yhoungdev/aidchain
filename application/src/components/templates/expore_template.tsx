import React from 'react';
import Header from '../molecules/layouts/header';
import ExploreHero from '../molecules/explore/hero';
import CharityListing from '../molecules/explore/charityListing';

const ExploreTemplate = () => {
  return (
    <>
      <Header />
      <ExploreHero />
      <CharityListing />
    </>
  );
};

export default ExploreTemplate;
