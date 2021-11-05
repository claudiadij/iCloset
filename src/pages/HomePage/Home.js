import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, TopSection } from './Data';
import { InfoSection } from '../../components';
import NavbarBefore from '../../components/Navbar/NavbarBeforeLogin';

function Home() {
  return (
    <>
      <NavbarBefore />
      <TopSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
    </>
  );
}

export default Home;