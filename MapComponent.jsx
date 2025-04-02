import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const MapComponent = ({ lat, lng }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY", // Replace with your API key
  });

  if (!isLoaded) return <div style={{ textAlign: "center", fontSize: "18px", color: "#555", padding: "20px" }}>Loading Map...</div>;

  return (
    <div style={{ 
      width: "100%", 
      height: "450px", 
      borderRadius: "12px", 
      overflow: "hidden", 
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
      margin: "20px auto",
      maxWidth: "800px",
      border: "1px solid #ddd"
    }}>
      <GoogleMap 
        mapContainerStyle={{ width: "100%", height: "100%" }}
        center={{ lat, lng }} 
        zoom={12}
        options={{
          styles: [
            {
              featureType: "water",
              elementType: "geometry.fill",
              stylers: [{ color: "#d3e2f4" }]
            },
            {
              featureType: "road",
              elementType: "geometry",
              stylers: [{ lightness: 100 }]
            }
          ],
          disableDefaultUI: true,
          zoomControl: true,
        }}
      >
        <Marker position={{ lat, lng }} />
      </GoogleMap>
    </div>
  );
};

export default MapComponent;