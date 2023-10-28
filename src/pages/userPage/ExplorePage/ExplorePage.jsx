import React from 'react'
import ArtistCards from '../../../components/userComponents/ExploreComponents/ArtistCards';
import Banner from '../../../components/userComponents/ExploreComponents/Banner';

import { Container } from '@mui/material';
import { Input } from '@material-tailwind/react';
function ExplorePage() {
  return (
    <>
    <Banner/>
  
    <Container className='pt-10  '>
    <ArtistCards/>
    </Container>
    </>
  )
}

export default ExplorePage
