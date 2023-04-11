import logo from "./logo.svg";
import "./App.css";
import { mappls } from "mappls-web-maps";

function App() {
  const styleMap = { width: "99%", height: "99vh", display: "inline-block" };
  const mapProps = {
    center: [15.364000136209354, 75.12903301015133],
    traffic: false,
    zoom: 4,
    geolocation: false,
    clickableIcons: false,
  };
  let mapObject;
  let mapplsClassObject = new mappls();

  mapplsClassObject.initialize("89b264259cb0793c8868e642cba123b1", () => {
    mapObject = mapplsClassObject.Map({ id: "map", properties: mapProps });

    mapObject.on("load", () => {
      let markerObject = mapplsClassObject.Marker({
        map: mapObject,
        position: { lat: 15.367528016003071, lng: 75.12255049836793 },
      });
      markerObject.setIcon(
        "https://i0.wp.com/lawbhoomi.com/law-college-search/wp-content/uploads/2022/10/G.S.K.Law-College-Vidyanagar-Hubli-Gurusiddappa-Kotambri-Law-College.jpg?fit=250%2C250&ssl=1"
      );
    });
  });

  return (
    <div className="App">
      <div id="map" style={styleMap}></div>
    </div>
  );
}

export default App;
