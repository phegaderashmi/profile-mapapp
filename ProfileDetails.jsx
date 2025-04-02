import { useParams } from "react-router-dom";
import { profiles } from "../data";
import ProfileCard from "../components/ProfileCard";
import MapComponent from "../components/MapComponent";

const ProfileDetails = () => {
  const { id } = useParams();
  const profile = profiles.find(p => p.id === parseInt(id));

  if (!profile) return <h2>Profile not found</h2>;

  return (
    <div>
      <ProfileCard profile={profile} />
      <div style={{ height: "500px", width: "100%" }}>
  <MapComponent lat={51.505} lng={-0.09} />
</div>


    </div>
  );
};

export default ProfileDetails;
