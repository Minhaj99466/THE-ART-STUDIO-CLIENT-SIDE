import { Button, Typography } from '@material-tailwind/react'

import ProfileCardSingle from './ArtistCardSingleView'

function ExploreMainCard() {
  return (
    <>
     <div className=" bg-[#f4f4f4] m-10 rounded-xl ">
        <Typography
          className="flex justify-center  my-10  text-gray-700 "
          variant="h3"
        >
          Explore More
        </Typography >
        <div className='flex justify-around'>
        <ProfileCardSingle />
        </div>
        <Typography
          className="flex justify-center font-semibold  text-xl text-black"
        >
          <Button className="my-10">Discover More</Button>
        </Typography>
      </div>
    </>
  )
}

export default ExploreMainCard
