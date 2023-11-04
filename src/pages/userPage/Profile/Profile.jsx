import { Container } from "@mui/material";
import ProfileCard from "../../../components/userComponents/UserProfile/Profile";
import TabsOrder from "../../../components/userComponents/UserProfile/TabsOrder";

function Profile() {
  return (
    <>
      <Container>
        <ProfileCard />
      <TabsOrder />
      </Container>
    </>
  );
}

export default Profile;
