import React from 'react'
import ArtistCards from '../../../components/userComponents/ArtistCards';
import Banner from '../../../components/userComponents/Banner';
import TabsDefault from '../../../components/userComponents/Tabs';
import { Container } from '@mui/material';
function ExplorePage() {
  return (
    <>
    <Banner/>
    <Container className='pt-10 w-screen'>
    <TabsDefault/>
    <ArtistCards/>
    </Container>
    </>
  )
}

export default ExplorePage
