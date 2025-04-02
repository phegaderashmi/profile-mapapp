import { Link } from "react-router-dom";
import { profiles } from "../data";

const ProfileList = () => {
  return (
    <div style={{ 
      padding: "20px", 
      maxWidth: "600px", 
      margin: "50px auto", 
      border: "1px solid #ddd", 
      borderRadius: "12px", 
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#fff", 
      textAlign: "center", 
      fontFamily: "Arial, sans-serif", 
      background: "linear-gradient(135deg, #f0f0f0, #ffffff)"
    }}>
      <h2 style={{ 
        color: "#333", 
        fontSize: "26px", 
        marginBottom: "15px", 
        fontWeight: "bold", 
        textTransform: "uppercase"
      }}>Profiles</h2>
      <ul style={{ listStyle: "none", padding: "0" }}>
        {profiles.map(profile => (
          <li key={profile.id} style={{ 
            padding: "15px", 
            borderBottom: "1px solid #ddd", 
            transition: "background 0.3s, transform 0.2s", 
            borderRadius: "8px", 
            backgroundColor: "#fafafa",
            margin: "10px 20px", 
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)",
            cursor: "pointer"
          }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "#e9f5ff";
              e.currentTarget.style.transform = "scale(1.02)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "#fafafa";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <Link to={`/profile/${profile.id}`} style={{ 
              textDecoration: "none", 
              color: "#007bff", 
              fontWeight: "bold", 
              fontSize: "18px", 
              transition: "color 0.3s" 
            }}
              onMouseOver={(e) => e.target.style.color = "#0056b3"}
              onMouseOut={(e) => e.target.style.color = "#007bff"}
            >
              {profile.name}
            </Link> 
            <span style={{ 
              color: "#666", 
              fontSize: "16px", 
              marginLeft: "8px",
              display: "block",
              marginTop: "5px"
            }}>{profile.address}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileList;