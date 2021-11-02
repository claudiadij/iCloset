import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, TopSection } from './Data';
import { InfoSection,  } from '../../components';

function Home() {
  return (
    <>
      <TopSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
    </>
  );
}

export default Home;