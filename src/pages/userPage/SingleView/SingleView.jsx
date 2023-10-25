import { Container } from '@mui/material'
import React from 'react'
import ArtistProfile from '../../../components/userComponents/ArtistProfile';
import Banner from '../../../components/userComponents/Banner';
import TabsDefault from '../../../components/userComponents/Tabs';
function SingleView() {
  return (
  <>
     <div className=" w-screen h-20 bg-black" />
  <Container> <ArtistProfile/></Container>
 
    </>
  )
}

export default SingleView
