import DashboardHeader from '@/components/molecules/dashboard/header';
import DashboardNav from '@/components/atom/dashboard/dashboardNav';
import React from 'react';
import DashboardStatDetails from '@/components/molecules/dashboard/StatContainer';
import DisplayOrgandDonationList from '@/components/templates/dashboard/displayOrgandDonationList';

const Overview = () => {
  return (
    <>
      <DashboardHeader />
      <DashboardNav />
      <DashboardStatDetails />
      <DisplayOrgandDonationList />
    </>
  );
};

export default Overview;
