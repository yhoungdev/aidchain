import React, { Fragment } from 'react';
import Container from '@/app/_layout/container';
import DashboardStatBox from '@/components/atom/dashboard/dashboardStatBox';

interface IDashboardProps {}

const DashboardStatDetails = () => {
  return (
    <Container>
      <div className='my-[2em] flex justify-between flex-wrap   '>
        {[1, 1, 1].map((_) => (
          <Fragment key={_}>
            <DashboardStatBox />
          </Fragment>
        ))}
      </div>
    </Container>
  );
};

export default DashboardStatDetails;
