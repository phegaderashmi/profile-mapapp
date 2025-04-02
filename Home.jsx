import ProfileList from "../components/ProfileList";

const Home = () => {
  return (
    <div style={{ 
      textAlign: "center", 
      padding: "50px", 
      background: "linear-gradient(135deg, #e3f2fd, #ffffff)",
      minHeight: "100vh", 
      fontFamily: "Arial, sans-serif"
    }}>
      <h1 style={{ 
        fontSize: "36px", 
        fontWeight: "bold", 
        color: "#333", 
        marginBottom: "20px", 
        textTransform: "uppercase",
        letterSpacing: "1px"
      }}>Profile Explorer</h1>
      <ProfileList />
    </div>
  );
};

export default Home;