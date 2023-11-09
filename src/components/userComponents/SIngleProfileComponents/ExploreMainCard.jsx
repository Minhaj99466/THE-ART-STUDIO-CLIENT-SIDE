import { Button, Typography } from '@material-tailwind/react'

import ProfileCardSingle from './ArtistCardSingleView'
import { useNavigate } from 'react-router-dom'

function ExploreMainCard() {
  const navigate=useNavigate()
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
          <Button className="my-10" onClick={()=>navigate('/explore')}>Discover More</Button>
        </Typography>
      </div>
    </>
  )
}

export default ExploreMainCard
