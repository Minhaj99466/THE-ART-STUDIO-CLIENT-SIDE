
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Button } from '@material-tailwind/react';
import img from '../../assets/artistsAssets/Image folder-cuate.png'
import AddPost from '../artistComponents/AddPost';
import { useQuery } from "@tanstack/react-query";
import ArtistRequest from "../../utils/artistRequest";
import { useSelector } from 'react-redux';
import { InfinitySpin } from "react-loader-spinner";
import { useNavigate } from 'react-router-dom';


export default function Gallery() {
  const navigate=useNavigate()
    const { artistInfo } = useSelector((state) => state.artist);
    const id = artistInfo.email;

    const { isLoading, error, data } = useQuery({
        queryKey: ["artist"],
        queryFn: () =>
          ArtistRequest.get(`/Profiledetails/${id}`).then((res) => res.data),
      });
    
      if (isLoading) return <InfinitySpin width="200" color="#4fa94d" />;
    
      if (error) {
        if (error.response) {
          if (error.response.status === 500) {
            localStorage.removeItem("ArtistToken");
            navigate("/artist/login");
          }
        } else {
          return <p>somthing went wrong</p>;
        }
      }

  return (
    <Box>
        <div className='flex justify-between py-5' >
          <h1 className='font-sans text-2xl'>Gallery</h1>
            <AddPost/>
        </div>
        {data.profileData.posts?(
      <ImageList variant="masonry" cols={3} gap={8}>
        {data.profileData.posts.map((item) => (
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

