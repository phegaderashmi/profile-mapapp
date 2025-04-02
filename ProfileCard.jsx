const ProfileCard = ({ profile }) => {
  return (
    <div style={{ 
      border: "1px solid #ddd", 
      padding: "20px", 
      borderRadius: "12px", 
      maxWidth: "350px", 
      background: "linear-gradient(135deg, #ffffff, #f0f0f0)",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      transition: "transform 0.3s ease-in-out"
    }}
      onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
      onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
    >
      <h2 style={{ 
        color: "#333", 
        fontSize: "1.8em", 
        marginBottom: "10px", 
        fontWeight: "bold"
      }}>{profile.name}</h2>
      <p style={{ 
        color: "#555", 
        fontSize: "1.1em", 
        margin: "0", 
        fontStyle: "italic"
      }}>{profile.address}</p>
    </div>
  );
};

export default ProfileCard;