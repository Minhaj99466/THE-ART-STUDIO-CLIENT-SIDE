import { Container } from "@mui/material";
import ArtistProfile from "../../../components/userComponents/SIngleProfileComponents/ArtistProfile.jsx";
import ExploreMainCard from "../../../components/userComponents/SIngleProfileComponents/ExploreMainCard.jsx";

function SingleView() {
  return (
    <>
      {/* <div className=" w-screen h-20 bg-black" /> */}
      <div className="container mx-auto">
        <ArtistProfile />
      </div>

      <ExploreMainCard />
    </>
  );
}

export default SingleView;
