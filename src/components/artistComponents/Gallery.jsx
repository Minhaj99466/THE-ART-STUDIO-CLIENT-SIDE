
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Button } from '@material-tailwind/react';
import img from '../../assets/artistsAssets/Image folder-cuate.png'
import AddPost from '../artistComponents/AddPost';

export default function Gallery() {
    let itemData
  return (
    <Box>
        <div className='flex justify-end' >
            <AddPost/>:
        </div>
        {itemData?(
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
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

