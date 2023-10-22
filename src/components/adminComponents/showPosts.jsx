import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import img from '../../assets/adminAssets/adminLogin.jpg'

import Box from '@mui/material/Box';

export default function StandardImageList(data) {
  return (
    <Box>
    {data.data.data.posts?(
  <ImageList variant="masonry" cols={3} gap={8}>
    {data.data.data.posts.map((item) => (
      <ImageListItem key={item.img}>
        
        <img
          srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
          src={`${item}?w=248&fit=crop&auto=format`}
          alt={item.title}
          loading="lazy"
        />
      </ImageListItem>
    ))}
  </ImageList>):(
       <div className='flex justify-center items-center bg-[#fff]'>
        <div>
            <img className='w-60 h-60' src={img} alt="" />
            <p className='text-[#c23939] flex justify-center'>No Image: please Add </p>
        </div>
       </div>
  )}
</Box>
  );
}
