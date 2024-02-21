import './App.css';
import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon, divIcon, point } from "leaflet";

function App() {
    // Affichage des markers
    const customIcon = new Icon({
        iconUrl : require("./icons/location.png"),
        iconSize: [38, 38]
    });

    // Les markers
    const markers = [
        {
            geocode: [16.1920, -61.6],
            popUp: "Hello popUp"
        },
        {
            geocode: [16.1920, -61],
            popUp: "Hello popUp"
        },
        {
            geocode: [16.1, -61.6],
            popUp: "Hello popUp"
        }
    ];

  return (
      <div className="App">
        <header>
          <h1>Test</h1>
        </header>
        <div className="Map">
          <MapContainer center={[16.1920, -61.48]} zoom={10}>
              <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />

                  {/* Les markers sur la map */}
                  {markers.map((marker) => (
                      <Marker position={marker.geocode} icon={customIcon}>
                          <Popup>{marker.popUp}</Popup>
                      </Marker>
                  ))}
          </MapContainer>
        </div>
      </div>
  );
}

export default App;